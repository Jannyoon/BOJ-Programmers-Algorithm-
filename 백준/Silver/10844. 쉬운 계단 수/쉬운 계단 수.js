let fs = require('fs');
let n = fs.readFileSync('/dev/stdin').toString().trim();
n=+n;

let dp = Array.from({length:10},()=>Array.from({length:101},()=>0));
for (let i=0; i<=9; i++){
  dp[i][1] = 1;
}

for (let j=2; j<=100; j++){
  for (let i=0; i<=9; i++){
    if (i===0) dp[i][j] = (dp[i+1][j-1]%1000000000);
    else if (i===9) dp[i][j] = (dp[i-1][j-1]%1000000000)    
    else dp[i][j] = (dp[i-1][j-1] + dp[i+1][j-1])%1000000000;
  }
}

let ans = 0;
for (let i=1; i<=9; i++){
  ans+=dp[i][n];
}
console.log(ans%1000000000);