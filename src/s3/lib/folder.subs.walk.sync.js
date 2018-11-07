const fs = require("fs")

module.exports = function walkSync(dir, filelist = []) {
    const files = fs.readdirSync(dir)

    files.forEach(function(file) {
        if (fs.statSync(dir + file).isDirectory()) {
            filelist = walkSync(dir + file + "/", filelist)
        } else {
            if (file.includes("deprecated")) {
                return
            }

            filelist.push(dir + file)
        }
    })
    return filelist
}
