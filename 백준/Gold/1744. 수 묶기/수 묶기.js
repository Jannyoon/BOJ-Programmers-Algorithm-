let fs = require('fs');
let [input, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

let result = 0;
let plus = [];
let minus = [];

for (let i=0; i<input; i++){
  let k = arr.pop();
  if (k<=0) minus.push(k);
  else if (k===1) result+=k;
  else plus.push(k);
}

minus.sort((a,b)=>a-b);
plus.sort((a,b)=>b-a);

let mlen = minus.length;
if (mlen%2!==0) result += minus.pop();
while(minus.length>0){
  let a = minus.pop();
  let b = minus.pop();
  result += a*b;
}

let plen = plus.length;
if (plen%2!==0) result += plus.pop();
while(plus.length>0){
  let a = plus.pop();
  let b = plus.pop();
  result += a*b;
}

console.log(result);