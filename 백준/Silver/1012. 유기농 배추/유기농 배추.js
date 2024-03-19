let fs = require('fs');
let [tc, ...input] = fs.readFileSync('/dev/stdin').toString().trim()
.split('\n').map((v)=>v.split(" ").map(Number));

let ans = [];
let nrow = [-1,1,0,0];
let ncol = [0,0,-1,1]; //상,하,좌,우

let idx = 0;
tc = tc[0];
while(idx<input.length){
  let [col, row, count] = input[idx++];
  // console.log(col, row, count);
  let arr = Array.from({length:row},()=>Array.from({length:col},()=>0));
  let visited = Array.from({length:row},()=>Array.from({length:col},()=>false))
  //배추 위치 표시
  for (let i=0; i<count; i++){
    let [y,x] = input[idx++]; //코드에서 x를 행, y를 열로 간주하고 작성하겠다.
    arr[x][y] = 1;
  }

  let groupCnt = 0;

  for (let i=0; i<row; i++){
    for (let j=0; j<col; j++){
      if (!visited[i][j] && arr[i][j]===1){ //방문한 적 없고, 배추가 아니라면
        dfs(i,j);
        groupCnt++;
      }
    }
  }

  
  function dfs(i,j){
    if (!visited[i][j]) visited[i][j] = true;

    let [x,y] = [i,j];
    for (let cnt=0; cnt<4; cnt++){
      let nx = x + nrow[cnt];
      let ny = y + ncol[cnt];

      if (nx<=-1 || ny<=-1 || nx>=row || ny>=col) continue;
      if (arr[nx][ny]=== 0) continue;
      if (arr[nx][ny]===1 && !visited[nx][ny]){
        visited[nx][ny] = true;
        dfs(nx,ny);
      }
    }

  }

  ans.push(groupCnt);
  
}


console.log(ans.join("\n"));
