let fs = require('fs');
let [n, ...arr]= fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map(Number);


let dp = Array.from({length:n+1},()=>[0,0]);

//달러, 마르크
dp[0] = [100,0];

for (let i=1; i<=n; i++){
  //달러를 마르크로 바꾼다 했을 때 마르크 값
  //기존 달러
  let dollar = dp[i-1][0];
  let mark = dp[i-1][1];
  
  let rate = arr[i-1];
  let nextMark = (dollar/100)*rate;
  let nextDollar = (mark/rate)*100;

  dp[i][0] = Math.max(dollar, nextDollar);
  dp[i][1] = Math.max(mark, nextMark);
}

console.log(dp[n][0].toFixed(2));