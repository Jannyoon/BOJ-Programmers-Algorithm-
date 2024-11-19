let fs = require('fs');
let [rc, input] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map(v => v.split(' ').map(Number));

let [r,c] = rc;
let answer = 0;
for (let i=1; i<c; i++){
  let left = -1;
  let right = -1;
  let result = 0;

  for (let j=i; j>=0; j--){
    left = Math.max(left, input[j]);
  }

  for (let j=i; j<c; j++){
    right = Math.max(right, input[j]);
  }

  result = Math.min(left, right);
  answer+=(result - input[i]);
}

console.log(answer);