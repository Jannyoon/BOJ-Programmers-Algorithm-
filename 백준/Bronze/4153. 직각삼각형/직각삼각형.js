let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map((line)=>line.split(" ").map(Number).sort((a,b)=>a-b));
input.pop();

let ans = [];

input.forEach(([a,b,c])=>{
  if (a*a + b*b === c*c) ans.push("right");
  else ans.push("wrong")
})

console.log(ans.join("\n"));