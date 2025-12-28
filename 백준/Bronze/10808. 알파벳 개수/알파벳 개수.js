let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let str = 'a'
const defaultNum = str.charCodeAt()
const alphaList = 'abcdefghijklmnopqrstuvwxyz'
const alphaArr = Array.from({length:alphaList.length}, () => 0)

for (let i=0; i<input.length; i++){
    let alpha = input[i]
    alphaArr[alpha.charCodeAt()-defaultNum]++
}
console.log(alphaArr.join(" "))