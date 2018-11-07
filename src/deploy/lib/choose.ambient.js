const prompts = require("prompts")

module.exports = async () => {
    try {
        const response = await prompts({
            type: "select",
            name: "server",
            message: "🚀 Which ambient you want to deploy on?",
            initial: 0,
            choices: [
                { title: "❌  cancel", value: null },
                { title: "🏋️‍   Dev", value: "dev" },
                { title: "🔥  Prod", value: "prod" }
            ]
        })

        return response.server
    } catch (err) {
        console.log(err)
        return false
    }
}
