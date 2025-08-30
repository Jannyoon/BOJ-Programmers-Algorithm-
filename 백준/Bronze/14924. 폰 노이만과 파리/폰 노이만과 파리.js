let fs = require('fs');
let [S, T, D] = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

let t = D / (2*S);
console.log(T*t);