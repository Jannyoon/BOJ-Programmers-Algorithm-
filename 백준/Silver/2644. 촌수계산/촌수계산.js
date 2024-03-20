let fs = require('fs');
let [n, prob, m, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

n=+n;
prob = prob.split(" ").map(Number);
m=+m;
arr = arr.map((v)=>v.split(" ").map(Number));

let graph = Array.from({length:n+1},()=>[]);

arr.forEach((val)=>{
  graph[val[0]].push(val[1]);
  graph[val[1]].push(val[0]);
});

let count = Array.from({length:n+1},()=>0);
let result = bfs(prob[0],prob[1]);

function bfs(start, end){
  let queue = [start];
  let cnt = -1;
  while (queue.length!=0){
    let curr = queue.shift();
    for (let next of graph[curr]){
      if (next == end){
        cnt = count[curr]+1;
        return cnt;
      }
      if (count[next]==0){
        count[next]=count[curr]+1;
        queue.push(next);
      }
    }
  }
  return cnt;
}

console.log(result);