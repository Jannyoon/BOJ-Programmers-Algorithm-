let fs = require('fs');
let [n, arr] = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map((v)=>v.split(" ").map(Number));

n=n[0];
let L = [];
let len = 0;

function lowerbound(target){
  if (len==0 || L[len-1]<target){
    len++;
    return len-1;
  }

  let left = 0;
  let right = len;
  while(left<right){
    let mid = parseInt((left+right)/2);
    if (L[mid]>=target) right = mid;
    else left = mid+1;
  }
  return left;
}

for (let i=0; i<n; i++){
  let target = arr[i];
  let idx = lowerbound(target);
  L[idx] = target;
}

console.log(len);