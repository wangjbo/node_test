const url = require('url')
const log4js = require('log4js')

log4js.configure({
    appenders: { cheese: { type: "file", filename: "cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
});

const logger = log4js.getLogger('chees')
logger.level = 'debug'

const urlString = "http://www.baidu.com:443/?username=wjb&password=123#tag=3"

const searchParam = new URLSearchParams(url.parse(urlString).search)
// logger.debug(url.resolve(urlString));
logger.debug(searchParam.get('username'))
