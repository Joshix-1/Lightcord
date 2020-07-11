const BDModules = window.BDModules

export default new class WebpackLoader {
    constructor(){}

    get(id: number):any{
        return BDModules.get(id)
    }
    find(filter: (mod:any) => boolean):any{
        let result = BDModules.get(filter)[0]
        if(!result){
            console.warn(filter, "couldn't find the module.")
        }
        return result
    }
    findByUniqueProperties(props:(string|number)[]):any{
        return BDModules.get((mod) => {
            if(mod.__esModule && ("default" in mod)){
                let doesMatch = true
                for(let prop of props){
                    if(!Object.prototype.hasOwnProperty.call(mod.default, prop))doesMatch = false
                }
                if(doesMatch)return true
            }
            for(let prop of props){
                if(!Object.prototype.hasOwnProperty.call(mod, prop))return false
            }
            return true
        })[0]
    }
    filter(filter: (mod:any) => boolean):any[]{
        return BDModules.get(filter)
    }
    filterByUniqueProperties(props:(string|number)[]):any{
        return BDModules.get((mod) => {
            if(mod.__esModule && ("default" in mod)){
                let doesMatch = true
                for(let prop of props){
                    if(!Object.prototype.hasOwnProperty.call(mod.default, prop))doesMatch = false
                }
                if(doesMatch)return true
            }
            for(let prop of props){
                if(!Object.prototype.hasOwnProperty.call(mod, prop))return false
            }
            return true
        })
    }
}