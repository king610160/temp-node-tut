const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
// console.log(first,second)  // print the content of the file 

writeFileSync(
  './content/result-sync.txt',  // create the file and write the content
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }  // 'a' means write after the file content
)