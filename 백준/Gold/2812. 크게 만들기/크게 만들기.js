let fs = require('fs');
let [nk, input] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let [n,k] = nk.split(" ").map(Number);
input = input.split("").map(Number);
let stack = [];

for (let i=0; i<n; i++){
  stack.push(input[i]);
  if (i!==n-1 && k>0){ //마지막 인덱스가 아니라면
    let next = input[i+1];
    while(k>0 && stack[stack.length-1]<next){
      stack.pop();
      k--;
    }
  }
}

//k가 남았을 경우
if (k>0){
  while(k!==0){
    stack.pop();
    k--;
  }
}

console.log(stack.join(""));