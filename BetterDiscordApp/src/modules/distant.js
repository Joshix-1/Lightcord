import BugHunterBadge from "../svg/bug_hunter"

export function uuidv4() { // Generate UUID (No crypto rng)
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}  

const awaitingBadgesPromises = {}

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
            handleRequest(Routes.badges(user), "GET")
            .then(async res => {
                if(res.status !== 200){// Couldn't fetch badges: server error
                    return resolve([]) // no badge fetched
                }
                return resolve(await res.json())
            }).catch(() => {// Couldn't fetch badges: error
                return resolve([]) // no badge fetched
            })
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

const handleRequest = function(route, method){
    return fetch(`${Constants.SERVER_URL}/api/v1${route}`, {
        method,
        headers: {
            "CLIENT": "Lightcord"
        }
    })
}

export const Constants = {
    SERVER_URL: "http://127.0.0.1",
    badges: [
        {
            name: "Bug Hunter",
            id: "f04698f5-816b-41e3-bd01-92291193d7a5",
            defaultUsers: [
                "696481194443014174",
                "585858920149549067"
            ],
            scopes: [],
            component: BugHunterBadge,
            href: "https://github.com/lightcord/lightcord/wiki/badges/bug_hunter"
        }
    ]
}

export const Routes = {
    badges(user){
        return `/${user}/badges`
    }
}