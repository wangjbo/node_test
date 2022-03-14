const http = require('http')
const https = require('https')
const logger = require('../../utils/log')
const queryString = require('querystring')

const server = http.createServer((request,response) => {
        // 获取url的信息
        const url = request.url
        let data = ''
        // 接受post请求发送的数据，发送的数据用insomnia进行模拟
        request.on('data',(chunk) => {
                data += chunk
            }
        )
        request.on('end',() => {
                // 修改response的Head,application/json 说明返回的内容是json格式的
                response.writeHead(200,{'content-type': 'application/json;charset=utf-8'})
                logger.debug(data)
                response.write(JSON.stringify(queryString.parse(data)))
                // response.write('123')
                response.end()
            }
        )
        // let data = ''
        // response.writeHeader(200, {
        //   'content-type': 'application/json;charset=utf-8',
        //   'Access-Control-Allow-Origin': '*'
        // })
      
        // https.get(`https://www.jianshu.com/shakespeare/notes/28975440/comments?page=1&count=10&author_only=false&order_by=desc`, (res) => {
      
        //   res.on('data', (chunk) => {
        //     data += chunk
        //   })
      
        //   res.on('end', () => {
        //     response.end(JSON.stringify(data))
        //   })
        // })
    }
)

// server监听到8080端口被连接了，会调用listen的回调函数
server.listen(8080,() => {
        console.log('localhost:8080连接上了');
    }
)