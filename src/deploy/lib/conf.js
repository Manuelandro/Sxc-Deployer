module.exports = {
    stag: {
        ENV: "cross-env",
        NODE_ENV: "NODE_ENV=development",
        BABEL_ENV: "BABEL_ENV=development",
        DEST: "DEST=.it",
        PACK: "npm run pack"
    },
    stag7: {
        ENV: "cross-env",
        NODE_ENV: "NODE_ENV=stag7",
        BABEL_ENV: "BABEL_ENV=production",
        DEST: "DEST=.it",
        PACK: "npm run pack_prod"
    },
    prodIt: {
        ENV: "",
        NODE_ENV: "NODE_ENV=production",
        BABEL_ENV: "BABEL_ENV=production",
        DEST: "DEST=.it",
        PACK: "npm run pack_prod"
    },
    prodDe: {
        ENV: "",
        NODE_ENV: "NODE_ENV=production",
        BABEL_ENV: "BABEL_ENV=production",
        DEST: "DEST=.de",
        PACK: "npm run pack_prod"
    },
    prodUs: {
        ENV: "",
        NODE_ENV: "NODE_ENV=production",
        BABEL_ENV: "BABEL_ENV=production",
        DEST: "DEST=.us",
        PACK: "npm run pack_prod"
    }
}
