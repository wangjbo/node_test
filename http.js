const http = require('http')
const log4js = require("log4js");
log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } }
});

const logger = log4js.getLogger("cheese");
logger.level = "debug"
  
const server = http.createServer((request, response) => {
    // debugger;
    let data =''
    request.on('data',(chunk) => {
        data += chunk
    })
    request.on('end',() => {
        response.writeHead(200,{
            'content-type':'application/json;charset=utf-8'
        })
        response.end(data)
        logger.debug(data)
    })
})

server.listen(8080,() => {
    console.log('8080iscoming');
})