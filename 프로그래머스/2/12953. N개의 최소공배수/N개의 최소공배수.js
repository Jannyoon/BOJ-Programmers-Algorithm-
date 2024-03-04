//n개의 숫자에 모두 해당되는 최대공약수?...??...??
//가장 작은 숫자를 기준으로 최대공약수를 찾아야 한다는 뜻...
function solution(arr) {
    while(arr.length!==1){
        let a = arr.pop();
        let b = arr.pop(); 
        let num = a*b/gcd(a,b);
        arr.push(num);
    }
    return arr[0];
}

function gcd(a,b){
    if (b<a) [a,b] = [b,a];
    let r = b%a;
    if (r===0) return a;
    
    return gcd(r,a);
}