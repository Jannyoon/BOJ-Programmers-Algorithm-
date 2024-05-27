let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("");

let ans = new Set();
let stack = [];
let list = [];

//괄호에 해당하는 것을 
for (let i=0; i<input.length; i++){
  if (input[i]==='(') stack.push(i); //(인 것만 넣어놓는다.
  else if (input[i]===')'){
    list.push([stack.pop(), i]);
  }
  else continue;  
}

let len = list.length;


for (let i=1; i<=(1<<len)-1; i++){
  let bit = i.toString(2).padStart(len, '0');
  let str = input.map(v=>v);
  for (let j=0; j<bit.length; j++){
    if (bit[j]==='1'){
      //list[j][0], list[j][1]
      str[list[j][0]] = "";
      str[list[j][1]] = "";
    }
  }
  ans.add(str.join(""));
}
ans = [...ans];
ans.sort();
console.log(ans.join("\n"));