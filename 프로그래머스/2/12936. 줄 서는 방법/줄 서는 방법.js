function solution(n, k) {
    let arr = Array.from({length:n},(_,i)=>i+1);
    let result = [];
    let nth = k-1;
  
    while(arr.length>0){
        if (nth===0){
            result.push(...arr);
            break;
        }
        let factorial = fact(arr.length-1);
        let idx = nth/factorial >>0; 
        nth = nth%factorial;
        
        result.push(arr[idx]);
        arr.splice(idx,1);
    }
    
    return result;
}

function fact(n){
    let res = 1;
    for (let i=2; i<=n; i++){
        res*=i;
    }
    return res;
}
/*
n명의 사람이 일렬로 줄을 서고 있음.
!!n명의 사람들에겐 각각 1~n번까지 번호가 매겨져 있음.!!
n명이 사람을 줄을 서는 방법은 여러 가지.
예를 들어서 3명의 사람이 있다면... 다음과 같이 6개의 방법이 있음
사람의 수 n과 자연수 k개 주어질 때, 사람을 나열하는 방법을 사전 순으로 나열했을 때
k번째 방법을 return하는 solution 함수를 완성해주세요
*/