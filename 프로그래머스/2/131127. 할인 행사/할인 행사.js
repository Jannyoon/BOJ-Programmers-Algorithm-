function solution(want, number, discount) {
    let answer = 0;
    
    let left = 0;
    let right = 9;
    
    while(right<discount.length){
        let dp = Array.from({length:want.length},()=>0);
        for (let idx=left; idx<=right; idx++){
            if (want.indexOf(discount[idx])===-1) continue;
            dp[want.indexOf(discount[idx])]+=1;
        }
        let flag = true;
        for (let i=0; i<number.length; i++){
            if (dp[i]<number[i]){
                flag = false;
                break;
            }            
        }
        
        if (flag) answer++;
        left++;
        right++;
    }
    
    return answer;
}