function solution(maps) {
    let arr = maps.slice().map((v)=>v.map((s)=>0)); //visited의 역할
    let row = arr.length;
    let col = arr[0].length;
    
    return bfs(maps, row, col);
}

let nrow = [-1,1,0,0];
let ncol = [0,0,-1,1]; //상,하,좌,우

function bfs(maps, row, col){
    let arr = maps.slice().map((v)=>v.map((s)=>0)); //visited의 역할
    let queue = [[0,0]];
    
    while(queue.length!==0){
        let [x,y] = queue.shift();
        for (let cnt=0; cnt<4; cnt++){
            let nx = x+nrow[cnt];
            let ny = y+ncol[cnt];
            
            if (nx<=-1 || ny<=-1 || nx>=row || ny>=col) continue;
            if (maps[nx][ny]===0) continue;
            if (arr[nx][ny]!==0) continue;
            if (arr[nx][ny]===0 && maps[nx][ny]===1){
                arr[nx][ny] = arr[x][y]+1; //방문 처리.
                queue.push([nx,ny]);
            }
        }
        
        
    }
    if (arr[row-1][col-1]===0) return -1;
    else return arr[row-1][col-1]+1;
    
}

/*
ROR게임
빨리 도착하는 것. BFS

0 : 벽이 있는 자리
1 : 벽이 없는 자리

캐릭터는 게임 맵의 좌측 상단인 (1,1)위치에서 시작.
=> 코드에선 0,0 idx에서 시작할 것.

흰색 부분은 갈 수 있는 길.
캐릭터가 움직이는 것 : 동, 서, 남, 북

*/