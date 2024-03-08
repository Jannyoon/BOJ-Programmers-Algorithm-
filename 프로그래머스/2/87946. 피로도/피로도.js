function solution(k, dungeons) {
    var answer = -1;
    
    let state = k;
    let totalCount = dungeons.length; //바닥 조건에서 사용하려는 변수
    let visited = Array.from({length:dungeons.length},()=>false);
    let result = -Infinity; //매 회차 때 어떤 결과였는지 저장하는 용으로 사용하겠다.
    

    btk(0,0);
    
    function btk(count, num){
        if (count===totalCount){
            result = Math.max(result, num);
            return;
        }
        
        for (let i=0; i<totalCount; i++){
            //[80,20] : [최소 필요 피로도, 소모 피로도]
            if (visited[i]) continue;
            
            visited[i] = true;
            if (state<dungeons[i][0]){
                btk(count+1, num);
            }//현재 상태가 필요보다 적다면 넘어감
            else {
                state-=dungeons[i][1];
                btk(count+1, num+1);
                state+=dungeons[i][1];
            }
            visited[i] = false;
        }
        
    }

    return result;
}


/*
최소 필요 피로도, 던전 탐험을 마쳤을 때 소모되는 소모 피로도
*/