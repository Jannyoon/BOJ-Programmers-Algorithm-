let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

let [n,m] = input;
let arr = Array.from({length:m},()=>0);
let answer = [];

sol(0);

function sol(idx){
  if (idx==m){
    answer.push(arr.join(" "));
    return;
  }
  for (let i=1; i<=n; i++){
    if (idx>0 && arr[idx-1]>i) continue;
    arr[idx] = i;
    sol(idx+1);
  }
}

console.log(answer.join("\n"));