let fs = require('fs');
let [n,m] = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

let arr = Array.from({length:m},()=>0);
let isNumUsed = Array.from({length:n+1},()=>false);
let answer = [];
nm(0);
//문자열의 첫글자 0
            //문자열 idx번호로 재귀가 돌아간다
function nm(idx){
  if (idx==m){
    answer.push(arr.join(" "));
    return;
  }
  for (let k=1; k<=n; k++){
    if (!isNumUsed[k]){
      arr[idx] = k;
      isNumUsed[k]=true;
      nm(idx+1);
      isNumUsed[k]=false;
    }
  }
}

console.log(answer.join("\n"));