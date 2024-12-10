let fs = require('fs');
let [n, arr] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map(v => v.split(" ").map(Number));

n=n[0];
let dp = Array.from({length:n},()=>1);
let result = 1;

for (let i=1; i<n; i++){
  for (let j=0; j<i; j++){
    if (arr[j]<arr[i]){
      dp[i] = Math.max(dp[j]+1, dp[i]);
      result = Math.max(result, dp[i]);
    }
  }
}

console.log(result);
