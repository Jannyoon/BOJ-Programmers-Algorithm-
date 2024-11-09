let fs = require('fs');
let [rc, ...map] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

//r-1행 c-1열이라 생각할 것
let [r,c] = rc.split(" ").map(Number);
let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let visited = Array.from({length:alpha.length},()=>false);
let maxCnt = -1;

//상,하,좌,우
let dx = [-1,1,0,0];
let dy = [0,0,-1,1];

let nowIdx = alpha.indexOf(map[0][0]);
visited[nowIdx] = true;
btk(0,0,1);


function btk(x,y,count){
  let idx = alpha.indexOf(map[x][y]);
  let flag = false;

  for (let k=0; k<4; k++){
    let nx = x + dx[k];
    let ny = y + dy[k];
    if (nx<=-1 || nx>=r || ny<=-1 || ny>=c) continue;
    let nidx = alpha.indexOf(map[nx][ny]);
    if (visited[nidx]) continue;
    if (!visited[nidx]){
      flag = true;
      visited[nidx] = true;
      btk(nx, ny, count+1);
      visited[nidx] = false;
    }
  }

  if (!flag){
    //움직일 곳이 없다는 뜻.
    maxCnt = Math.max(maxCnt, count);
    return;
  }
}

console.log(maxCnt);