function solution(a, b) {
    let sum = 0;
    a.forEach((v,i)=>{
        sum +=(v*b[i]);
    })
    return sum;
}