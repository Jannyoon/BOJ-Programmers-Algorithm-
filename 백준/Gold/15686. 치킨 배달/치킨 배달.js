let fs = require('fs');
let [nm, ...map] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map(v => v.split(" ").map(Number));
let [n,m] = nm;
let chicken = [];
let house = [];

for (let i=0; i<n; i++){
  for (let j=0; j<n; j++){
    if (map[i][j]===1) house.push([i,j]);
    else if (map[i][j]===2) chicken.push([i,j]);
  }
}

//해당 idx의 치킨집을 선택했는가로 판별
let yesChicken = Array.from({length:chicken.length},()=>false);
let result = Infinity;

function btk(now, selectedNum){
  if (selectedNum===m){
    cityDistanceCalc();
    return;
  }
  for (let i=now; i<chicken.length; i++){
    if (yesChicken[i]) continue;
    yesChicken[i] = true;
    btk(i+1, selectedNum+1);
    yesChicken[i] = false;
  }
}


function cityDistanceCalc(){
  let total = 0;
  for (let i=0; i<house.length; i++){
    let [houseX, houseY] = house[i];
    let minDist = Infinity;
    for (let j=0; j<chicken.length; j++){
      if (!yesChicken[j]) continue; //선택받지 못한 치킨집
      let [chickenX, chickenY] = chicken[j];
      minDist = Math.min(minDist, Math.abs(houseX - chickenX)+Math.abs(houseY - chickenY));      
    }
    total+=minDist;
  }
  result = Math.min(result, total);
}

btk(0, 0);
console.log(result);