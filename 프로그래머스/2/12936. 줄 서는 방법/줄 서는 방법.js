function solution(n, k) {
    var answer = [];
    let list = Array.from({length:n},(_,i)=>i+1);
    let total = factorial(n);
    let nth = k-1;
    while(list.length>0){
        if (nth===0){
            answer.push(...list);
            break;
        }
        let fact = factorial(list.length-1);
        let idx = Math.floor(nth/fact);
        nth = nth%fact;
        
        answer.push(list[idx]);
        list.splice(idx,1);
    }
    return answer;
}

function factorial(num){
    let res = 1;
    for (let i=2; i<=num; i++){
        res *= i;
    }
    return res;
}