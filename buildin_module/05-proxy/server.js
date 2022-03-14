const http = require('http')
const {createProxyMiddleware} = require('http-proxy-middleware')
const url = require('url')


const server = http.createServer((req,res) => {
    const urlStr = req.url
    const urlObj = url.parse(urlStr,true)
    if(/\/api/.test(urlStr)){
        const proxy = createProxyMiddleware('/api',{
            target:'https://m.lagou.com',
            changeOrigin:true,
            pathRewrite:{
                '^/api':''
            }
        })
        console.log(proxy)
        proxy(req,res)
    }

})

server.listen(8080,() => { console.log(8080808080) })