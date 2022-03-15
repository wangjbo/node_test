const fs = require('fs')
const fsPromise = require('fs').promises
const zlib = require('zlib')

// nodejs 13 之后增加import的支持

// promise对文件进行读写
// ;(async() => {
//     let res = await fsPromise.readFile('./log/log1')
//     console.log(res.toString())
// })()

// fs.mkdir('logs',(err) => { 
//     if(err) throw err
//     console.log('文件夹创建成功')
//  })

// fs.rename('./logs','./log',(err) => {
//     if(err) throw err
//     console.log('文件修改名称成功')
// })

// fs.rmdir('./log',(err) => {
//     console.log('移除文件夹')
// })

// const str = 'file\n'

// fs.writeFileSync('./log/log1',str,() => { console.log('success') })

// fs.appendFile('./log/log1',str,() => { })

// fs.unlink('./log/log1',(first) => { second })

// fs.readFile('./log/log1','utf-8',(err,content) => { console.log('@',content) })
// fs.readFile('./log/log1','utf-8',(err,content) => { console.log('@',content.toString()) })

// 同步读写文件
// const cont = fs.readFileSync('./log/log1','utf-8')
// console.log(cont)

// 判断当前目录下文件夹或者文件

// 遍历访问所有的文件
// fs.readdir('./',(err,content) => {
//     content.forEach((value,err) => {
//         fs.stat(`./${value}`,(err,stats) => {
//             console.log(value,' ',stats.isDirectory())
//         })
//     })
// })

// console.log('pwd=',process.env.PWD)
// console.log('argv=',process.argv)

// function readDir(dir) {
//     fs.readdir(dir, (err, content) => {
//         content.forEach(element => {
//             let joinedDir = `${dir}/${element}`
//             console.log('@',joinedDir)
//             fs.stat(joinedDir, (err, stat) => {
//                 if (stat.isDirectory()) {
//                     readDir(joinedDir)
//                 } else {
//                     fs.readFile(joinedDir, (err, content) => {
//                         console.log(content.toString())
//                     })
//                 }
//             })
//         });
//     })
// }

// readDir('.')

const readStream = fs.createReadStream('./app.js')
const writeStream = fs.createWriteStream('./copy.gzip')

const gzip = zlib.createGzip()

// 从左输出到右
readStream.pipe(gzip).pipe(writeStream)

// writeStream.write(readStream)