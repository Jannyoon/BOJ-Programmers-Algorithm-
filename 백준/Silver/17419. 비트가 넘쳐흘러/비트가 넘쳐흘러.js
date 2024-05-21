let fs = require('fs');
let [n, k] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
n = +n;

k = k.split("").filter((v)=>v==='1').length;

console.log(k);