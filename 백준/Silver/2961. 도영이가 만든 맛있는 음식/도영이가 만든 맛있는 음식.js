let fs = require('fs');
let [n,...input] = fs.readFileSync('/dev/stdin').toString().trim()
.split('\n').map((v)=>v.split(" ").map(Number));

n=n[0];

let max = (1<<n)-1;
let minV = Infinity;

for (let i=1; i<=max; i++){
  let s = 1;
  let b = 0;
  for (let food=0; food<n; food++){
    if ((i&(1<<food))!==0){
      s *= input[food][0];
      b += input[food][1];
    }
  }
  let result = Math.abs(s-b);
  minV = Math.min(minV, result);
}

console.log(minV);