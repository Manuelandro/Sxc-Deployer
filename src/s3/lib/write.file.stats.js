const jsonfile = require("jsonfile")

module.exports = function witeStats(toWrite, destinationFile) {
    jsonfile.writeFile(destinationFile, toWrite, function(err) {
        if (err) {
            console.log(err)
            return
        }
        console.log(destinationFile, "written")
    })
}
