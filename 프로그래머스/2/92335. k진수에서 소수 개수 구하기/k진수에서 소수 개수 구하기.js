function solution(n, k) {
    let cnt = 0;
    let newNum = ""+n.toString(k);
    newNum = newNum.split("0").filter((v)=>v!=="").map(Number);

    for (let i=0; i<newNum.length; i++){
        if (primeNum(newNum[i])) cnt++;
    }

    return cnt;
}

function primeNum(n){
    let result = true;
    if (n==0 || n==1) return false;
    for (let i=2; i<=Math.sqrt(n); i++){
        if (n%i===0) return false;
    }
    
    return result;
}

/*
양의 정수 n.
이 숫자를 k 진수로 바꿨을 때 => toString(k) 이용
변환된 수 안에 아래 조건에 맞는 소수(Prime number)가 몇 개인지 알아보려 한다.

0P0 : 소수 양쪽에 0이 있는 경우???
P0 : 소수 오른쪽에만 0이 있고 왼쪽에는 아무것도 없는 경우
0P : 소수 왼쪽에만 0이 있고 오른쪽에는 아무 것도 없는 경우
P : 소수 양쪽에 아무것도 없는 경우. 단, P는 각 자릿수에 0을 포함하지 않는 소수입니다.

0을 기준으로 .split("0") 필요.

*/