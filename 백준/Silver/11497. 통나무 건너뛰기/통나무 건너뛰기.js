let fs = require('fs');
let [t, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
input = input.map(v => v.split(" ").map(Number));

t = t[0];

let answer = [];
let idx = 0;
while(idx<input.length){
  let len = input[idx++];
  let arr = input[idx++].sort((a,b)=>a-b);
  let list = [];

  let max = -Infinity;

  if (len%2===0){
    //배열 길이가 짝수인 경우
    for (let i=0; i<len-1; i+=2){
      list.push(arr[i]);
    }
    for (let i=len-1; i>0; i-=2){
      list.push(arr[i]);
    }
  } else {
    for (let i=0; i<len; i+=2){
      list.push(arr[i]);
    }
    for (let i=len-2; i>=1; i-=2){
      list.push(arr[i]);
    }
  }

  max = Math.max(max, Math.abs(list[0]-list[len-1]));
  for (let j=1; j<len; j++){
    max = Math.max(max, Math.abs(list[j]-list[j-1]));
  }
  answer.push(max);
}

console.log(answer.join("\n"));