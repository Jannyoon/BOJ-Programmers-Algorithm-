let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();


let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
'o','p','q','r','s','t','u','v','w','x','y','z'];

let answer = [];


alpha.forEach((value)=>
answer.push(input.indexOf(value)));

console.log(answer.join(" "));
