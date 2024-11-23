let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(v => v.split(""));

let newArr = Array.from({length:6},()=>Array.from({length:12},()=>'.'));

for (let col=0; col<6; col++){
  for (let row=11; row>=0; row--){
    newArr[col][11-row] = input[row][col];
  }
}



/*
RR..........
RRYY........
YYG.........
GG..........
G...........
............
*/

//매 턴 마다 시작하기에 앞서 문자 사이 공백을 지우고, 칸의 개수를 채우는 과정을 반복한다.

let shooting = 0;

while(true){
  falling();
  let flag = false;
  let shootingList = []; //매 회차마다 [x,y]의 list들을 저장하게 될 것이다.
  let visited = Array.from({length:6},()=>Array.from({length:12}),()=>false);

  for (let i=0; i<6; i++){
    for (let j=0; j<12; j++){
      if (newArr[i][j]!=='.' && !visited[i][j]){
        let popList = dfs(i,j, visited);
        if (popList.length>=4){
          flag = true;
          shootingList.push(...popList);
        }
      }
    }
  }


  if (!flag) break;
  shootingList.forEach(([x,y])=>newArr[x][y]='.');
  shooting++;
}

function falling(){
  for (let i=0; i<6; i++){
    let targetArr = newArr[i];
    targetArr = targetArr.filter(v => v!==".");
    let remainingQuanity = 12-targetArr.length;
    for (let cnt=0; cnt<remainingQuanity; cnt++){
      targetArr.push(".");
    }
    newArr[i] = targetArr;
  }
}

function dfs(i,j, visited){
  let stack = [[i,j]];
  visited[i][j] = true;

  let dx = [-1,1,0,0];
  let dy = [0,0,-1,1];

  let list = [];

  while(stack.length>0){
    let [x,y] = stack.pop();
    list.push([x,y]);

    for (let k=0; k<4; k++){
      let nx = x+dx[k];
      let ny = y+dy[k];
      if (nx<=-1 || nx>=6 || ny<=-1 || ny>=12) continue;
      if (visited[nx][ny] || newArr[nx][ny]!==newArr[x][y]) continue;
      if (!visited[nx][ny] && newArr[nx][ny]===newArr[x][y]){
        visited[nx][ny] = true;
        stack.push([nx,ny]);
      }
    }
  }

  return list;
}

console.log(shooting);