const fs = require('fs');

// fs.readFile('C:\\Users\\xxk\\Desktop\\test\\1-promise基本使用\\resource\\content.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })

const p = new Promise((resolve, reject)=> {
    fs.readFile('C:\\Users\\xxk\\Desktop\\test\\1-promise基本使用\\resource\\content.txt', (err, data) => {
        if (err)
            reject(err);
        else
            resolve(data);
    })
}).then(data => {
    console.log(data.toString());
}, reason => {
    console.log(reason);
})
