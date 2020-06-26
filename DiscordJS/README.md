# Lightcord's Discord.js

### What is this ? 
Lightcord includes a Discord.js-like api. This is written in this folder.

### Where can I get the documentation ?
[Documentation here](https://discord.js.org/#/docs/main/11.6.4/general/welcome)
Discord.js on Lightcord is following Discord.js 11.6.4 specs.

### How do I use it ?
Discord.js can be accessed under the following global properties

| Name                         | Global Properties       | alias                   | Limitations                                                           |
|------------------------------|-------------------------|-------------------------|-----------------------------------------------------------------------|
| DiscordJS main module        | window.DiscordJS        | none                    | none                                                                  |
| DiscordJS client             | window.DiscordJSClient  | window.DiscordJS.client | none                                                                  |
| DiscordJS Client constructor | window.DiscordJS.Client | none                    | Can't be constructed because there's no need for more than one client |

### Deprecations
1. Any method that only bot can use (it will throw a `DiscordJSError` saying that Lightcord can't do that)
3. Any method 