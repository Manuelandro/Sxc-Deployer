const AWS = require("aws-sdk") // from AWS SDK
const fs = require("fs") // from node.js
const path = require("path") // from node.js
const colors = require("colors")
const walk = require("./lib/folder.walk")
const contentType = require("./lib/content.type")
const CloudFrontInvalidate = require("../cloudfront/invalidate")

/**
 * env: @string
 * fold: @string
 * bucket: @string
 * callback: @func
 */

export default function(env = "dev", fold = "dist/", bucket = "", distributionId = "", callback) {
    const credentials = new AWS.SharedIniFileCredentials({ profile: "s3" })
    AWS.config.credentials = credentials

    // initialize S3 client
    const s3 = new AWS.S3()

    // resolve full folder path
    const folder = path.join(__dirname, `../../${fold}`)

    walk(folder, (_, results) => {
        if (_) throw _

        let indx = 0
        const { size } = results

        console.log(`Preparing ${size} files for S3 upload...`)

        /* eslint-disable*/
        for (const entry of results) {
            // read file contents
            fs.readFile(entry[1], (error, fileContent) => {
                // if unable to read file contents, throw exception
                if (error) {
                    throw error
                }

                const extn = entry[1].split(".").pop()

                /* eslint-enable */
                // upload file to S3
                s3.putObject(
                    {
                        ACL: "public-read",
                        Bucket: bucket,
                        Key: `${fold}${entry[0]}`,
                        Body: fileContent,
                        ContentType: contentType(extn)
                    },
                    err => {
                        if (err) {
                            throw err
                        }
                        console.log(
                            "👉 📁 ",
                            colors.bold(`${fold}${entry[0]}`),
                            `- bucket ${bucket}`
                        )

                        indx += 1

                        if (indx === size) {
                            console.log("\n")
                            console.log("☕  Upload completed")
                            CloudFrontInvalidate(env, `/${fold}*`, distributionId)

                            if (callback) callback(env)
                        }
                    }
                )
            })
        }
    })
}
