let fs = require('fs');
let [str1, str2] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let len1 = str1.length;
let len2 = str2.length;
let result = 0;
let dp = Array.from({length:len1+1}, (v)=>Array.from({length:len2+1}, (s)=>0));

for (let i=1; i<=len1; i++){
  for (let j=1; j<=len2; j++){
    if (str1[i-1]==str2[j-1]) dp[i][j]=dp[i-1][j-1]+1;
    else dp[i][j]=Math.max(dp[i-1][j], dp[i][j-1]);
    result = Math.max(result, dp[i][j]);
  }
}

console.log(result);