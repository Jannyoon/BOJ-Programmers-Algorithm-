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
    
    swap(arr, a, b){
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        return;
    }
    
    insert(val){
        this.q.push(val);
        this.heapifyUp();
    }
    
    heapifyUp(idx = this.lastIdx()){
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
        if (minidx === idx) return;
        this.swap(this.q, minidx, idx);
        
        return this.heapifyDown(minidx);
    }
}

function solution(book_time) {
    //var answer = 0;
    book_time = book_time
        //["15:00", "17:00"]
        .map((v)=>
             //"15:00"
             v.map(time =>{
               let arr =  time.split(":").map((element, i)=>{
                    if (i==0) return parseInt(element)*60;
                    else return parseInt(element);
                })
               return arr.reduce((prev,cur)=>prev+cur);
            }
            ));
             
    //console.log(book_time);         
           
    book_time.sort((a,b)=>{
        if (a[0]===b[0]) return a[1]-b[1]; //시작 시간이 같을 경우 종료 시각이 빠른 순으로 정렬
        return a[0]-b[0];
    });
    
    
    let room = new MinHeap();
    room.insert(0); //00:00부터 사용할 수 잇는 방임
    let cnt=1;
    for (let i=0; i<book_time.length; i++){
        let [start, end] = book_time[i];
        let room_able = room.q[0];
        
        if (room_able<=start){
            room.minpop();
            room.insert(end+10); //퇴실 시간을 기준으로 10분간 청소
        }
        else {
            room.insert(end+10);
            cnt++;
        }
     
    }

    return cnt;
}
/*
호텔을 운영중인 코니는 최소한의 객실만을 사용하여 예약 손님들을 받으려고 합니다.
한 번 사용한 객실은 퇴실 시간을 기준으로 10분간 청소를 하고(+10을 추가한다는 뜻)
다음 손님들이 사용할 수 잇습니다.

예약 시각이 문자열 형태로 담긴 2차원 배열 book_time이 매개변수로 주어질 때,
코니에게 필요한 최소 객실의 수를 return하는 solution 함수를 완성해주세요.

HH:MM 

그냥 4자리 숫자로 퉁칠 것.
!!대실 시작 시각, 대실 종료 시각
!!예약 시각이 자정을 넘어가는 경우는 없습니다
!!시작 시각은 항상 종료 시각보다 빠릅니다.
*/