let fs = require('fs');
let [rc, ...map] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let [col,row] = rc.split(" ").map(Number);
map = map.map((v)=>v.split("").map(Number));

let wall=Array.from({length:row},()=>Array.from({length:col},()=>Infinity));
wall[0][0]=0; //(1,1)과 (n,m)은 항상 뚫려 있다.

let nrow = [1,0,-1,0]; //하, 우, 상,좌
let ncol = [0,1,0,-1];

function bfs(){
  let queue = [[0,0,0]]; //wall 개수, x좌표, y좌표

  while(queue.length>0){
    let [count, x, y] = queue.shift(); 
    if (wall[x][y]<count) continue; //이미 기록된 숫자가 더 적으면 다음 순번으로 continue;

    for (let k=0; k<4; k++){
      let nx = x+nrow[k];
      let ny = y+ncol[k];

      if (nx<=-1 || nx>=row || ny<=-1 || ny>=col) continue;
      if (map[nx][ny]===1){
        if ((count+1)<wall[nx][ny]){
          wall[nx][ny] = count+1;
          queue.push([count+1, nx, ny]);
        }
      }
      else {
        if (count<wall[nx][ny]){
          wall[nx][ny] = count;
          queue.unshift([count, nx, ny]);
        }
      }
    }
  }
}

bfs();
console.log(wall[row-1][col-1]);
