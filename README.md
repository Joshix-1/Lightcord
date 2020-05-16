# Lightcord
A simple - customizable - Discord Client

## What's this ?
Lightcord is a simple and customizable client for Discord.
It includes [BandagedBD](https://github.com/rauenzi/BetterDiscordApp), [Glasscord](https://github.com/AryToNeX/Glasscord) and a discord.js like api.

## Informations
Lightcord doesn't *patch* Discord with it's content. If it would, Discord will update itself and break the patch. That's why Lightcord is a standalone Discord client. Just grab the latest release version you need, and launch it !

## Installation
You can install it from the release tab.

If you want to `git clone` it and launch it, follow these instructions:
```sh
git clone https://github.com/JeanOUINA/Lightcord
cd Lightcord
npm i
npm run test
```
Discord will launch next. You can see you have done it right by looking at the icon. 
![icon](https://i.imgur.com/rHnsPNO.png)

## BetterDiscord
BetterDiscord (BandagedBD) is already installed (modified version).
You can go into your settings manage plugins. 

Because it's more a pain than something good, global emotes are not supported on Lightcord. They have been removed. 
Only the freeze at the launch because of the downloading is pretty annoying. So I removed them.

## Plugins & Themes
Plugins and themes are not in the standard BetterDiscord folder. They have been moved because betterdiscord supports only stable, ptb and canary release. Using the same directory could cause problems with settings.

They are located in `%AppData%/LightCord_BD`. This is the main folder for BetterDiscord.

