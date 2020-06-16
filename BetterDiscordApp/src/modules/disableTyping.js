import webpackModules from "./webpackModules"

export default new class DisableTyping {
    constructor(){
        window.Lightcord.Api.ensureExported(e => e.default && e.default.startTyping)
        .then(typingModule => {
            console.log(typingModule, new Error("gay"))
            let self = this
            const startTyping = typingModule.default.startTyping
            typingModule.default.startTyping = function(){
                if(self.disabled)return startTyping.call(this, ...arguments)
            }
            const stopTyping = typingModule.default.stopTyping
            typingModule.default.stopTyping = function(){
                if(self.disabled)return stopTyping.call(this, ...arguments)
            }
            this.disabled = true
        })
    }

    disable(){
        this.disabled = true
    }

    enable(){
        this.disabled = false
    }
}