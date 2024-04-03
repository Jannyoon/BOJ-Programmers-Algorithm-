function solution(n) {
    n = n.toString(3).split("")
        //.reverse().join("");
    let sum = 0;
    for (let i=0; i<n.length; i++){
        sum += n[i]*(3**i)
    }
    return (sum);
}