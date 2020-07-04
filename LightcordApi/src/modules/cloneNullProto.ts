export default function cloneNullProto<Obj=any>(obj:Obj):Obj{ // recreate object without __proto__
    let o = Object.create(null)
    Object.keys(obj).forEach(k => {
        o[k] = obj[k]
    })
    return o
}