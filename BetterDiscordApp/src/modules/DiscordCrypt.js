/**
 * Based on DiscordCrypt https://github.com/leogx9r/DiscordCrypt
 */

import { readFileSync } from "fs"
import { join } from "path"
import Utils from "./utils"


let searchModule = BDModules.get(e => e.search)[0]
export default new class DiscordCrypt {
    constructor(){
        if(!searchModule)searchModule = BDModules.get(e => e.search)[0]
        this.searchUiClass = Utils.removeDa(`.${searchModule.search} .${searchModule.searchBar}`) 
    }
}

const Constants = {
    ENCODED_MESSAGE_HEADER: "⢷⢸⢹⢺",
    ENCODED_KEY_HEADER: "⢻⢼⢽⢾",
    ENCRYPT_PARAMETER: Buffer.from('DiscordCrypt KEY GENERATION PARAMETER'),
    AUTH_TAG_PARAMETER: new Uint8Array(Buffer.from('discordCrypt MAC')),
    PRIMARY_KEY_PARAMETER: new Uint8Array(Buffer.from('discordCrypt-primary-secret')),
    SECONDARY_KEY_PARAMETER: new Uint8Array(Buffer.from('discordCrypt-secondary-secret')),
    KEY_IGNORE_TIMEOUT: 60 * 1000,
    KEY_DELETE_TIMEOUT: 5,
    ENCRYPT_MODES: [
        /* Blowfish(Blowfish, AES, Camellia, IDEA, TripleDES) */
        0, 1, 2, 3, 4,
        /* AES(Blowfish, AES, Camellia, IDEA, TripleDES) */
        5, 6, 7, 8, 9,
        /* Camellia(Blowfish, AES, Camellia, IDEA, TripleDES) */
        10, 11, 12, 13, 14,
        /* IDEA(Blowfish, AES, Camellia, IDEA, TripleDES) */
        15, 16, 17, 18, 19,
        /* TripleDES(Blowfish, AES, Camellia, IDEA, TripleDES) */
        20, 21, 22, 23, 24
    ],
    ENCRYPT_BLOCK_MODES: [
        'CBC', /* Cipher Block-Chaining */
        'CFB', /* Cipher Feedback Mode */
        'OFB', /* Output Feedback Mode */
    ],
    PADDING_SCHEMES: [
        'PKC7', /* PKCS #7 */
        'ANS2', /* ANSI X.923 */
        'ISO1', /* ISO-10126 */
        'ISO9', /* ISO-97972 */
    ],
    UP1_FILE_HOST: 'https://pastebin.synalabs.hosting',
    UP1_FILE_HOST_API_KEY: '4034a170b4517897238b58ecbe902dee187bf890',
    ED25519_SIGNING_KEY: 'GTs+VoJSQC6e0GDTVRcskIVBhdqphUwqwrxqp64gXEQ=',
    UNLOCK_ICON: "PHN2ZyBjbGFzcz0iZGMtc3ZnIiBmaWxsPSJsaWdodGdyZXkiIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAwI" +
    "DI0IDI0IiB3aWR0aD0iMjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMTdjMS4xI" +
    "DAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyem02LTloLTFWNmMwLTIuNzYtMi4yNC01LTUtNVM3IDMuMjQgN" +
    "yA2aDEuOWMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMSAxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXYySDZjLTEuMSAwLTIgLjktMiAyd" +
    "jEwYzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJWMTBjMC0xLjEtLjktMi0yLTJ6bTAgMTJINlYxMGgxMnYxMHoiPjwvc" +
    "GF0aD48L3N2Zz4=",
    LOCK_ICON: "PHN2ZyBjbGFzcz0iZGMtc3ZnIiBmaWxsPSJsaWdodGdyZXkiIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAwIDI" +
    "0IDI0IiB3aWR0aD0iMjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0aCBkPSJNMCAwaDI" +
    "0djI0SDBWMHoiIGlkPSJhIi8+PC9kZWZzPjxjbGlwUGF0aCBpZD0iYiI+PHVzZSBvdmVyZmxvdz0idmlzaWJsZSIgeGxpbms6aHJ" +
    "lZj0iI2EiLz48L2NsaXBQYXRoPjxwYXRoIGNsaXAtcGF0aD0idXJsKCNiKSIgZD0iTTEyIDE3YzEuMSAwIDItLjkgMi0ycy0uOS0" +
    "yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptNi05aC0xVjZjMC0yLjc2LTIuMjQtNS01LTVTNyAzLjI0IDcgNnYySDZjLTEuMSAwLTI" +
    "gLjktMiAydjEwYzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJWMTBjMC0xLjEtLjktMi0yLTJ6TTguOSA2YzAtMS43MSA" +
    "xLjM5LTMuMSAzLjEtMy4xczMuMSAxLjM5IDMuMSAzLjF2Mkg4LjlWNnpNMTggMjBINlYxMGgxMnYxMHoiLz48L3N2Zz4=",
    DICEWARE_WORD_LIST: readFileSync(join(__dirname, "..", "assets", "diceware.list"), "utf8").split( '\r' ).join( '' ).split( '\n' ),
    BLACKLISTED_GUILDS: JSON.parse(readFileSync(join(__dirname, "..", "assets", "blacklist.json")))
}