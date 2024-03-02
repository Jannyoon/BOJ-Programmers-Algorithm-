function solution(s) {
    let count = 0;
    let removeZero = 0;
    while(s!=='1'){
        removeZero += s.split("").filter(v => v==='0').length;
        s = s.split("").filter(v=>v!=='0');
        
        let len = s.length;
        s = len.toString(2);
        count++;
    }
    return ([count, removeZero]);
}