let fs = require('fs');
let [nm, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

//row: n, col: m
let [n,m] = nm.split(" ").map(Number)
input = input.map(v => v.split(""));

//상, 하, 좌, 우
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let cnt = 0;


for (let i=0; i<n; i++){
  for (let j=0; j<m; j++){
    if (input[i][j]==='I') dfs(i,j);
  }
}


function dfs(i,j){
  if (input[i][j]==='P') cnt++;
  input[i][j] = "*"

  for (let k=0; k<4; k++){
    let nx = i+dx[k];
    let ny = j+dy[k];

    if (nx<=-1 || nx>=n || ny<=-1 || ny>=m) continue;
    if (input[nx][ny]==='*' || input[nx][ny]==='X') continue;
    if (input[nx][ny]==='O' || input[nx][ny]==="P") dfs(nx, ny)
  }

  return
}

console.log(cnt ? cnt : "TT");