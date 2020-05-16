import {app} from "electron"
import Settings from "./common/Settings"
import * as fs from "fs"

let settings: Settings

export default function getSettings(){
    if(settings)return settings
    fs.mkdirSync(app.getPath("userData"), {recursive: true})
    settings = new Settings(app.getPath("userData"))
    return settings
}