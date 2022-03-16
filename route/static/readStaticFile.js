const path = require('path')
const mime = require('mime')
const fs = require('fs')

// aync 处理异步
// function myReadFile(filePathName,res){
//     const content = fs.readFileSync(filePathName)
//     return content
// }

// promise处理异步
function myReadFile(filePathName){
    const content = new Promise((resolve,reject) => {
        fs.readFile(filePathName,(err,content) => {
            if(err){
                resolve('读取文件错误')
            }else{
                resolve(content)
            }
        })
    }) 
    return content
}

async function readStaticFile(filePathName,res){
    const ext = path.parse(filePathName).ext.slice(1)
    const fileType = mime.getType(ext)
    let data
    if(fs.existsSync(filePathName)){
        // 文件存在的情况下再继续读
        if(ext){
            // 是文件不是文件夹
            data = await myReadFile(filePathName)
        }else{
            const joinedPath = path.join(filePathName,'index.html')
            data = await myReadFile(joinedPath)
        }
    }else{
        res.end('not found')
    }
    console.log('data=',data)
    res.end(data)
}
module.exports = readStaticFile