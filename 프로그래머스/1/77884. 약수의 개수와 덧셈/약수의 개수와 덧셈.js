function solution(left, right) {
    let dp = Array.from({length:1001},()=>0); //약수의 개수를 저장하기 위함
    for (let i=left; i<=right; i++){
        for (let j=1; j<=i; j++){
            if (i%j===0) dp[i]++;
        }
    }
    let sum = 0;
    for (let i=left; i<=right; i++){ //dp값을 살피는 for문
        if (dp[i]%2===0) sum+=i;
        else sum-=i;
    }
    
    return sum;
}