let fs = require('fs');
let [n, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

//오름차순으로 정렬
let sortArr = arr.map((v,i)=>[i, v]).sort((a,b)=>a[1]-b[1]);

let res = -Infinity;
for (let i=0; i<n; i++){
  res = Math.max(sortArr[i][0]-i+1, res);
}
console.log(res);