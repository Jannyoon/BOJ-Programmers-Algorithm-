let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
input = +input;

let dp = Array.from({length:1000001},()=>0);
let prev = Array.from({length:1000001},()=>0);
let answer = [];

dp[1] = 0;
dp[2] = 1;
dp[3] = 1;

prev[2] = 1;
prev[3] = 1;

for (let i=4; i<=input; i++){
  let target = 0;
  if (i%2===0 && i%3===0){
    target = (dp[i/2]<dp[i/3]) ? i/2 : i/3;
  }
  else if (i%2===0) target = (dp[i-1]<dp[i/2]) ? i-1 : i/2;
  else if (i%3===0) target = (dp[i-1]<dp[i/3]) ? i-1 : i/3;
  else if (i%2!==0 && i%3!==0) target = i-1;
    
  dp[i] = dp[target]+1;
  prev[i] = target;
}

let list = new Set();
let now = input;
while(now!==1){
  list.add(now);
  now = prev[now];
}
list.add(1);
answer.push(dp[input], [...list].join(" "));
console.log(answer.join("\n"));