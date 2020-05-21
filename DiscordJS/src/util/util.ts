import { DiscordChannel } from "./DiscordToModules"
import { Channel } from "..";

export function createChannel(channel:DiscordChannel):Channel{
    let constructor = channels[channel.type]
    return new constructor(channel)    
}

const channels:(new(channel:DiscordChannel) => Channel)[] = [
    TextChann
]

export function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
             if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    }); 
}

/**
 * Transforms a snowflake from a decimal string to a bit string.
 * @param  {string} num Snowflake to be transformed
 * @returns {string}
 * @private
 */
export function idToBinary(num:string):string{
    let bin = '';
    let high = parseInt(num.slice(0, -10)) || 0;
    let low = parseInt(num.slice(-10));
    while (low > 0 || high > 0) {
        bin = String(low & 1) + bin;
        low = Math.floor(low / 2);
        if (high > 0) {
            low += 5000000000 * (high % 2);
            high = Math.floor(high / 2);
        }
    }
    return bin;
}  

/**
* Transforms a snowflake from a bit string to a decimal string.
* @param  {string} num Bit string to be transformed
* @returns {string}
* @private
*/
export function binaryToID(num:string):string {
    let dec = '';

    while (num.length > 50) {
        const high = parseInt(num.slice(0, -32), 2);
        const low = parseInt((high % 10).toString(2) + num.slice(-32), 2);

        dec = (low % 10).toString() + dec;
        num = Math.floor(high / 10).toString(2) +
        Math.floor(low / 10)
        .toString(2)
        .padStart(32, '0');
    }

    let num2 = parseInt(num, 2);
    while (num2 > 0) {
        dec = (num2 % 10).toString() + dec;
        num2 = Math.floor(num2 / 10);
    }

    return dec;
}