import * as path from "path"

export default function requireNativeDiscordModule(id){
    return require(path.join(__dirname, "..", "modules", id))
}