let fs = require('fs');
let [rcn, ...stickers] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map(v => v.split(" ").map(Number));

//노트북...
let [row,col,n] = rcn;
let visited = Array.from({length:row},()=>Array.from({length:col},()=>0));

let idx=0;
while(idx<stickers.length){
  let [r,c] = stickers[idx++];
  let list = [];
  for (let  i=0; i<r; i++){
    list.push(stickers[idx++]);
  }

  for (let k=0; k<4; k++){
    let flag = false;
    let nowStickerR = list.length;
    let nowStickerC = list[0].length;
    for (let i=0; i<row; i++){
      for (let j=0; j<col; j++){

        let result = check(i,j,nowStickerR, nowStickerC,visited, list);
        if (result.length!==0){
          flag = true;
          result.forEach(([x,y])=>visited[x][y]=1);
          break;
        }
      }
      if (flag) break;
    } 
    if (flag) break;
    list = rotate(nowStickerR, nowStickerC, list);
  }
}

//시계방향으로 rotate하는 함수
function rotate(row, col, sticker){
  let arr = Array.from({length:col},()=>Array.from({length:row},()=>0)); 
  for (let i=row-1; i>=0; i--){
    let rotateList = sticker[i];
    for (let j=0; j<col; j++){
      arr[j][row-1-i] = rotateList[j];
    }
  }
  return arr;
}

function check(startX, startY, strow, stcol, visited, sticker){
  let oneList = [];
  for (let i=startX; i<startX+strow; i++){
    for (let j=startY; j<startY+stcol; j++){
      if (i>=row || j>=col) return [];
      if (sticker[i-startX][j-startY]===1 && visited[i][j]) return [];
      if (!visited[i][j] && sticker[i-startX][j-startY]===1){
        oneList.push([i,j]);
      }
    }
  }
  return oneList;
}
  
let total = 0;
for (let i=0; i<row; i++){
  for (let j=0; j<col; j++){
    if (visited[i][j]===1) total++;
  }
}

console.log(total);