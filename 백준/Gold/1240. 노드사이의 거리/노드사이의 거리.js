let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim()
.split('\n').map((v)=>v.split(" ").map(Number));

let [n,m] = input.shift();

let prob = [];

//dist[node][toNode] = x : node에서 toNode까지 가는 데 거리 x
let dist = Array.from({length:n+1},()=>Array.from({length:n+1},()=>0));
let graph = Array.from({length:n+1},()=>[]);

for (let i=0; i<n-1; i++){
  let [a,b,distance] = input[i];
  graph[a].push(b);
  graph[b].push(a);
  dist[a][b] = distance;
  dist[b][a] = distance;
}

for (let start=1; start<=n; start++){
  let visited = Array(n+1).fill(false);
  dfs(start, start, 0, visited);
}

function dfs(start, now, distance, visited){
  if (visited[now]) return;
  visited[now] = true;
  for (let node of graph[now]){
    if (visited[node]) continue;
    let result = distance+dist[now][node];
    dist[start][node] = result;
    dist[node][start] = result;
    dfs(start, node, result, visited);
  }
}

let answer = [];
for (let i=n-1; i<input.length; i++){
  let [node1, node2] = input[i];
  answer.push(dist[node1][node2]);
}

console.log(answer.join("\n"));