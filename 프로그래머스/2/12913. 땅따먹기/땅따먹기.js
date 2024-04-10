function solution(land) {
    let dp = land.slice();

    dp = dp.map((v,i)=>{
        if (i===0) return v;
        else return [0,0,0,0];
    })
   
    for (let row=1; row<land.length; row++){
        for (let col=0; col<4; col++){
            for (let k=0; k<4; k++){
                if (k===col) continue;
                else dp[row][col] = 
                    Math.max(dp[row-1][k]+land[row][col], dp[row][col]);
            }
        }
    }
    return (Math.max(...dp[land.length-1]));
}
