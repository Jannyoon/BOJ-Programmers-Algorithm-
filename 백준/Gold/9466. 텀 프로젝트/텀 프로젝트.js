let fs = require('fs');
let [tc, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

tc = +tc;

let ans = [];
let idx = 0;
while(idx<input.length){
  let num = +input[idx++];
  let graph = ("0 "+input[idx++]).split(" ").map(Number);
  
  let visited = Array.from({length:num+1},()=>false);
  let teamEnd = Array.from({length:num+1},()=>false);
  let studentNum = 0;

  for (let i=1; i<=num; i++){
    if (graph[i]===i){
      teamEnd[i] = true;
      studentNum++;
    }
  }

  for (let i=1; i<=num; i++){
    if (!teamEnd[i]) dfs(i);
  }


  function dfs(i){
    if (visited[i]){
      teamEnd[i] = true;
      studentNum++;
    }
    visited[i] = true;
    if (!teamEnd[graph[i]]) dfs(graph[i]);
    visited[i] = false;
    teamEnd[i] = true;
  }


  ans.push(num-studentNum);
}

console.log(ans.join("\n"));
