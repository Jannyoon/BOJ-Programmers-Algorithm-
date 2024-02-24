function solution(n, m) {
    let g = gcd(n,m);
    var answer = [g, n*m/g];
    return answer;
}

function gcd(a,b){
    if (a===1) return 1;
    else if (b%a===0) return a;
    else {
        let r = b%a;
        return gcd(r,a);
    }
}