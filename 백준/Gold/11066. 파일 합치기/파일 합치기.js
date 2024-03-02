let fs = require('fs');
let [tc, ...input] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map((v)=>v.split(" ").map(Number));

let answer = [];
tc = tc[0];
let idx = 0;

while(idx<input.length){
  let num = input[idx++][0];
  let list = input[idx++];
  list.unshift(0);

  let subList = Array.from({length:(num+1)},()=>0); //해당 사이즈까지 만들어졌을 때 생기는 최종 비용
  
  for (let i=1; i<=num; i++){
    subList[i] = subList[i-1]+list[i];
  }


  let dp = Array.from({length:(num+1)},()=>Array.from({length:(num+1)},()=>0));
  
  for (let size=1; size<num; size++){
    for (let start=0; start<=num; start++){
      let end = start+size;
      if (end>num) break;
      let result = Infinity;

      for (let cut=start; cut<end; cut++){
        result = Math.min(result, dp[start][cut] + dp[cut+1][end] + subList[end]-subList[start-1]);
      }
      dp[start][end] = result;
    }
  }
  answer.push(dp[1][num]);
}

console.log(answer.join("\n"));
