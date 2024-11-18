let fs = require('fs');
let [nlr, ...arr] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map(v => v.split(" ").map(Number));

let [n,l,r] = nlr;

let day = 0;


while(true){
  let visit = Array.from({length:n},()=>Array.from({length:n},()=>false));
  let totalCountry = 0;

  for (let i=0; i<n; i++){
    for (let j=0; j<n; j++){
      if (!visit[i][j]){
        let [list, sum] = dfs(i,j,visit);
        if (list.length>1){
          list.forEach(([x,y])=>arr[x][y] = Math.floor(sum/list.length));
          totalCountry++;
        }
      }
    }
  }

  if (totalCountry===0) break;
  day++;
}

function dfs(nowX, nowY,visit){
  let stack = [[nowX, nowY]];
  visit[nowX][nowY] = true;
  let list = []; //인구 이동해야 할 리스트
  let sum = 0;
  let dx = [-1,1,0,0];
  let dy = [0,0,-1,1];

  while(stack.length>0){
    let [x,y] = stack.pop();
    sum+=arr[x][y];
    list.push([x,y]);

    for (let k=0; k<4; k++){
      let nx = x+dx[k];
      let ny = y+dy[k];

      if (nx<=-1 || nx>=n || ny<=-1 || ny>=n || visit[nx][ny]) continue;
      if (!visit[nx][ny] && Math.abs(arr[x][y]-arr[nx][ny])>=l &&  Math.abs(arr[x][y]-arr[nx][ny])<=r){
        visit[nx][ny] = true;
        stack.push([nx, ny]);
      }
    }
  }
  return [list, sum];
}

console.log(day);