function solution(n) {
    let answer = n+1;
    while(true){
        //조건 2부터 시작한다.
        const strNCnt = n.toString(2).split("").filter(v => v==='1').length;
        const strNextCnt = answer.toString(2).split("").filter(v => v==='1').length;
        if (strNCnt===strNextCnt) return answer;
        else answer++;
    }
    return answer;
}

/*
조건 1. n의 다음 큰 숫자는 n보다 큰 자연수
조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
조건 3. n의 다음 큰 숫자는 조건 1,2를 만족하는 수 중 가장 작은 수.(둘 다 만족하면 바로 return해야 함)
*/