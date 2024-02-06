function solution(num) {
    let result = ["Even", "Odd"];
    if (num<0) num*=-1;
    return result[num%2];
}