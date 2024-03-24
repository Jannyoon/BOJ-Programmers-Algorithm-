//n에서 k까지 이동하는데 걸리는 가장 빠른 시간
//현재 위치가 x일 때 1초 후에 x-1 또는 x+1로 이동할 수 있음
//순간이동을 하는 경우 0초 후에 2*x의 위치로 이동 가능.
let fs = require('fs');
let [n,k] = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

class MinHeap{
  constructor(){
    this.q = [];
  }

  swap(arr,a,b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return;
  }

  len(){
    return this.q.length;
  }

  lastIdx(){
    return this.q.length-1;
  }

  insert(val){
    this.q.push(val);
    this.heapifyUp();
  }

  heapifyUp(idx = this.lastIdx()){
    if (this.len()===1) return;
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

  heapifyDown(idx = 0){
    let leftidx = 2*idx+1;
    let rightidx = 2*idx+2;
    let lastidx = this.lastIdx();
    let minidx = idx;

    if (leftidx<=lastidx && this.q[leftidx].cost<this.q[minidx].cost) minidx = leftidx;
    if (rightidx<=lastidx && this.q[rightidx].cost<this.q[minidx].cost) minidx = rightidx;
    if (minidx===idx) return;

    this.swap(this.q, minidx, idx);
    this.heapifyDown(minidx);
  }
}

///////////////////////////////////////////////////////
// 로직 작성
///////////////////////////////////////////////////////

let dist = Array(100001).fill(Infinity);
dist[n] = 0;
let minq = new MinHeap();
minq.insert({
  node : n,
  cost : 0
});


function dijk(){
  while(minq.len()>0){
    let now = minq.minpop();

    if (dist[now]<now.cost) continue;
    let next = [[now.node-1,1], [now.node+1,1], [2*now.node,0]];
    
    for (let k=0; k<3; k++){
      let [nextNode, nextCost] = next[k];
      let total = now.cost+nextCost;

      if (total<dist[nextNode]){
        dist[nextNode] = total;
        minq.insert({
          node : nextNode,
          cost : total
        })
      }
    }
  }
}

dijk();

console.log(dist[k]);