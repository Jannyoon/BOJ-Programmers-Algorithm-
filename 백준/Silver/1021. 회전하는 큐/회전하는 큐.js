let fs = require('fs');
let [nm, input] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map(v => v.split(" ").map(Number));

let [n,m] = nm;
let list = Array.from({length:n},(v,i)=>i+1);

function calc2(list){
  //왼쪽으로 배열을 한 칸 이동
  let k = list.shift();
  list.push(k);
}

function calc3(list){
  //오른쪽으로 배열을 한 칸 이동
  let k = list.pop();
  list.unshift(k);
}

let count = 0;

while(input.length>0){
  let target = input[0];
  let length = list.length;
  let targetIdx = list.indexOf(target);
  if (targetIdx===0){
    input.shift();
    list.shift();
    continue;
  }
  else if (targetIdx<=parseInt(length/2)) calc2(list);
  else calc3(list);
  count++;
}

console.log(count);