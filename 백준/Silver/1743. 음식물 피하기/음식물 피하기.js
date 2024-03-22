let fs = require('fs');
let [nmk, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let [row, col, k] = nmk.split(" ").map(Number);
input = input.map((v)=>v.split(" ").map(Number));
let arr = Array.from({length:row},()=>Array.from({length:col},()=>0));

for (let i=0; i<k; i++){
  let [x,y] = input[i];
  arr[x-1][y-1] = 1;
}

let list = []; //각 집단의 요소 갯수가 몇 개인지 저장하는 용
let nrow = [-1,1,0,0];
let ncol = [0,0,-1,1]; //상,하,좌,우

for (let i=0; i<row; i++){
  for (let j=0; j<col; j++){
    if (arr[i][j]===1) list.push(dfs(i,j));
  }
}


function dfs(i,j){
  //갯수 세야돼...!
  let stack = [[i,j]];
  let cnt = 0;

  while(stack.length>0){
    let [x,y] = stack.pop();
    if (arr[x][y]===1){
      arr[x][y] = 0;
      cnt++; //방문처리
    }

    for (let k=0; k<4; k++){
      let nx = x+nrow[k];
      let ny = y+ncol[k];

      if (nx<=-1 || nx>=row || ny<=-1 || ny>=col) continue;
      if (arr[nx][ny]===1){
        arr[nx][ny] = 0; //방문 처리
        stack.push([nx,ny]);
        cnt++;
      }
    }
  }
  return cnt;
}

console.log(Math.max(...list));