function solution(s) {    
    let count = 0;
    let zeroes = 0;
    
    //s가 1이 될 때까지 계속해서 s에 이진 변환을 가하라
    while(s!=='1'){
        let arr = s.split("").filter(v => v!=='0');
        zeroes += s.length-arr.length; //삭제된 0의 개수 더하기
        
        let c = arr.length;
        s = c.toString(2);
        
        count++;
    }
    
    return [count, zeroes];
}