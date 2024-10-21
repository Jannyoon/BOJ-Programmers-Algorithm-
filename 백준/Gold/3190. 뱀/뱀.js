let fs = require('fs');
let[n,...input] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

n = +n;
let map = Array.from({length:n},()=>Array.from({length:n},()=>'0'));
let k;
let l;
let orders = [];

//map 전처리
let idx = 0;
while(idx<input.length){
  k = input[idx++];
  for (let i=0; i<k; i++){
    let [row, col] = input[idx++].split(" ").map(Number);
    map[row-1][col-1] = "*";
  }
  l = input[idx++];
  for (let i=0; i<l; i++){
    orders.push(input[idx++].split(" "));
  }
}

//방향 설정 : 우, 하, 좌, 상
let dx = [0,1,0,-1];
let dy = [1,0,-1,0];
let didx = 0;

//방향 전환 함수
function changeDir(didx, orderStr){
  if (orderStr==='D') didx = (didx+1)%4;
  else didx = (didx+3)%4;
  return didx;
}

//초기화 설정
map[0][0] = '1'; //방문처리
let snake = [[0,0]];

let time = 0;
let [nextTime, nextOrder] = orders[0];

while(true){
  if (orders.length>0) [nextTime, nextOrder] = orders[0]
  nextTime = +nextTime;
  if (time===nextTime){
    didx = changeDir(didx, nextOrder);
    orders.shift();
  }

  let head = snake[snake.length-1];
  let [x,y] = head;

  //다음에 위치할 좌표
  let nx = x+dx[didx];
  let ny = y+dy[didx];

  if (nx<=-1 || nx>=n || ny<=-1 || ny>=n || map[nx][ny]==='1'){
    console.log(time+1);
    return;
  }
  //다음 nx,ny 좌표 위치에 사과가 존재한다면
  else if (map[nx][ny]==='*'){
    map[nx][ny]='1';
    snake.push([nx,ny]);
  }
  else if (map[nx][ny]==0){
    let tail = snake.shift();
    map[tail[0]][tail[1]] = '0';
    map[nx][ny]='1';
    snake.push([nx,ny]);
  }

  time++;
}