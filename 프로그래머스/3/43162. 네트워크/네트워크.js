function solution(n, computers) {
    //네트워크의 개수 (한 그룹)를 return 하라.
    
    let visited = Array.from({length:n},()=>false);
    let group = 0;
    
    for (let i=0; i<n; i++){
        if (!visited[i]){
            if (dfs(i)) group++;
        }
    }
    
    function dfs(node){
        if (visited[node]) return;
        visited[node] = true;
        for (let i=0; i<computers[node].length; i++){
            if (visited[i]) continue;
            if (computers[node][i]===1 && !visited[i]) dfs(i);
        }
        
        return true;
    }
    
    
    return group;
}

//i번 컴퓨터와 j번 컴퓨터가 연결되어 이씅면 computers[i][j]를 1로 표현한다.
//음..... 그니까 그래프는 그대로 둬라 이거지?