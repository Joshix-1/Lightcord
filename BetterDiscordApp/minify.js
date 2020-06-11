const terser = require("terser")
const fs = require("fs")

fs.writeFileSync(__dirname+"/js/main.min.js", terser.minify(fs.readFileSync(__dirname+"/js/main.js", "utf8"), {
    "output": {
        "comments": false
    }
}).code)