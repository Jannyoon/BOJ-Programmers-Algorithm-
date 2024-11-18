let fs = require('fs');
let [swNum, state, students, ...input] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map(v => v.split(" ").map(Number));

swNum = swNum[0];
students = students[0];


for (let i=0; i<students; i++){
  let [bg, number] = input[i];
  //bg가 1일 경우 남학생, 2일 경우 여학생.

  if (bg===1){
    let idx = number-1;
    while(idx<swNum){
      state[idx] = state[idx] === 1 ? 0 : 1;
      idx+=number;
    }

  }
  else {
    //number-1을 기준으로.
    state[number-1] = state[number-1] === 1? 0 : 1;
    for (let i=number-2; i>=0; i--){
      if (i<0) break;
      let sub = number-1-i;
      if (state[i]!==state[number-1+sub]) break;
      if (state[i]===state[number-1+sub]){
        state[i] = state[i]===1? 0 : 1;
        state[number-1+sub] = state[number-1+sub]===1?0:1;
      }
    }
  }
}

let result = [];
while(state.length>0){
  let list = [];
  for (let i=0; i<20; i++){
    list.push(state.shift());
    if (state.length===0) break;
  }
  result.push(list);
}
console.log(result.map(v => v.join(" ")).join("\n"));