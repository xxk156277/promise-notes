/**
 * util.promisify方法
 * 该方法帮助你将函数封装为promise风格的函数
 */
const util = require('util');
const fs = require('fs');
let mineReadFile = util.promisify(fs.readFile);
mineReadFile('1-promise基本使用\\resource\\content.txt').then(value => {
    console.log(value.toString());
})

