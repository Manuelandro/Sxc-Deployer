const path = require("path")

module.exports = {
    name: "sxc-deployer",
    target: "node",
    watch: false,
    entry: {
        "build.min.js": "./index.js"
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "./dist/",
        filename: "[name]" // for multiple entry points
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel-loader?cacheDirectory=true",
                query: {
                    babelrc: true
                }
            }
        ]
    },
    resolve: {
        extensions: [".js"]
    },
    performance: {},
    externals: [],
    node: {
        fs: "empty",
        net: "empty",
        tls: "empty"
    }
}
