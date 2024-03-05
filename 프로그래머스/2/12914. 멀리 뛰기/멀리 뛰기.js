//DP
function solution(n) {
    let dp = Array.from({length:2001},()=>0);
    dp[1] = 1;
    dp[2] = 2; //1에서 1칸 뛰는 방법 & 0에서 2칸 한번에 뛰는 방법
    for (let i=3; i<=n; i++){
        dp[i] = (dp[i-1]+dp[i-2])%1234567;
    }
   
    return dp[n];
}