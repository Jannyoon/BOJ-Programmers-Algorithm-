function solution(n, wires) {
    let cnt = Infinity; //답으로 도출할 두 그룹의 송전탑 개수 차. Math.min(cnt, Math.abs(a-b));
    
    for (let i=0; i<wires.length; i++){
        //끊을 전력망 링크를 설정하는 것. wires[i]
        
        let graph = Array.from({length:n+1},()=>[]);
        let groupNum = 0;
        
        for (let j=0; j<wires.length; j++){
            if (j===i) continue;
            let [a,b] = wires[j];
            graph[a].push(b);
            graph[b].push(a);
        }

        //그래프 정보를 저장했으면 bfs를 실행.
        //bfs를 실행했을 때 group이 2 이상이면 바로 continue로 넘어간다.
        //그룹이 2개라면 차이를 cnt에 갱신.
        let list = [];
        let visited = Array.from({length:n+1},()=>false);
        for (let node=1; node<=n; node++){
            if (!visited[node]){
                if (bfs(graph,visited,node,list)) groupNum++;
            }
        }

        if (groupNum>2) continue;
        let [tw1, tw2] = list;
        cnt = Math.min(cnt, Math.abs(tw1-tw2));
    }
    return cnt;

}



//그래프, 현재 노드, 현재까지 총 노드 갯수
function bfs(graph, visited, node, list){
    let num = 1;
    let queue = [node];
    
    while(queue.length!==0){
        if (!visited[node]) visited[node] = true;
        let now = queue.shift();
        
        for (let nextNode of graph[now]){
            if (!visited[nextNode]){
                num++;
                visited[nextNode] = true;
                queue.push(nextNode);                
            }
        }
    }
    list.push(num);
    return true;
}

/*
n개의 송전탑이 전선을 통해 하나의 트리 형태로 연결되어 있습니다.

당신은 이 전선들 중 하나를 끊어서 현재의 
*/