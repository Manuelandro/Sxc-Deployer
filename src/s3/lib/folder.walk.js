const fs = require("fs") // from node.js
const path = require("path") // from node.js

const walk = function(dir, done) {
    const results = new Map()
    fs.readdir(dir, (err, list) => {
        if (err) return done(err)
        let pending = list.length
        if (!pending) return done(null, results)
        list.forEach(file => {
            const full = path.resolve(dir, file)
            fs.stat(full, (_, stat) => {
                if (stat && stat.isDirectory()) {
                    walk(full, (__, res) => {
                        /* eslint-disable*/
                        for (item of res) {
                            results.set(`${file}/${item[0]}`, `${full}/${item[0]}`)
                        }

                        /* eslint-enable */
                        if (!--pending) done(null, results)
                    })
                } else {
                    results.set(`${file}`, full)
                    if (!--pending) done(null, results)
                }
            })
        })
    })
}

module.exports = walk
