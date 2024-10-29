let fs = require('fs');
let [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let dx = [-1,-2,-2,-1,1,2,2,1];
let dy = [2,1,-1,-2,-2,-1,1,2];
let answer = [];
let idx = 0;

while(idx<input.length){
  let size = parseInt(input[idx++]);
  let startPos = input[idx++].split(" ").map(Number);
  let targetPos = input[idx++].split(" ").map(Number);
  
  //아직 방문하지 않은 곳은 -1로 표기.
  let map = Array.from({length:size},()=>Array.from({length:size},()=>-1));
  map[startPos[0]][startPos[1]] = 0;

  let result = bfs(size, startPos[0], startPos[1], targetPos[0], targetPos[1], map);
  answer.push(result);
}

function bfs(size, startX, startY, targetX, targetY, arr){
  let queue = [[startX, startY]];
  while(queue.length>0){
    let [x,y] = queue.shift();
    if (x===targetX && y===targetY) return arr[x][y];
    for (let k=0; k<8; k++){
      let nx = x+dx[k];
      let ny = y+dy[k];

      if (nx<=-1 || nx>=size || ny<=-1 || ny>=size) continue;
      if (arr[nx][ny]!==-1) continue; //이미 방문한 곳은 pass
      if (arr[nx][ny]===-1){
        arr[nx][ny] = arr[x][y]+1;
        queue.push([nx,ny]);
      }
    }
  }

}

console.log(answer.join("\n"));