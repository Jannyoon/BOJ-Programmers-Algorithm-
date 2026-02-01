let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();

let alpha = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
let alphaArr = Array.from({length:alpha.length}, () => 0);

let maxVal = 0;
let maxIdx = 0;

for (let i=0; i<input.length; i++){
    let nowStr = input[i];
    let aIdx = alpha.indexOf(nowStr);
    alphaArr[aIdx]++;

}

maxVal = Math.max(...alphaArr)
let filterList = alphaArr.filter(v => v===maxVal)
if (filterList.length>1) console.log("?")
else {
    let idx = alphaArr.findIndex(v => v === maxVal)
    console.log(alpha[idx])
}
