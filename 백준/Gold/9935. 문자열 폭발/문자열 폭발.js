let fs = require('fs');
let [input, str] = fs.readFileSync('/dev/stdin').toString().trim()
.split('\n');

let len = str.length;
let lastChar = str[len-1];

let stack = [];

for (let i=0; i<input.length; i++){
  let char = input[i];
  stack.push(char);

  if (char===lastChar && stack.length>=len){
    let flag = true;
    let sidx = stack.length-1;

    for (let idx=len-1; idx>=0; idx--){
      if (stack[sidx]!==str[idx]){
        flag = false;
        break;
      }
      sidx--;
    }

    if (flag){
      for (let cnt=0; cnt<len; cnt++){
        stack.pop();
      }
    }
  }
  
}

if (stack.length===0) console.log("FRULA")
else console.log(stack.join(""));