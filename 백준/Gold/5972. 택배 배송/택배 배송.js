let fs = require('fs');
let [nm, ...roads] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map(v => v.split(" ").map(Number));


let [n,m] = nm;
//현서는 1, 도착지점은 n이다.

class MinHeap {
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
  heapifyUp(idx=this.q.length-1){
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
    if (minidx === idx) return;
    this.swap(this.q, minidx, idx);
    return this.heapifyDown(minidx);
  }
}

let distance = Array.from({length:n+1},()=>Infinity);
let graph = Array.from({length:n+1},()=>[]);

for (let i=0; i<m; i++){
  let [a,b, w] = roads[i];
  graph[a].push([b,w]);
  graph[b].push([a,w]);
}



function dijkstra(node){
  distance[node] = 0;
  let minq = new MinHeap();

  minq.insert({
    now : node,
    cost : 0
  });

  while(minq.len()!=0){
    let now = minq.minpop();
    let [nowNode, nowCost] = [now.now, now.cost];
    if (distance[nowNode]<nowCost) continue;

    for (let i=0; i<graph[nowNode].length; i++){
      let [nextNode, nextCost] = graph[nowNode][i];
      let money = nowCost+nextCost;
      if (money < distance[nextNode]){
        distance[nextNode] = money;
        minq.insert({
          now : nextNode,
          cost : money
        })
      }
    }
  }  
}

dijkstra(1);
console.log(distance[n]);
