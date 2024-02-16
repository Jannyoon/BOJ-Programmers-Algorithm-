function solution(n) {
    n = n.toString();
    n = n.split("").map(Number).reverse();
    return n;
}