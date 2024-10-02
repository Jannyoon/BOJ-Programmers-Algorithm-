
function solution(maps) {
    //연결된 땅은 무인도. 
    //적힌 숫자를 모두 합한 값은 최대 며칠동안 머무를 수 있는지를 나타냄.
    //각 섬에서 최대 며칠씩 머무를 수 있는지, 배열에 오름차순으로 담아 return할 것.
    //만약 지낼 수 잇는 무인도가 없다면 -1을 배열에 담아 return.
    
    maps = maps.map(v => v.split(""));
    
    let answer = [];
    let flag = true; //지낼 수 있는 무인도가 없다는 뜻..
    
    let row = maps.length;
    let col = maps[0].length;
    
    for (let i=0; i<row; i++){
        for (let j=0; j<col; j++){

            if (maps[i][j]==='X') continue;
            else {
                flag = false;
                let time = dfs(maps, i,j);
                answer.push(time);
            }
        }
    }
    console.log(answer);
    if (flag) return [-1];
    return answer.sort((a,b)=>a-b);
}

function dfs(maps, i,j){
    //0부터 시작한다.
    //stack으로 처리를 해..
    let sum = 0;
    let stack = [[i,j]];
    let row = maps.length;
    let col = maps[0].length;
    
    
    let dx = [-1,1,0,0]; //상,하,좌,우
    let dy = [0,0,-1,1]; 


    while(stack.length>0){
        let now = stack.pop();
        let [x,y] = [now[0], now[1]]
        if (maps[x][y]!=='X'){
            sum += Number(maps[x][y]); 
            maps[x][y] = 'X';
        }
        
        for (let cnt=0; cnt<4; cnt++){
            let nx = x+dx[cnt];
            let ny = y+dy[cnt];
            
            if (nx<0 || nx>=row || ny<0 || ny>=col) continue;
            if (maps[nx][ny]==='X') continue;
            if (maps[nx][ny]!=='X'){
                sum+= Number(maps[nx][ny]);
                maps[nx][ny]='X';
                stack.push([nx,ny]);
            }
        }
        

    }
    return sum;
    
}
/*
여름을 맞아 무인도로 여행을 갈 것이다...
지도에는 바다와 무인도에 대한 정보가 표시되어 있다.
1x1 크기의 사각형들로 이루어진 !직사각형 격자 형태!
격자의 각 칸에는 'X' 또는 1~9 사이의 자연수가 적혀 있다.

지도의 'X'는 바다를 나타낸다. 숫자는 무인도를 나타낸다.
상,하,좌,우로 연결되는 땅들은 하나의 무인도를 이룬다.
지도의 각 칸에 적힌 숫자는 식량을 나타내는데 상,하,좌,우로 연결되는 칸에 적힌 숫자를 모두 합한 값은
해당 무인도에서 최대 며칠동안 머물 수 있는지를 나타낸다. => 연결된 땅들을 DFS로 탐색을 해야할 것.

어떤 섬으로 놀러갈지 못 정한 메리는 우선 각 섬에서 최대 며칠씩 머물 수 있는지 알아본 후 놀러갈 섬을 결정하려 함.

지도를 나타내는 문자열 배열 MAPS. 

*/