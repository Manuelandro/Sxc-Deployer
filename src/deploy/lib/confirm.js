const prompts = require("prompts")

module.exports = async (env, country) => {
    try {
        const response = await prompts({
            type: "select",
            name: "confirm",
            message: `🚀 R u sure you want to deploy on ${env} - ${country}?`,
            initial: 0,
            choices: [{ title: "🖕 no", value: false }, { title: "🤪  yes", value: true }]
        })

        return response.confirm
    } catch (err) {
        console.log(err)
        return false
    }
}
