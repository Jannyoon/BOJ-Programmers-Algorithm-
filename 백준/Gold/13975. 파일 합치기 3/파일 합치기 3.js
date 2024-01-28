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
    if (this.len()===1) return;
    while(idx>0){
      let parentIdx = parseInt((idx-1)/2);
      if (this.q[parentIdx]<this.q[idx]) break; //이미 부모가 더 작은 값이므로 끝.
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

    if (leftidx<=lastidx && this.q[leftidx]<this.q[minidx]) minidx = leftidx;
    if (rightidx<=lastidx && this.q[rightidx]<this.q[minidx]) minidx = rightidx;
    if (minidx===idx) return;

    this.swap(this.q, minidx, idx);
    this.heapifyDown(minidx);
  }
}

let fs = require('fs');
let [t,...input] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map((v)=>v.split(" ").map(Number));



let result = [];

let idx=0;
for (let i=0; i<t; i++){
  let num = input[idx++][0];
  let list = input[idx++];

  //최소 힙 생성
  let minq = new MinHeap();
  for (let i=0; i<num; i++){
    minq.insert(list[i]);
  }

  let total = 0;
  let lastitem = 0;

  while(minq.len()>1){
    let first = minq.minpop();
    let second = minq.minpop();
    let x1 = first+second;
    lastitem = x1;
    total+=x1;

    minq.insert(x1);
  }

  //console.log("lastitem:",lastitem);
  result.push(total);

}

console.log(result.join("\n"));