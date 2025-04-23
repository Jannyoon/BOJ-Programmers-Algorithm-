function solution(triangle) {
    let ansMax = -Infinity;
    
    let dp = [];
    for (let arr of triangle){
        dp.push([...arr]);
    }

    let h = triangle.length;
    
    for (let i=1; i<h; i++){
        for (let j=0; j<=i; j++){
            if (j===0) dp[i][j] = dp[i][j] + dp[i-1][j];
            else if (j===i) dp[i][j] = dp[i][j] +  dp[i-1][j-1];
            else {
                dp[i][j] = dp[i][j] + Math.max(dp[i-1][j-1], dp[i-1][j]);
            }
            ansMax = Math.max(ansMax, dp[i][j]);
        }
    }

    return ansMax;
}  
/*
아래 칸으로 이동할 때는 대각선 방향으로 한 칸 오른쪽 또는 왼쪽으로만 이동
*/