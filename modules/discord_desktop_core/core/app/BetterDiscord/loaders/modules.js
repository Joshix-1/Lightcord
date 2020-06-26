let req 
setReq()

class Modules {
    static get modules(){
        if(req){
            return Object.values(req.c).filter(e => e && e.exports)
        }else{
            setReq()
            if(req){
                return Object.values(req.c).filter(e => e && e.exports)
            }else{
                return []
            }
        }
    }
    static get(ids, modules){
        if(typeof ids === "function"){
            return (modules || this.modules).map((mdl) => {
                if(mdl && typeof mdl.exports !== "undefined"){
                    return mdl.exports
                }else{
                    return null
                }
            }).filter(e => e).filter(ids)
        }else if(Array.isArray(ids)){
            modules = modules || this.modules
            return ids.map(id => this.get(id, modules))
        }else{
            modules = modules || this.modules
            let module = modules.find(e => e.i === ids)
            if(!module)return undefined
            return module.exports
        }
    }
}

Modules.default = Modules
module.exports = Modules

global.BDModules = Modules

function setReq(){
    try{
        req = webpackJsonp.push([[], {__extra_id__: (mdl, exports, req) => mdl.exports = req}, [["__extra_id__"]]]);
        if(req){
            delete req.m.__extra_id__;
            delete req.c.__extra_id__;/*
            Object.defineProperty(req.c, "0", {
                get: () => ({
                    i: 0,
                    l: true,
                    exports: require("react")
                }),
                configurable: false,
                enumerable: true
            })
            Object.defineProperty(req.c, "856", {
                get: () => ({
                    i: 856,
                    l: true,
                    exports: require("react")
                }),
                configurable: false,
                enumerable: true
            })
            Object.defineProperty(req.c, "71", {
                get: () => ({
                    i: 71,
                    l: true,
                    exports: require("react-dom")
                }),
                configurable: false,
                enumerable: true
            })*/
        }
    }catch(e){
        req = undefined
    }
}