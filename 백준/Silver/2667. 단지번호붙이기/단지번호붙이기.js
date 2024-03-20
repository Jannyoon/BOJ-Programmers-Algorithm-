let fs = require('fs');
let [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

n=+n;
input = input.map((v)=>v.split("").map(Number));

let result = [];
let cnt = 0; //단지 개수 도출용

for (let i=0; i<n; i++){
  for (let j=0; j<n; j++){
    if (input[i][j]===1){
      if (dfs(i,j)) cnt++;
    }
  }
}

function dfs(i,j){
  let nrow = [-1,1,0,0]; //상,하,좌,우
  let ncol = [0,0,-1,1]; //상,하,좌,우

  let stack = [[i,j]];
  let check = 1; //단지 내 집 갯수

  while(stack.length>0){
    let [x,y] = stack.pop();
    if (input[x][y]!==0) input[x][y] = 0; //처음 방문처리

    for (let k=0; k<4; k++){
      let nx = x+nrow[k];
      let ny = y+ncol[k];

      if (nx<=-1 || nx>=n || ny<=-1 || ny>=n) continue;
      if (input[nx][ny]===0) continue;
      if (input[nx][ny]===1){
        check++;
        input[nx][ny] = 0;
        stack.push([nx,ny]);
      }
    }
  }
  result.push(check); 
  return true;
}


console.log(cnt+"\n"+result.sort((a,b)=>a-b).join("\n"));