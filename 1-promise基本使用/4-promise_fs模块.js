// 封装一个函数 mineReadFile 读取文件内容
function mineReadFile(path) {
    return new Promise((resolve, reject) => {
        require("fs").readFile(path, (err, data) => {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}

mineReadFile('1-promise基本使用\\resource\\content.txt')
.then(value => {
    console.log(value.toString());
}, reason => {
    console.log(reason);
})

//我们可以在函数调用后指定回调函数，不需要在定义函数时就写明回调