let fs = require('fs');
let [tc, ...input] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map((v)=>v.split(" ").map(Number));


tc = tc[0];
let idx = 0;
let answer = [];
while(idx<input.length){
  let num = input[idx++][0];
  let files = input[idx++];
  let minCost = Array.from({length:(num+1)},()=>Array.from({length:(num+1)},()=>0));

  let sublist = Array(num+1).fill(0);
  files.unshift(0);
  for (let i=1; i<=num; i++){
    sublist[i] = sublist[i-1]+files[i];
  }

  for (let size=1; size<num; size++){
    for (let start=0; start<=(num); start++){
      let end = start+size;
      if (end>num) break;
      //console.log(end);
      let result = Infinity;
      for (let cut = start; cut<end; cut++){
        result = Math.min(result, minCost[start][cut]+minCost[cut+1][end]+
          sublist[end]-sublist[start-1]);
      }
      minCost[start][end] = result;

    }
  }
  answer.push(minCost[1][num]);
  
}

console.log(answer.join('\n'));