function solution(s) {
    let count = 0;
    let zeroNum = 0;
    while(s!=='1'){
        zeroNum += (s.split("").filter(v => v==='0').length);
        s = s.split("").filter(v => v!=='0').length.toString(2);
        count++;
    }
    
    return [count, zeroNum]
}