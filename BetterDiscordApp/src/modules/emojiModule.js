import {bdConfig, settingsCookie} from "../0globals";
import DataStore from "./dataStore";
import BDV2 from "./v2";
import Utils from "./utils";

const Constants = {
    EmojiRegex: /<a?\.(\w+)\.(\d+)>/g
}

let CustomEmojiModule = BDModules.get(e => e.CustomEmoji)[0]
let EmojiModuleApi = BDModules.get(e => e.default && e.default.getCustomEmojiById)[0]
let AutocompleteModule = BDModules.get(e => e.default && e.default.displayName === "Autocomplete")

export default new class EmojiModule {
    constructor(){}

    async init(){
        while (!BDV2.MessageComponent) await new Promise(resolve => setTimeout(resolve, 100));

        if (this.cancelEmojiRender) return;
        this.cancelEmoteRender = Utils.monkeyPatch(BDV2.MessageComponent, "default", {before: (data) => {
            const message = Utils.getNestedProp(data.methodArguments[0], "childrenMessageContent.props.message")
            if(!message)return
            const content = Utils.getNestedProp(data.methodArguments[0], "childrenMessageContent.props.content")
            if(!content || !content.length)return

            /**
             * @type {{
             *  raw: string,
             *  name: string,
             *  id: string,
             *  animated: boolean
             * }[]}
             */
            let emojis = []
            
            const newContent = []
            for(let node of content){
                if (typeof(node) !== "string") {
                    newContent.push(node)
                    continue
                };
                let parsed;
                let hasParsed = false
    
                do {
                    parsed = Constants.EmojiRegex.exec(node);
                    if (parsed) {
                        hasParsed = true
                        if(!EmojiModuleApi)EmojiModuleApi = BDModules.get(e => e.default && e.default.getCustomEmojiById)[0]
                        const emoji = EmojiModuleApi.default.getCustomEmojiById(parsed[2])
                        if(emoji){
                            emojis.push({
                                animated: emoji.animated,
                                name: emoji.name,
                                id: emoji.id,
                                raw: parsed[0]
                            })
                        }else{
                            emojis.push({
                                animated: parsed[0].startsWith("<a"),
                                name: parsed[1],
                                id: parsed[2],
                                raw: parsed[0]
                            })
                        }
                    }
                } while (parsed);

                if(hasParsed){
                    const words = node.split(" ").map((word, index, arr) => {
                        if(!word)return ""
                        const emoji = emojis.find(e => e.raw == word)
                        if(!emoji)return word
                        if(!CustomEmojiModule)CustomEmojiModule = BDModules.get(e => e.CustomEmoji)[0]
                        return React.createElement(CustomEmojiModule.CustomEmoji, {
                            emoji: {
                                name: `.${emoji.name}.`,
                                emojiId: emoji.id,
                                animated: emoji.animated,
                                jumboable: arr.length === 1 && content.length === 1
                            }
                        })
                    }).reduce((previous, current) => {
                        if(previous.length === 0)return [current]
                        if(typeof current === "string"){
                            if(typeof previous[previous.length - 1] === "string"){
                                previous[previous.length - 1] += ` ${current}`
                                return previous
                            }
                            previous.push(" "+current)
                            return previous
                        }
                        previous.push(" ", current)
                        return previous
                    }, [])
                    newContent.push(...words)
                }else{
                    newContent.push(node)
                }
            }
            while(data.methodArguments[0].childrenMessageContent.props.content[0]){
                data.methodArguments[0].childrenMessageContent.props.content.shift()
            }
            while(newContent[0]){
                data.methodArguments[0].childrenMessageContent.props.content.push(newContent.shift())
            }
        }});

        if(!AutocompleteModule)AutocompleteModule = BDModules.get(e => e.default && e.default.displayName === "Autocomplete")

    }

    disable(){
        if (this.cancelEmoteRender) return;
        this.cancelEmoteRender();
        this.cancelEmoteRender = null;
    }
}
/*
let loadImageModule = BDModules.get(e => e.loadImage)[0]
let getEmojiModule = BDModules.get(e => e.default && e.default.getEmojiURL)[0]

class Emoji extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
            hover: false
        }
        this.key = undefined
        this.cancelLoadImage = null
        this.onError = function() {
        }
    }

    onError() {
        var src = this.getSrc();
        if(src !== null){
            if(!loadImageModule)loadImageModule = BDModules.get(e => e.loadImage)[0] // lazy load
            this.cancelLoadImage = loadImageModule.loadImage(src, (e) => {
                if(!e){
                    this.key = Date.now()
                    this.forceUpdate()
                }
            })
        }
    }

    onMouseEnter(ev) {
        this.setState({
            hover: true
        });
        var onMouseEnter = this.props.onMouseEnter;
        if(onMouseEnter)onMouseEnter(ev)
    }

    onMouseLeave(ev) {
        this.setState({
            hover: false
        });
        var onMouseLeave = t.props.onMouseLeave;
        if(onMouseLeave)onMouseLeave(ev)
    }


    componentWillUnmount() {
        if(this.cancelLoadImage)this.cancelLoadImage()
    }

    getSrc(defaultProps) {
        if(!defaultProps)defaultProps = this.props
        const props = defaultProps
        const src = props.src
        const emojiId = props.emojiId
        const emojiName = props.emojiName
        const animated = props.animated
        const shouldAnimate = props.shouldAnimate
        const isFocused = props.isFocused
        const hover = this.state.hover

        if(src)return src
        if(emojiId){
            if(!getEmojiModule)getEmojiModule = BDModules.get(e => e.default && e.default.getEmojiURL)[0]
            return getEmojiModule.default.getEmojiURL({
                id: emojiId,
                animated: isFocused && animated && (shouldAnimate || hover)
            })
        }
        return undefined
    }

    render() {
        var props = this.props,
            emojiName = props.emojiName,
            animated = props.animated,
            jumboable = props.jumboable,
            imgProps = {

            }(props.shouldAnimate, props.isFocused, props.emojiId, props.autoplay, y(props, ["emojiName", "animated", "className", "jumboable", "shouldAnimate", "isFocused", "emojiId", "autoplay"])),
            src = this.getSrc();
        if(src){
            return React.createElement("img", Object.assign({}, imgProps, {
                key: this.key,
                src,
                alt: emojiName || undefined,
                draggable: false
            }, animated ? {
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave
            } : {}, {
                className: `emoji${jumboable ? " jumboable" : ""}`,
                onError: this.onError
            }))
        }
        return React.createElement("span", {
            className: "emoji emoji-text"
        }, undefined, emojiName)
    }
}
Emoji.displayName = "Emoji";

function createEmojiComponent(){
    return React.createElement(Emoji, Object.assign({}, t, {
        shouldAnimate: t.animated
    }))
}*/