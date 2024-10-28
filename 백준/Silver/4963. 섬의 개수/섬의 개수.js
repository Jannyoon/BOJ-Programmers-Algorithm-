let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

input.pop();

//상,하,좌,우
let dx = [-1,1,0,0, -1,-1, 1, 1];
let dy = [0,0,-1,1, 1, -1, 1, -1];

let answer = [];
let idx = 0;
while(idx<input.length){
  let [col, row] = input[idx++].split(" ").map(Number);
  let map = [];
  for (let i=0; i<row; i++){
    map.push(input[idx++].split(" ").map(Number));
  }
  
  let count = 0;

  for (let i=0; i<row; i++){
    for (let j=0; j<col; j++){
      if (map[i][j]===1){
        if (dfs(i,j,row,col,map)){
          count++;
        }
      }
      
    }
  }
  answer.push(count);
}


function dfs(i,j, row, col, map){
  if (map[i][j]==="*") return;
  map[i][j] = "*";

  for (let k=0; k<8; k++){
    let nx = i+dx[k];
    let ny = j+dy[k];

    if (nx<=-1 || nx>=row || ny<=-1 || ny>=col) continue;
    if (map[nx][ny]===1) dfs(nx, ny, row, col, map);
  }
  return true;
}

console.log(answer.join("\n"));