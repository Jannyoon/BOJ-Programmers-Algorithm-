let fs = require('fs');
let [t, ...input] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map(Number);

let list = [25,10,5,1];
let ans = [];

for (let i=0; i<t; i++){
  let target = input[i];
  let coinCnt = [0,0,0,0];  
  while(target>0){
    for (let coinIdx=0; coinIdx<4; coinIdx++){
      if (target<list[coinIdx]) continue;
      coinCnt[coinIdx] = parseInt(target/list[coinIdx])
      target = target%list[coinIdx]
    }
  }
  ans.push(coinCnt.join(" "))
}

console.log(ans.join("\n"));