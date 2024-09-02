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
    heapifyUp(){
        if (this.len()===1) return;
        let idx = this.q.length-1;
        while(idx>0){
            let parentIdx = parseInt((idx-1)/2);
            if (this.q[parentIdx].cost<=this.q[idx].cost) break;
            this.swap(this.q, this.q[parentIdx], this.q[idx]);
            idx = parentIdx;
        }
    }
    minpop(){
        if (this.q.length===1) return this.q.pop();
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

function solution(N, road, K) {
    //1에서 출발해서 도착했을 때 가장 짧은 거리 저장용
    let graph = Array.from({length:N+1},()=>[]);
    let distance = Array.from({length:N+1},()=>Infinity);
    
    for (let i=0; i<road.length; i++){
        let  [a, b, cost] = road[i];
        graph[a].push([b,cost]);
        graph[b].push([a,cost]);
    }

    function dijkstra(node){
        let minq = new MinHeap();
        minq.insert({
            curr:node,
            cost:0
        });
        distance[node] = 0;
        
        while(minq.len()!=0){
            let now = minq.minpop();
            let [nowCurr, nowCost] = [now.curr, now.cost];
            if (distance[nowCurr]<nowCost) continue; //이미 방문한 적이 있을 경우.
            for (let i=0; i<graph[nowCurr].length; i++){
                let [nextCurr, nextCost] = graph[nowCurr][i];
                let money = nowCost + nextCost;
                if (money<distance[nextCurr]){
                    minq.insert({
                        curr:nextCurr,
                        cost : money
                    });
                    distance[nextCurr] = money;
                }
                
                
            }
        }
        
    }
    
    dijkstra(1);
    //console.log(distance);
    return distance.filter(v => v<=K).length;
}


/* dijkstra
n개의 마을로 이루어진 나라.
이 나라의 각 마을에는 1~n까지의 번호가 각각 하나씩 부여되어 있음.
각 마을은 양방향으로 통행할 수 있는 도로로 연결.
서로 다른 마을 간에 이동할 때는 이 도로를 지나야 함.
도로를 지날 때 걸리는 시간은 도로별로 다름.
현재 1번 마을에 있는 음식점=> 각 마을로 음식 배달을 하려고 함.
각 마을로부터 음식 주문을 받으려고 하는데,
n개의 마을 중에서 k 시간 이하로 배달이 가능한 마을에서만 주문을 받으려고 함.
*/

//road [1,2,1] => 1에서 2로 가는데 1의 time