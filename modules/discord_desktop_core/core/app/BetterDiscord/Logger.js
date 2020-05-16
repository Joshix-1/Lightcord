const { EventEmitter } = require("events")

class Logger extends EventEmitter{
    constructor(name){
        super()
        this.name = name
        this.on("log", data => {
            let args = ["%c["+this.name+"]", "\n  font-weight: bold;\n  color: purple;\n", ...data]
            console.log(...args)
        })
    }

    log(...data){
        this.emit("log", data)
    }
}

module.exports = Logger
module.exports.default = Logger