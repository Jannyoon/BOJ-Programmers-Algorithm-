let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
input = +input;

let result = -1;
let i=1;
while(i<=input){
  if (i + i.toString().split("").map(Number).reduce((a,b) => a+b) === input){
    result = i;
    break;
  }
  else i++;
}

console.log(result===-1 ? 0 : result)