const AWS = require("aws-sdk")

/**
 * DistributionId: @string
 */

module.exports = function(DistributionId = "") {
    const credentials = new AWS.SharedIniFileCredentials({ profile: "cloudfront" })
    AWS.config.credentials = credentials

    // initialize CloudFront
    const CloudFront = new AWS.CloudFront()

    CloudFront.listInvalidations({ DistributionId }, (errs, data) => {
        if (errs) {
            throw errs
        }

        CloudFront.getInvalidation(
            { DistributionId, Id: data.InvalidationList.Items[0].Id },
            (errs2, data2) => {
                if (errs) {
                    throw errs2
                }

                console.log(data2)
                console.log(data2.Invalidation.InvalidationBatch.Paths)
            }
        )
    })
}
