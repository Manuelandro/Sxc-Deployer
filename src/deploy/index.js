const shell = require("shelljs")
const chooseAmbient = require("./lib/choose.ambient")
const chooseCountry = require("./lib/choose.country")
const confirm = require("./lib/confirm")
const mapConf = require("./lib/conf")

const deploy = async function() {
    const env = await chooseAmbient()

    if (!env) return

    const country = await chooseCountry(env)

    if (!country) return

    const confirmation = await confirm(env, country)

    if (!confirmation) return

    const conf = mapConf[country]

    shell.exec("npm install")
    shell.exec("npm run style")
    shell.exec(`${conf["BABEL_ENV"]} ${conf["NODE_ENV"]} ${conf["DEST"]} ${conf["PACK"]}`)
}

export default deploy
