const {readFileSync, writeFileSync, writeFile, readFile} = require('fs')
console.log('start.')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

writeFileSync('./content/resuslt-sync.txt', `\nHere is the result: ${first}, ${second}`, {flag: 'a'})

console.log('\nDone with this task...')
console.log('\nStarting the next one.')
