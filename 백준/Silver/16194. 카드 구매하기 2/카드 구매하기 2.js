//전제 : 카드팩 하나를 여러 개를 살 수 있다.
let fs = require('fs');
let [n, arr] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map((v)=>v.split(" ").map(Number));

n=n[0];
arr.unshift(0);

let dp = Array(n+1).fill(Infinity);
dp[0] = 0;

for (let check=1; check<=n; check++){
  for (let recheck=1; recheck<=check; recheck++){
    dp[check] = Math.min(dp[check], arr[recheck]+dp[check-recheck]);
  }
}

console.log(dp[n]);