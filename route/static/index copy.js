const http = require('http')
const url  = require('url')
const path =require('path')
const mime = require('mime')
const readStaticFile = require('./readStaticFile')

const server = http.createServer((req,res) => {
    const urlStr = req.url
    const urlObj = url.parse(urlStr)
    const pathName = path.join(__dirname,'/public',urlObj.pathname)
    const ext = path.parse(pathName)
    res.writeHead(200,{'Content-Type':mime.getType(ext.ext.slice(1))})
    readStaticFile(pathName,res)
})

server.listen(8080)