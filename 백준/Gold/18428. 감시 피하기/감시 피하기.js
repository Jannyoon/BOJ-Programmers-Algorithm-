let fs = require('fs');
let [n, ...map] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map(v => v.split(" "));

n=+n[0];
let answer = false;

//상,하,좌,우
let dx = [-1,1,0,0];
let dy = [0,0,-1,1];

function btk(obstacleCnt){
  if (obstacleCnt===3){
    //맵 전체를 돌면서 선생들이 학생을 확인할 수 있는지 판별한다.
    let discover = false;
    for (let i=0; i<n; i++){
      for (let j=0; j<n; j++){
        if (map[i][j]==='T'){
          for (let k=0; k<4; k++){
            let nx = i+dx[k];
            let ny = j+dy[k];
            
            if (nx<=-1 || nx>=n || ny<=-1 || ny>=n) continue; //영역 밖으로 넘어가면 패스
            
            //0:상, 1:하, 2:좌, 3:우
            discover = checkStudent(k, nx, ny);
            if (discover) return; //학생을 찾아버렸다면 더 진행할 필요가 없음
          }
        }
      }
    }
    
    if (!discover){
      answer = true;
      return;
    }
  }

  //i : 장애물 번호라 생각하자...
  for (let i=0; i<3; i++){
    for (let x=0; x<n; x++){
      for (let y=0; y<n; y++){
        if (answer) return;
        if (map[x][y]!=='X') continue;
        if (map[x][y]==='X'){
          //방문 처리
          map[x][y] = 'O';
          btk(obstacleCnt+1);
          //방문 처리 취소
          map[x][y] = 'X';
        }
      }
    }
  }

}

function checkStudent(dir, nowX, nowY){
  let result = false;
  //위쪽을 보고 있다면 열 고정, 행 감소
  if (dir===0){
    while(nowX>=0){
      if (map[nowX][nowY]==='S'){
        result = true;
        break;
      }
      else if (map[nowX][nowY]==='O') break;
      nowX--;
    }
  }
  //아래쪽을 보고 있다면 열 고정, 행 증가
  else if (dir===1){
    while(nowX<n){
      if (map[nowX][nowY]==='S'){
        result = true;
        break;
      }
      else if (map[nowX][nowY]==='O') break;
      nowX++;
    }
  }
  //왼쪽을 보고 있다면 행 고정, 열 감소
  else if (dir===2){
    while(nowY>=0){
      if (map[nowX][nowY]==='S'){
        result = true;
        break;
      }
      else if (map[nowX][nowY]==='O') break;
      nowY--;
    }
  }
  //오른쪽을 보고 있다면 행 고정, 열 증가
  else if (dir===3){
    while(nowY<n){
      if (map[nowX][nowY]==='S'){
        result = true;
        break;
      }
      else if (map[nowX][nowY]==='O') break;
      nowY++;
    }    
  }

  return result;
}


btk(0);
console.log(answer?"YES":"NO");