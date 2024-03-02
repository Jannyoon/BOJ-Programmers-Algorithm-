let fs = require('fs');
let [nm, list, ...input] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map((v)=>v.split(" ").map(Number));

let [n,m] = nm;
let dp = Array.from({length:n+1},()=>0);
list.unshift(0);
let answer = [];

for (let i=1; i<=n; i++){
  dp[i] = dp[i-1]+list[i];
}

for (let idx=0; idx<m; idx++){
  let [i,j] = input[idx];
  answer.push(dp[j]-dp[i-1]);
}

console.log(answer.join("\n"));
