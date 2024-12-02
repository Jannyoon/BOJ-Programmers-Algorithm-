let fs = require('fs');
let [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
n=+n;

input = input.sort((a,b)=>b.length - a.length); //길이 오름차순
let output = [];

for (let i=0; i<input.length; i++){
  if (output.every(e => e.indexOf(input[i])!==0)) output.push(input[i]);
}

console.log(output.length);