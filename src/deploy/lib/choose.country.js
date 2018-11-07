const prompts = require("prompts")

module.exports = async env => {
    try {
        const response = await prompts({
            type: "select",
            name: "country",
            message: "🚀 Which country will be the default one?",
            initial: 0,
            choices:
                env === "dev"
                    ? [
                          { title: "❌  cancel", value: null },
                          { title: "1️⃣  stag", value: "stag" },
                          { title: "7️⃣  stag", value: "stag7" }
                      ]
                    : [
                          { title: "❌  cancel", value: null },
                          { title: "🇮🇹  IT", value: "prodIt" },
                          { title: "🇩🇪  DE", value: "prodDe" },
                          { title: "🇺🇸  US", value: "prodUs" }
                      ]
        })

        return response.country
    } catch (err) {
        console.log(err)
        return false
    }
}
