export default function(extn) {
    let contentType = "application/octet-stream"
    if (extn == "html") contentType = "text/html"
    if (extn == "json") contentType = "application/json"
    if (extn == "css") contentType = "text/css"
    if (extn == "js") contentType = "application/javascript"
    if (extn == "png" || extn == "jpg" || extn == "gif") contentType = "image/" + extn
    if (extn == "woff") contentType = "application/font-woff"
    if (extn == "woff2") contentType = "application/font-woff2"
    if (extn == "eot") contentType = "application/font-eot"
    if (extn == "ttf") contentType = "application/font-ttf"
    if (extn == "svg") contentType = "image/svg+xml"

    return contentType
}
