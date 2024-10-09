let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

input = +input;
let dp = Array.from({length:input+1},()=>0);

for (let i=2; i<=input; i++){
  dp[i] = dp[i-1]+1;
  if (i%2==0) dp[i] = Math.min(dp[i], dp[parseInt(i/2)]+1);
  if (i%3==0) dp[i] = Math.min(dp[i], dp[parseInt(i/3)]+1);   
}

console.log(dp[input]);