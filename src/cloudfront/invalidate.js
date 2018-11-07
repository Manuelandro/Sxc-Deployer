const AWS = require("aws-sdk")

/**
 * env: @string
 * path: @string
 * DistributionId: @string
 */
module.exports = function(env = "dev", path, DistributionId = "") {
    const credentials = new AWS.SharedIniFileCredentials({ profile: "cloudfront" })
    AWS.config.credentials = credentials

    // initialize CloudFront
    const CloudFront = new AWS.CloudFront()

    CloudFront.createInvalidation(
        {
            DistributionId,
            InvalidationBatch: {
                CallerReference: `${new Date()}`,
                Paths: {
                    Quantity: 1,
                    Items: [path]
                }
            }
        },
        (errs, data) => {
            if (errs) {
                throw errs
            }

            data.Invalidation.InvalidationBatch.Paths.Items.map(val => {
                console.log("🛁  Invalidated CloudFront folder ", val)
            })
            console.log("\n")
        }
    )
}
