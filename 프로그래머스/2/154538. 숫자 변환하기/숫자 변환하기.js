function solution(x, y, n) {
    //bfs로 처리해야 한다...
    let dp = Array.from({length:y+1},()=>-1); //수행 횟수 기록하기
    let answer = -1;
    dp[x] = 0;
    bfs();
    
    function bfs(){
        let queue = [x];
        
        while(queue.length>0){
            let now = queue.shift();
            if (now===y) return;
           
            let list = [now+n, now*2, now*3];
            
            for (let k=0; k<3; k++){
                let next = list[k];
                if (next<1 || next>1000000) continue;
                if (dp[next]===-1){
                    if (next===y){
                        dp[next] = dp[now]+1;
                        return;
                    }
                    dp[next] = dp[now]+1;
                    queue.push(next);
                }
            } 
        }  
    }
    
    //console.log(dp);
    
    return dp[y];
}