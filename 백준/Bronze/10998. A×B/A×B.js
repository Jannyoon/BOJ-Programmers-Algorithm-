let fs = require('fs');
let [a,b] = fs.readFileSync('/dev/stdin').toString().trim().split(" ");
a=+a;
b=+b;

console.log(a*b);