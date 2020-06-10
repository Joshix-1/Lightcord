import { getCommitID } from "./common/git"
const pak = require("../package.json")

export const releaseChannel:"stable"|"canary"|"ptb"|"development" = "stable"
export const version = "0.0.306"
export const commit = getCommitID()
export default {
    releaseChannel,
    version,
    commit
}

global["BuildInfo"] = {
    releaseChannel,
    version: pak.version,
    commit
}