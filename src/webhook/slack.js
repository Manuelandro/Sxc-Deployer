const Slack = require("slack-node")
const shell = require("shelljs")

module.exports = function notifySlack(dest = "", uri = "") {
    try {
        shell.exec("git log --name-status HEAD^..HEAD", (code, stdout, stderr) => {
            const slackClient = new Slack()

            slackClient.setWebhook(uri)

            slackClient.webhook(
                {
                    channel: "#frontend-ita",
                    username: "Produzione",
                    text: `Deploy ultimato in produzione ${dest.toUpperCase()}!\n${stdout}`,
                    icon_emoji: ":rocket:"
                },
                (err, res) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("💬  slack triggered")
                    }
                }
            )
        })
    } catch (err) {
        console.log(err)
    }
}
