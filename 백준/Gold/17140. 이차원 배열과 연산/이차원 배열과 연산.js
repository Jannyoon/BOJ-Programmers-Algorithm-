/*
크기가 3X3인 배열 A. 배열의 인덱스는 1부터 시작한다.
1초가 지날떄마다 배열에 연산이 적용된다.... 

R연산 : 배열 A의 모든 행에 대해서 정렬을 수행한다. 
행의 개수>=열의 개수인 경우에 적용된다.

C 연산 : 배열 A의 모든 열에 대해서 정렬을 수행한다. 
행의 개수 < 열의 개수인 경우에 적용된다.

매 회차에서 R 연산 OR C 연산 둘 중 한 번만 일어나는 것.


한 행 또는 열에 있는 수를 정렬하려면, 각각의 수가 몇 번 나왔는지 알아야 한다.
그 다음, 수의 등장 횟수가 커지는 순으로, 그러한 것이 여러가지면 수가 커지는 순으로 정렬한다.
우선 순위 : 등장 횟수 오름차순, 이후는 대상 숫자 오름차순

[대상 숫자, 등장 횟수]
[3,1,1] => [3,1,1,2] => [2,1,3,1,1,2]


매 회차에서 해당 숫자가 몇 개가 나타나는지를 세야 한다.
배열 A에 들어있는 수는 100보다 작거나 같은 자연수.

A[r][c]에 들어있는 값이 k가 되기 위한 연산의 최소 시간을 출력한다.
100초가 지나도 A[r][c] = k가 되지 않으면 -1을 출력한다.
*/

let fs = require('fs');
let [rck,...input] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map((v)=>v.split(" ").map(Number));
let [r,c,k] = rck;

let matrix = Array.from({length:101},()=>Array.from({length:101},()=>0));
let maxRow = 3;
let maxCol = 3;

//matrix 초기화
for (let i=0; i<3; i++){
  for (let j=0; j<3; j++){
    matrix[i+1][j+1] = input[i][j];
  }
}

let answer = -1;
let second = 0;

while(second<=100){
  if (matrix[r][c]===k){ //해당 값이 되었을 때 answer값을 갱신시키고 while 구문을 끊어냄.
    answer = second;
    break;
  }
  //행의 개수>=열의 개수이면 R연산
  if (maxRow>=maxCol) Rcalc();
  else Ccalc();
  second++;
}

//배열 A의 모든 행에 대해서 정렬을 수행한다.
function Rcalc(){
  for (let i=1; i<=maxRow; i++){ //행
    let rowList = new Map(); //해당 숫자가 0이 아니면 집어넣는다..
    for (let j=1; j<=100; j++){ //열
      if (matrix[i][j]===0) continue;
      if (!rowList.has(matrix[i][j])){
        rowList.set(matrix[i][j], 1);
      }
      else {
        let value = rowList.get(matrix[i][j]);
        rowList.set(matrix[i][j], value+1);
      }
    }

    rowList = [...rowList].sort((a,b)=>{
      if (a[1]==b[1]) return a[0]-b[0];
      else return a[1]-b[1];
    }).flat();
    maxCol = Math.max(maxCol, rowList.length); //행을 정렬하면서 열의 크기가 바뀐다.
    //console.log(rowList);

    for (let j=1; j<=100; j++){ //열
      matrix[i][j] = 0; //해당 행을 초기화하는 작업
    }
    for (let j=1; j<=rowList.length; j++){
      if (j>100) break;
      matrix[i][j] = rowList[j-1]; //matrix에 재할당한다.
    }
  }
}

//배열 A의 모든 열에 대해서 정렬을 수행한다.
function Ccalc(){
  for (let j=1; j<=maxCol; j++){ //행
    let colList = new Map(); //해당 숫자가 0이 아니면 집어넣는다..
    for (let i=1; i<=100; i++){ //열
      if (matrix[i][j]===0) continue;
      if (!colList.has(matrix[i][j])){
        colList.set(matrix[i][j], 1);
      }
      else {
        let value = colList.get(matrix[i][j]);
        colList.set(matrix[i][j], value+1);
      }
    }
    colList = [...colList].sort((a,b)=>{
      if (a[1]==b[1]) return a[0]-b[0];
      else return a[1]-b[1];
    }).flat();
    maxRow = Math.max(maxRow, colList.length); //열을 정렬하면서 행의 크기가 바뀐다
    //console.log(colList);

    for (let i=1; i<=100; i++){ //행
      matrix[i][j] = 0; //해당 열을 초기화하는 작업
    }
    for (let i=1; i<=colList.length; i++){
      if (i>100) break;
      matrix[i][j] = colList[i-1]; //matrix에 재할당한다.
    }
  }
}

console.log(answer);