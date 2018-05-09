const http = require('http')

http.createServer((req, res) => {
    res.end(require('five').japanese() + '' + new Date())
}).listen(process.env.PORT)
