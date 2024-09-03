let fs = require('fs');
let [nmr, items, ...input] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map(v=>v.split(" ").map(Number));

let ans = 0;
let [n,m,r] = nmr;  //지역의 개수 n, 수색 범위 m, 길의 개수 r
items.unshift(0); //items : 각각의 node에 몇 개의 item이 있는지 나타내는 배열

class MinHeap{
  constructor(){
    this.q = [];
  }
  len(){
    return this.q.length;
  }
  lastIdx(){
    return this.q.length-1;
  }
  swap(arr,a,b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return;
  }
  insert(val){
    this.q.push(val);
    this.heapifyUp();
  }
  heapifyUp(idx=this.lastIdx()){
    while(idx>0){
      let parentIdx = parseInt((idx-1)/2);
      if (this.q[parentIdx].cost<this.q[idx].cost) break;
      this.swap(this.q, idx, parentIdx);
      idx = parentIdx;
    }
  }
  minpop(){
    if (this.len()===1) return this.q.pop();
    let k = this.q[0];
    this.q[0] = this.q.pop();
    this.heapifyDown();
    return k;
  }
  heapifyDown(idx=0){
    let leftidx = 2*idx+1;
    let rightidx = 2*idx+2;
    let lastidx = this.lastIdx();
    let minidx = idx;

    if (leftidx<=lastidx && this.q[leftidx].cost<this.q[minidx].cost) minidx = leftidx;
    if (rightidx<=lastidx && this.q[rightidx].cost<this.q[minidx].cost) minidx = rightidx;
    if (minidx===idx) return;
    this.swap(this.q, minidx, idx);
    return this.heapifyDown(minidx);
  }
}

let graph = Array.from({length:n+1},()=>[]);

for (let i=0; i<r; i++){
  let [a,b,w] = input[i];
  graph[a].push([b,w]);
  graph[b].push([a,w]);
}

//모든 지역을 한 번씩 다 떨어져봐야 한다.
for (let i=1; i<=n; i++){  
  let distance = Array.from({length:n+1},()=>Infinity);
  dijkstra(i, distance);
  let sum = 0;
  for (let i=1; i<=n; i++){
    if (distance[i]<=m) sum+=items[i];
  }
  ans = Math.max(ans, sum);
}

function dijkstra(node, dist){
  let minq = new MinHeap();
  dist[node] = 0;
  minq.insert({
    now : node,
    cost : 0
  });

  while(minq.len()!=0){
    let now = minq.minpop();
    let [nowNode, nowCost] = [now.now, now.cost];
    if (dist[nowNode]<nowCost) continue;

    for (let i=0; i<graph[nowNode].length; i++){
      let [nextNode, nextCost] = graph[nowNode][i];
      let money = nowCost + nextCost;
      if (money<dist[nextNode]){
        dist[nextNode] = money;
        minq.insert({
          now : nextNode,
          cost : money
        })
      }
    }

  }

}

console.log(ans);