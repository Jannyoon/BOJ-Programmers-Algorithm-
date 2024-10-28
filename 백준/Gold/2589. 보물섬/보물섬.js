let fs = require('fs');
let [rc, ...maps] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let [row,col] = rc.split(" ").map(Number);
maps = maps.map(v => v.split(""));
let maxVal = -Infinity;

//상,하,좌,우
let dx = [-1,1,0,0];
let dy = [0,0,-1,1];

//해당 i,j가 전체 maps의 테두리거나, 바다를 한 면이라도 접하고 있거나...
for (let i=0; i<row; i++){
  for (let j=0; j<col; j++){
    if (maps[i][j]!=='L') continue; //땅이 아니면 pass

    let flag = false;
    for (let k=0; k<4; k++){
      let nx = i+dx[k];
      let ny = j+dy[k];
      if (nx<=-1 || nx>=row || ny<=-1 || ny>=col) continue;
      if (maps[nx][ny]==='W'){
        flag = true;
        break;
      }
    }

    if (i===0 || i===row-1 || j===0 || j===col-1 || flag){
      let newArr = maps.map(v => v.map(s => s));
      newArr[i][j] = 0;
      let val = bfs(i,j,newArr);
      maxVal = Math.max(maxVal, val);
    }
  }
}


function bfs(i,j,arr){
  let queue = [[i,j]];
  let state = -Infinity;
  let dx = [-1,1,0,0];
  let dy = [0,0,-1,1];


  while(queue.length>0){
    let [x,y] = queue.shift();
    let nowVal = arr[x][y];

    for (let k=0; k<4; k++){
      let nx = x+dx[k];
      let ny = y+dy[k];

      if (nx<=-1 || nx>=row || ny<=-1 || ny>=col) continue;
      if (arr[nx][ny]!='L') continue;
      if (arr[nx][ny]==='L'){
        arr[nx][ny] = arr[x][y]+1;
        state = Math.max(state, nowVal+1);
        queue.push([nx,ny]);
      }

    }

  }
  return state;
}

console.log(maxVal);