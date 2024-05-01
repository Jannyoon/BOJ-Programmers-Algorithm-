function solution(t, p) {
    let left = 0;
    let right = p.length-1;
    let count = 0;
    
    while(right<=t.length-1){
        let str = t.slice(left, right+1);
        left++;
        right++;
        if (+str<=+p) count++;
    }
    return count;
}