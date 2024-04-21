let fs = require('fs');
let [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n")

n = +n;
input = input.map((v)=>v.split(""));

let count1 = 0; //적록색약이 아닌 사람
let count2 = 0; //적록색약인 사람

let nrow = [-1,1,0,0]; //상,하,좌,우
let ncol = [0,0,-1,1]; //상,하, 좌,우

for (let cnt=0; cnt<2; cnt++){
  let visited = Array.from({length:n},()=>Array.from({length:n},()=>false));
  if (cnt===0){ //적록색약이 아닌 경우
    for (let i=0; i<n; i++){
      for (let j=0; j<n; j++){
        if (!visited[i][j]){
          dfs1(i,j, visited);
          count1++;
        }
      }
    }
  }
  else{
    input = input.map((v)=>v.map(word=>{
      if (word==='G') return 'R';
      else return word;
    }))
    for (let i=0; i<n; i++){
      for (let j=0; j<n; j++){
        if (!visited[i][j]){
          dfs1(i,j, visited);
          count2++;
        }
      }
    }

  }
}

console.log(count1+" "+count2);

//적록색약이 아닌 사람
function dfs1(x,y, visited){
  if (visited[x][y]) return;  
  visited[x][y] = true;
  let now = input[x][y];


  for (let k=0; k<4; k++){
    let nx = x+nrow[k];
    let ny = y+ncol[k];

    if (nx<=-1 || nx>=n || ny<=-1 || ny>=n) continue;
    if (now!==input[nx][ny]) continue;
    if (visited[nx][ny]) continue;
    if (!visited[nx][ny] && now===input[nx][ny]) dfs1(nx,ny,visited);
  }

}
