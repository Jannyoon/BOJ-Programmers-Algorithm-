let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
input = +input;

let dp = Array.from({length:100001},()=>0);
let prev = Array.from({length:100001},()=>0);
let answer = [];

dp[1] = 0;
dp[2] = 1;
dp[3] = 1;

prev[2] = 1;
prev[3] = 1;

for (let i=4; i<=input; i++){
  let target = i-1;
  if (i%2===0) target = (dp[i/2]<dp[target]) ? i/2 : target;
  if (i%3===0) target = (dp[i/3]<dp[target]) ? i/3 : target;
 
  dp[i] = dp[target]+1;
  prev[i] = target;
}

let list = [];
let now = input;
while(now!==1){
  list.push(now);
  now = prev[now];
}
list.push(1);
answer.push(dp[input], list.join(" "));
console.log(answer.join("\n"));