let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
input = +input;

let n = input/4
let str = ''

for (let i=0; i<n; i++){
    str += "long "
}

str += "int"

console.log(str);