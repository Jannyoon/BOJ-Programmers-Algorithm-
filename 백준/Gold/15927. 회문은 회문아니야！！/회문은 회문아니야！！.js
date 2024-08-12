let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

//주어진 문자열이 팰린드롬인가?
let l=0;
let r=input.length-1
let flag = true;
while(l<r){
  if (input[l]===input[r]){
    l++;
    r--;
  }
  else{
    flag = false;
    break;
  }
}

if (flag){
  if (input[0]==input[l]) console.log(-1);
  else console.log(input.length-1);
}
else console.log(input.length);