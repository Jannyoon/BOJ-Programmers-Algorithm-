//전제 : 카드팩 하나를 여러 개를 살 수 있다.
let fs = require('fs');
let [n, arr] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map((v)=>v.split(" ").map(Number));
n=n[0];
arr.unshift(0);

let dp = Array(n+1).fill(0);
for (let checkNum=1; checkNum<=n; checkNum++){
  for (let recheck=1; recheck<=checkNum; recheck++){
    dp[checkNum] = Math.max(dp[checkNum], arr[recheck]+dp[checkNum-recheck])
  }
}

console.log(dp[n]);