class Modules {
    /** use this as less as possible */
    static get modules(){
        let cache = webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache
        return Object.values(cache)
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

module.exports = Modules
module.exports.default = Modules

global.BDModules = Modules