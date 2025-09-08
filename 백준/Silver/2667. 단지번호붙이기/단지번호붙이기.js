let fs = require('fs');
let [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

n = +n;
input = input.map(v => v.split("").map(Number));

//상, 하, 좌, 우
let nx = [-1, 1, 0, 0];
let ny = [0, 0, -1, 1]; 

let ans = 0;
let houses = [];

for (let i=0; i<n; i++){
  for (let j=0; j<n; j++){
    if (input[i][j]===0) continue;
    if (dfs(i,j)) ans++;
  }
}


function dfs(i,j){
  let cnt = 0;
  let stack = [[i,j]]

  while(stack.length>0){
    let [nowx, nowy] = stack.pop();
    cnt++;

    if (input[nowx][nowy]===1) input[nowx][nowy] = 0;
    for (let k=0; k<4; k++){
      let [nextx, nexty] = [nowx + nx[k], nowy+ny[k]];

      if (nextx<=-1 || nextx>=n || nexty<=-1 || nexty>=n) continue;
      if (input[nextx][nexty]===0) continue;
      if (input[nextx][nexty]===1){
        stack.push([nextx, nexty])
        input[nextx][nexty] = 0; //방문처리
      }
    }
  }

  houses.push(cnt);
  return true;
}

if (houses.length===0) houses.push(0);
console.log(ans+"\n"+houses.sort((a,b)=>a-b).join("\n"));
