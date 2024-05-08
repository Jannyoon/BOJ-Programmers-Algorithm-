function solution(s) {
    let answer = [];
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let dp = Array.from({length:26},()=>-1);
    
    for (let i=0; i<s.length; i++){
        let nowindex = alpha.indexOf(s[i]);
        if (dp[nowindex]===-1){
            answer.push(-1);
            dp[nowindex] = i;
        }
        else { //이미 dp에 저장되어 있다는 뜻
           answer.push(i-dp[nowindex]);
            dp[nowindex] = i;
        }
    }
    //console.log(alpha.length);
    return answer;
}