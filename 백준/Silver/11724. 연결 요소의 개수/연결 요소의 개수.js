let fs = require('fs');
let [nm, ...input] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map((v)=>v.split(" ").map(Number));

let [n,m] = nm;
let graph = Array.from({length:n+1},()=>[]);

for (let i=0; i<input.length; i++){
  let [a,b] = input[i];
  graph[a].push(b);
  graph[b].push(a);  
}

let visited = Array.from({length:n+1},()=>false);
function dfs(n){
  if (visited[n]) return true;
  visited[n] = true;

  for (let node of graph[n]){
    if (!visited[node]) dfs(node);
  }
}

let cnt = 0;
for (let i=1; i<=n; i++){
  if (!visited[i]){ 
    dfs(i);
    cnt++;
  }
}

console.log(cnt);