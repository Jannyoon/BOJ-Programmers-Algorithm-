let fs = require('fs');
let n = fs.readFileSync('/dev/stdin').toString().trim();
n=+n;

let dp = Array.from({length:2},()=>Array.from({length:90}, ()=>0n));
dp[1][1] = 1n;
dp[0][2] = 1n;

for (let len=3; len<=90; len++){
  for (let idx=0; idx<=1; idx++){
    if (idx===0) dp[idx][len] = dp[0][len-1] + dp[1][len-1]; 
    else dp[idx][len] = dp[0][len-1];
  }
}

console.log(String(dp[0][n]+dp[1][n]));
