const path = require('path')

// console.log(path.sep)  // 顯示根目錄，就是當前目錄

const filePath = path.join('/content', 'subcontent', 'test.txt')  // 把path跟後面的字結合
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, '/content', 'subcontent', 'test.txt')
console.log(absolute)


