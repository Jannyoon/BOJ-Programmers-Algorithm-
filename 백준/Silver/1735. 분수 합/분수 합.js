let fs = require('fs');
let [a,b] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.split(" ").map(Number));

let result = [a[0]*b[1] + a[1]*b[0], a[1]*b[1]];

function gcd(a,b){
  if (b>a) [a,b] = [b,a];
  let r= a%b;
  if (r === 0) return b;
  return gcd(b,r);
}

let num = gcd(result[0], result[1]);
console.log(result[0]/num, result[1]/num);