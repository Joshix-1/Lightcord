![JS](https://img.shields.io/badge/--yellow?logo=javascript&style=flat-square)
![TS](https://img.shields.io/badge/--blue?logo=typescript&style=flat-square)
[![HitCount](http://hits.dwyl.com/Lightcord/Lightcord.svg)](http://hits.dwyl.com/Lightcord/Lightcord)
<br />
[![PayPal](https://img.shields.io/badge/donate-PayPal-blue?logo=PayPal&style=flat-square)](https://paypal.me/jenwina)
[![BTC](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/phorcysed/cryptodonate/master/badges/bitcoin.json&style=flat-square)](https://phorcysed.github.io/cryptodonate/btc.html?address=14hL2fPS2ASoe8Hcif87EqCS5AGHrepGKp&note=https://github.com/phorcysed)
[![CDN](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/phorcysed/cryptodonate/master/badges/cdn.json&style=flat-square)](https://phorcysed.github.io/cryptodonate/cdn.html?address=CbdW3pR4HBWJ6wyc1JeNXP4L2fh8QiL85v&note=https://github.com/phorcysed)
[![BCH](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/phorcysed/cryptodonate/master/badges/bitcoincash.json&style=flat-square)](https://phorcysed.github.io/cryptodonate/bch.html?address=qzqwhfyvkl324fue86r55q656nftfmxkhsn6qugenq&note=https://github.com/phorcysed)
[![XMR](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/phorcysed/cryptodonate/master/badges/monero.json&style=flat-square)](https://phorcysed.github.io/cryptodonate/xmr.html?address=42pGf1KHHpqaifJd3TtWSdcTmhGVwFp24cGxDoqaYLQJ6rH4pM7KqtUdTpoyxHScDTSJpPA2Bnv19b1bs2uPXgSMH2KYkwj&note=https://github.com/phorcysed)
[![ETH](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/phorcysed/cryptodonate/master/badges/ethereum.json&style=flat-square)](https://phorcysed.github.io/cryptodonate/eth.html?address=0xEFE45F22Ee844bf2Ba0E4d853FA0bC8c028fAfFe&note=https://github.com/phorcysed)
[![LTC](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/phorcysed/cryptodonate/master/badges/litecoin.json&style=flat-square)](https://phorcysed.github.io/cryptodonate/ltc.html?address=LNTmfMjHJgTHaB7rj8ZuWWuU1XkP2YeGCA&note=https://github.com/phorcysed)
<br />
[![Discord](https://img.shields.io/discord/705908350218666117?logo=discord&style=flat-square&color=%237289DA)](https://discord.gg/7eFff2A)
---
# Lightcord
A simple - customizable - Discord Client

## What's this ?
Lightcord is a simple and customizable client for Discord.
It includes [BandagedBD](https://github.com/rauenzi/BetterDiscordApp), [Glasscord](https://github.com/AryToNeX/Glasscord) and a discord.js like api.

## Informations
Lightcord doesn't *patch* Discord with it's content. If it was, Discord would update itself and break the patch. That's why Lightcord is a standalone Discord client. Just grab the latest release version you need, and launch it !

## Installing 
You can download a release from the [releases tab](https://github.com/Lightcord/Lightcord/releases).

If you want to run it from source, follow these instructions:
```sh
git clone https://github.com/Lightcord/Lightcord
cd Lightcord
npm i
npm run devInstall
npm run test
```
Discord will launch next. You can see you have done it right by looking at the icon. 
![icon](https://raw.githubusercontent.com/Lightcord/Lightcord/master/imagery/68747470733a2f2f692e696d6775722e636f6d2f72486e73504e4f2e706e67.png?token=APKOOA2LWWLCCUO2CIT2YPK64FHJA)
Then everytime you want to launch it just type in
```sh
npm run run
```

## Features
* **BetterDiscord** Themes/Plugins
* **Native** Custom RPC (No ban chance)
* Blocking Discord's **trackers**
* **Free emotes** (normal emotes) to use everywhere for Lightcord users
* **Login with token** (user/bot) [Make calls with bots]
* DM Adverts blocker (**AdBlock**) [Even in embeds]
* File certification/approval (tells you if a **file is safe or not**)
* Prevent **malicious** plugins [File scanner]
* **Always-On-Top** feature (great to chat while coding)
* Hide sensitive informations (blurry e-mail)
* Great scripting API
* Account information section
* Developer mode / experiments (get discord features before anyone else without updating)

### Soon
* Username history
* Custom BetterDiscord location (custom themes/plugins location) [more portability]

## BetterDiscord
BetterDiscord (BandagedBD) is already installed (modified version).
You can go into your settings to manage plugins. 

Because it's more painful than anything else, global emotes are not supported on Lightcord. They have been removed. 
The freeze caused by the emotes downloading at startup was annoying. So we removed them.

## Plugins & Themes
Plugins and themes are not in the standard BetterDiscord folder. They have been moved because betterdiscord supports only stable, ptb and canary release. Using the same directory could cause problems with settings.

They are located in `%AppData%/Lightcord_BD`. This is the main folder for BetterDiscord.

## Developers
* https://github.com/jeanouina
* https://github.com/phorcysed
