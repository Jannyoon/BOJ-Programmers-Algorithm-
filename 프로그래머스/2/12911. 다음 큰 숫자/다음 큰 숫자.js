function solution(n) {
    //주어진 숫자의 2진수로 변환했을 때의 1의 개수
    let originLen = n.toString(2).split("").filter(v=>v==='1').length;
  
    let answer = n;
    for (let i=n+1; i<=1000000; i++){
        let target = i.toString(2).split("");
        let sum = 0;
        let flag = true;
        for (let j=0; j<target.length; j++){
            if (target[j]==='1') sum++;
        }
        if (sum===originLen) return i;
    }
    
    //var answer = 0;
    return answer;
}
/*
n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다...
*/