let fs = require('fs');
let [len, s] = fs.readFileSync('/dev/stdin').toString().trim()
.split('\n').map((v)=>v.split(" ").map(Number));

len = len[0];
let list = new Set();
for (let i=1; i<=((1<<len)-1); i++){
  let nowTotal = 0;
  let nowCase = String(i.toString(2)).padStart(len,'0');
  for (let i=0; i<len; i++){
    if (nowCase[i]==='1') nowTotal+=s[i];
  }
  list.add(nowTotal);
}

list = [...list];
list.sort((a,b)=>a-b);
let result = 1;

let flag = false;
for (let i=0; i<list.length; i++){
  if (result<list[i]){
    flag = true;
    console.log(result);
    break;
  }
  result++;
}

if (!flag){
  console.log(list[list.length-1]+1);
}