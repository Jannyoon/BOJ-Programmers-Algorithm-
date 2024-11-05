let fs = require('fs');
let [n, ...map] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map(v => v.split(" ").map(Number));

n = n[0];
let cnt = [0,0]; //idx에 따라 zeroCnt, oneCnt

//startX : 0, startY : 0, endX : n-1, endY : n-1;
function Paper(startX, startY, endX, endY){
  //console.log("-------현재 범위", startX, startY, endX, endY);
  if (startX==endX && startY==endY){
    let value = map[startX][startY];
    cnt[value]++; //value는 0 아니면 1의 값을 갖고 있을 것.
    return;
  }

  let flag = true; //해당 영역이 전부 같은 색으로 칠해져있는지 판별용 flag
  let checkVal = map[startX][startY];
  for (let i=startX; i<=endX; i++){
    for (let j=startY; j<=endY; j++){
      if (map[i][j]!==checkVal){
        flag = false;
        break;
      }
    }
    if (!flag) break;
  }

  if (flag){
    cnt[checkVal]++;
    return;
  }

  Paper(startX, startY, startX+parseInt((endX-startX)/2), startY+parseInt((endY-startY)/2));
  Paper(startX, startY+parseInt((endY-startY+1)/2), startX+parseInt((endX-startX)/2), endY);
  Paper(startX+parseInt((endX-startX+1)/2), startY, endX, startY+parseInt((endY-startY)/2));
  Paper(startX+parseInt((endX-startX+1)/2), startY+parseInt((endY-startY+1)/2), endX, endY);
}

Paper(0,0,n-1,n-1);

console.log(cnt.join("\n"));