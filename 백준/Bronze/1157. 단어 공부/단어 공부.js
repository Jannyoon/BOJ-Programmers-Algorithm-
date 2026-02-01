let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();

let alpha = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
let alphaArr = Array.from({length:alpha.length}, v => 0);

for (let i=0; i<input.length; i++){
    let str = input[i];
    let aIdx = alpha.indexOf(str);
    alphaArr[aIdx]++;
}

let max = Math.max(...alphaArr)
let filterArr = alphaArr.filter(v => v===max);
if (filterArr.length>1) console.log("?");
else {
    let idx = alphaArr.findIndex(v => v === max)
    console.log(alpha[idx])
}
