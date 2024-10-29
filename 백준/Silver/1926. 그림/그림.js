let fs = require('fs');
let [rc, ...maps] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map(v => v.split(" ").map(Number));

let count = 0;
let [r,c] = rc;

//그림의 개수, 가장 넓은 그림의 면적
let size = -Infinity;

for (let i=0; i<r; i++){
  for (let j=0; j<c; j++){
    if (maps[i][j]===1){
      let result = dfs(i,j)
      count++;
      size = Math.max(size, result);
    }
  }
}

function dfs(i,j){
  //면적을 return 해야 함.
  let stack = [[i,j]];
  let dx = [-1,1,0,0];
  let dy = [0,0,-1,1];
  let count = 0;

  while(stack.length){
    let [x,y] = stack.pop();
    if (maps[x][y]!=="*") maps[x][y] = "*"; //방문처리
    count++;

    for (let k=0; k<4; k++){
      let nx = x+dx[k];
      let ny = y+dy[k];

      if (nx<=-1 || nx>=r || ny<=-1 || ny>=c) continue;
      if (maps[nx][ny]==='*' || maps[nx][ny]===0) continue;
      if (maps[nx][ny]===1){
        maps[nx][ny] = "*";
        stack.push([nx,ny]);    
      }
    }

  }
  return count;
}

let ans = [count, size===-Infinity ? 0 : size];
console.log(ans.join("\n"));