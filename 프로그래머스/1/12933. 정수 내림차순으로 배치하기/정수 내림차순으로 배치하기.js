function solution(n) {
    n = n.toString().split("").map(Number).sort((a,b)=>b-a).join("");
    return +n;
}