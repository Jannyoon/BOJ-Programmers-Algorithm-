function solution(arr) {
    let n = arr.length;
    let sum = arr.reduce((prev,cur)=>prev+cur,0);
    
    return sum/n;
}