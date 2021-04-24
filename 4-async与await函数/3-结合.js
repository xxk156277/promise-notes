/**
 * resource 1.html 2.html 3.html文件内容
 */
const fs = require('fs');
const util = require('util');
const mineReadFile = util.promisify(fs.readFile)


//回调函数的方式
fs.readFile('4-async与await函数\\resource\\1.html', (err, data1) => {
    if (err) throw err;
    fs.readFile('4-async与await函数\\resource\\2.html', (err, data2) => {
        if (err) throw err;
        fs.readFile('4-async与await函数\\resource\\3.html', (err, data3) => {
            if (err) throw err;
            console.log(data1+data2+data3);
        })
    })
})
//async  await
async function main() {
    try {
        let data1 = await mineReadFile('4-async与await函数\\resource\\1.html');
        let data2 = await mineReadFile('4-async与await函数\\resource\\2.html');
        let data3 = await mineReadFile('4-async与await函数\\resource\\3.html');
        console.log(data1+data2+data3);        
    } catch (error) {
        console.log(error);
    }

}