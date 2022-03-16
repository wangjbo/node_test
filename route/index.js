const http = require('http')
const url = require('url')
const mime = require('mime')
const { readFile } = require('fs')

http.createServer((req,res) => {
    const urlStr = req.url
    const cl = urlStr.split('.')[1]
    const type = mime.getType(cl)
    console.log(type)
    readFile(`.${urlStr}`,(err,content) => {
        res.writeHead(200,{'content-type':type})
        res.end(content)
    })
}).listen(8080)