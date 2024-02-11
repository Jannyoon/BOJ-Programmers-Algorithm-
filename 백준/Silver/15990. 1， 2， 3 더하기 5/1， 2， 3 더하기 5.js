let fs = require('fs');
let [t, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

let ans = [];
const MODE = 1000000009;
let dp = Array.from({length:100001}, ()=>[0,0,0,0])

dp[1] = [1,1,0,0];
dp[2] = [1,0,1,0];
dp[3] = [3,1,1,1]; //경우의 수, 1로 끝나는 경우, 2로 끝나는 경우, 3으로 끝나는 경우


for (let i=4; i<100001; i++){
  dp[i][1] = (dp[i-1][2] + dp[i-1][3])%MODE;
  dp[i][2] = (dp[i-2][1] + dp[i-2][3])%MODE;
  dp[i][3] = (dp[i-3][1] + dp[i-3][2])%MODE;
  dp[i][0] = (dp[i][1] + dp[i][2] + dp[i][3])%MODE;;
}

for (let i=0; i<t; i++){
  let n = input[i];
  ans.push(dp[n][0]);
}

console.log(ans.join('\n'));