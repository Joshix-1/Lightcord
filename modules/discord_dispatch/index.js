module.exports = require(process.platform === "linux" ? './discord_dispatch_linux.node' : './discord_dispatch.node');
