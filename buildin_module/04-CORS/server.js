const http = require('http')
const url = require('url')

const server = http.createServer((req,res) => {
    const urlStr = req.url
    const urlObj = url.parse(urlStr,true)
    // if(urlObj.query){
    //     console.log(urlObj.query)
    // }

    res.writeHead(200,{
        'Content-Type':'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*'
    })
    res.write('{"ser1":"333333333"}')
    res.end()
})

server.listen(8080,() => { console.log('8080连接上了') })