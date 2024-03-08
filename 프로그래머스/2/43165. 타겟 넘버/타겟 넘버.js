//순서를 바꾸지 않고 : btk x. dfs로 stack 방식을 고려

function solution(numbers, target) {
    let qidx = 0;
    let count = 0;
    let diff = [1, -1];
    
    function dfs(){
        let queue = [[numbers[0],0],[-numbers[0],0]];
        while(qidx<queue.length){
            let [sum, idx] = queue[qidx++];
            
            for (let cnt=0; cnt<2; cnt++){
                let next = numbers[idx+1]*diff[cnt];
                let newSum = sum+next;
                if (idx===(numbers.length-2)){
                    if (newSum===target) count++;
                }
                else {
                    queue.push([newSum, idx+1]);
                }
            }
        }
    }   
    
    dfs();
    return count;
}