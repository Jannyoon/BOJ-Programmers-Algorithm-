function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let temp = truck_weights.slice();
    //최대 bridge_length만큼 올릴 수 있다
    //최대 weight만큼 견딜 수 있다.
    let queue = []; //다리를 건너는 중인 트럭
    //대기 트럭 : truck_weights = [7,4,5,6];
    let count = 0;
    let finish  = [];
    while(truck_weights.length!==0){
        if (queue.length==bridge_length){ //먼저 내리게 할 것
            //count++;
            queue.shift();
        }
        let totalW = queue.reduce((prev,cur)=>prev+cur,0);
        
        if ((totalW + truck_weights[0])<=weight){
            queue.push(truck_weights.shift());
            count++;
        }
        else {
            queue.push(0);
            count++;
        }
        //console.log(count, queue);
    }
    
    while(queue.length!==bridge_length) queue.push(0);
    while(queue.length!==0){
        queue.shift();
        count++;
    }
    return count;
}