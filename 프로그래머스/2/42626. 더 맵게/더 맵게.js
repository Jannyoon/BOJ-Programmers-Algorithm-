//모든 음식의 스코빌 지수를 K이상으로 만들 것이다.
//최소값이 K이상이 되어야 한다는 뜻.
//힙 정렬을 이용해야 한다...
class MinHeap{
    constructor(){
        this.q = [];
    }
    swap(arr, a, b){
        let temp = arr[a];
        arr[a]=arr[b];
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
    heapifyUp(idx=this.lastIdx()){
        if (this.len()===1) return;
        while(idx>0){
            let parentIdx = parseInt((idx-1)/2);
            if (this.q[parentIdx]<this.q[idx]) break;
            this.swap(this.q, parentIdx, idx);
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


function solution(scoville, K) {
    let minq = new MinHeap();
    for (let i=0; i<scoville.length; i++){
        minq.insert(scoville[i]);
    }
    //console.log(minq);
    let count = 0;
    while(minq.len()>1 && minq.q[0]<K){
        let a = minq.minpop();
        let b = minq.minpop();
        minq.insert(a + b*2);
        count++;
    }
    
    if (minq.q[0]<K) return -1;
    else return count;
}