let fs = require('fs');
let [t,...input] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map(Number);

let dp = Array(10001).fill(1);

for (let i=2; i<=10000; i++){
  dp[i]+=dp[i-2];
}

for (let i=3; i<=10000; i++){
  dp[i]+=dp[i-3];
}


let answer = [];
for (let i=0; i<input.length; i++){
  answer.push(dp[input[i]]);
}

console.log(answer.join('\n'));