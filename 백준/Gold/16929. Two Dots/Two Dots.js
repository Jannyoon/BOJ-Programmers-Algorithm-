let fs = require('fs');
let [nm, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");


let [n,m] = nm.split(" ").map(Number);
let team = Array.from({length:n},()=>Array.from({length:m},()=>0));
let nrow = [-1,1,0,0];
let ncol = [0,0,-1,1]; //상,하,좌,우

input = input.map(v=>v.split(""));
let cnt = 0;
let flag = false;

for (let i=0; i<n; i++){
  for (let j=0; j<m; j++){
    let visited = Array.from({length:n},()=>Array.from({length:m},()=>false));    
    cnt=1;
    dfs(i,j,i,j,cnt,visited);
    if (flag) break;
  }
}

function dfs(x,y,nowi,nowj,cnt,visited){
  if (visited[nowi][nowj] && cnt>=4){
    flag = true;
    return;
  }
  
  visited[nowi][nowj] = true;


  for (let k=0; k<4; k++){
    let nx = nowi + nrow[k];
    let ny = nowj + ncol[k];
    if (nx<=-1 || nx>=n || ny<=-1 || ny>=m) continue;
    if (input[x][y]===input[nx][ny] && !visited[nx][ny]){
      dfs(x,y,nx,ny,cnt+1, visited);
    }
    else if (nx===x && ny===y && cnt>=4){
      dfs(x,y,nx,ny,cnt,visited);
    }
  }
}

console.log(flag ? "Yes" : "No");
//console.log(input);