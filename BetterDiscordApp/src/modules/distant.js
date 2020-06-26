import BugHunterBadge from "../svg/bug_hunter"
import LightcordUserBadge from "../svg/LightcordUser";
import nodeFetch from "node-fetch"
import { settingsCookie } from "../0globals";

export function uuidv4() { // Generate UUID (No crypto rng)
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}  

const awaitingBadgesPromises = {}
let badgesToFetch = []

export default new class DistantServer {
    constructor(){
        this._cache = {
            badges: {

            }
        }
    }

    get cache(){
        return this._cache
    }

    set cache(data){
        if(typeof data !== "object" || typeof this._cache !== "object")return this._cache = data
        return this._cache = Object.assign(this._cache, data)
    }

    async delete(){
        BdApi.showToast("Deleting all infos about you on Lightcord Servers...", {type: "warn"})
        return handleRequest(Routes.delete, "delete")
        .then(async res => {
            if(res.status !== 200){
                BdApi.showToast("An error occured, couldn't delete informations. See console for more infos", {type: "error"})
                throw new Error(`Couldn't delete all informations: ${(res.status+" "+res.statusText+" "+await res.text())}`)
            }
            console.info(`Succesfully deleted informations.`)
            BdApi.showToast("Succesfully deleted informations", {type: "success"})
            window.Lightcord.Api.Authorization = null
            return res.json()
        }).catch((err) => {
            BdApi.showToast("An error occured, couldn't delete informations. See console for more infos", {type: "error"})
            throw new Error(`Couldn't delete all informations: ${err.stack}`)
        })
    }

    /**
     * Get custom badges from the user ID.
     * @param {string} user The user ID 
     * @returns {Promise<Constants["badges"]>}
     */
    async getBadges(user){
        if(this.cache.badges[user])return this.cache.badges[user]
        if(awaitingBadgesPromises[user])return awaitingBadgesPromises[user]

        let resolve
        const newPromise = new Promise((res) => (resolve = res))
        awaitingBadgesPromises[user] = newPromise

        const badges = []
        for(let badge of Constants.badges){
            if(badge.defaultUsers.includes(user))badges.push(badge)
        }
        const fetchedBadges = await new Promise((resolve) => {
            badgesToFetch.push([user, resolve])
            setTimeout(() => {
                let users = badgesToFetch
                if(users.length === 0)return
                badgesToFetch = []
                handleRequest(Routes.badges, "POST", JSON.stringify(users.map(e => e[0])))
                .then(async res => {
                    if(res.status !== 200){// Couldn't fetch badges: server error
                        users.forEach(data => {
                            data[1]([])// resolve no badge fetched
                        })
                    }
                    const responseBody = await res.json()
                    console.log(responseBody)
                    for(let user of responseBody){
                        let promise = users.find(promise => promise[0] === user.user_id)
                        promise[1](user.badges)
                    }
                }).catch((err) => {// Couldn't fetch badges: error
                    if(!(err instanceof LightcordError))console.error(err)
                    users.forEach(data => {
                        data[1]([])// resolve no badge fetched
                    })
                })
            }, 0)
        })
        for(let badge of fetchedBadges){
            if(!Constants.badges.find(e => e.id === badge))continue // We do not have the Component, skip it.
            if(badges.find(e => e.id === badge))continue // Already inserted.
            badges.push(Constants.badges.find(e => e.id === badge))
        }
        this.cache = {
            badges: Object.assign(this.cache.badges, {[user]: badges})
        }
        setTimeout(() => {
            delete this.cache.badges[user]
        }, 600000);

        resolve(badges)
        delete awaitingBadgesPromises[user]
        return badges
    }
}

const handleRequest = function(route, method, data){
    if(!settingsCookie["lightcord-5"]){
        console.warn(`Canceling request on ${route} with method ${method} and body`, data, "because of settings.")
        return Promise.reject(new LightcordError("The current settings blocked the request."))
    }
    console.log(`Sending request on ${route} with method ${method} and body`, data)
    return nodeFetch(`${Constants.SERVER_URL}/api/v1${route}`, {
        method,
        headers: {
            "CLIENT": "Lightcord",
            "Authorization": window.Lightcord.Api.Authorization || "None::Anonymous"
        },
        ...(data ? {
            body: data
        } : {})
    })
}

class LightcordError extends Error {
    constructor(){
        super(...arguments)
        this.name = "LightcordError"
        
    }
}

export const Constants = {
    SERVER_URL: "http://127.0.0.1",
    badges: [ // TODO: 
        /*{
            name: "Lightcord User",
            id: "01cfa7b0-7cdb-4b0e-8258-9c6a78235c93",
            defaultUsers: [],
            scopes: [
                "user"
            ],
            component: LightcordUserBadge
        }, */{
            name: "Lightcord Bug Hunter",
            id: "f04698f5-816b-41e3-bd01-92291193d7a5",
            defaultUsers: [
                "696481194443014174",
                "696003456611385396"
            ],
            scopes: [],
            component: BugHunterBadge,
            href: "https://github.com/lightcord/lightcord/wiki/badges/bug_hunter"
        }
    ]
}

export const Routes = {
    badges: `/users/badges`,
    delete: `/delete`
}