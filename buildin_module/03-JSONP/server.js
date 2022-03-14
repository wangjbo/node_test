const url = require('url')
const http = require('http')

const server = http.createServer((req,res) => {
        let urlString = req.url
        // 第二个参数true，则表示将query参数弄成对象，可以直接通过.的方式进行相应的访问
        // [Object: null prototype] { name: 'wjb' } 是一个query的对象
        let urlObj = url.parse(urlString,true)
        let cb = urlObj.query.cb;
        console.log('@',urlObj.pathname);
        switch(urlObj.pathname){
            case '/api/data':
                // res.write(cb + '(123)')
                res.write(`${urlObj.query.cb}('wjb')`)
                break 
            default:
                res.write(cb + '("byebye")')
        }
        res.end()
    }
)

server.listen(8080,() => {
        console.log('iamcoming')
    }
)