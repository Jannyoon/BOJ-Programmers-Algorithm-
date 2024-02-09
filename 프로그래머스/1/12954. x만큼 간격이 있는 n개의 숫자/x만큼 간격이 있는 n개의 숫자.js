function solution(x, n) {
    let now = x;
    let answer = [x];
    for (let i=1; i<=n-1; i++){
        now+=x;
        answer.push(now);
    }
    return answer;
}