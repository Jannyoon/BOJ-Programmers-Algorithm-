//신종 바이러스인 웜 바이러스, 네트워크를 통해 전파된다.
//연결되어 있는 모든 컴퓨터는 웜 바이러스에 걸리게 된다. dfs.

//1번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수를 출력하는 프로그램을 작성하시오.
//컴퓨터의 수. 각 컴퓨터에는 1번부터 차례대로 번호가 매겨짐.
//네트워크에서 직접 연결되어 있는 컴퓨터 쌍의 수가 주어짐.
//이어서 그 수 만큼 한 줄에 한 쌍씩 네트워크 상에서 직접 연결되어 있는 컴퓨터의 번호 쌍이 주어진다.
let fs = require('fs');
let [num, len, ...input] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map((v)=>v.split(" ").map(Number));

num = num[0];
len = len[0];
let graph = Array.from({length:num+1},()=>[]);
let visited = Array.from({length:num+1},()=>false);
let cnt = 0;

for (let i=0; i<len; i++){
  let [a,b] = input[i];
  graph[a].push(b);
  graph[b].push(a);
}


function dfs(n){
  if (visited[n]) return;
  visited[n] = true;
  cnt++;

  for (let node of graph[n]){
    dfs(node);
  }
}

dfs(1);
console.log(cnt-1);

