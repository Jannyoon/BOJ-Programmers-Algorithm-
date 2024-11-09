let fs = require('fs');
let [nm, input] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map(v => v.split(" ").map(Number));

//n개의 숫자 중 m개를 뽑아낸다.
input = input.sort((a,b)=>a-b);
let [n,m] = nm;
let visited = Array.from({length:n},()=>false);
let result = new Set();
let numList = [];

btk(0);

function btk(selectedNum){
  if (selectedNum===m){
    result.add(numList.join(" "));
    return;
  }

  for (let i=0; i<n; i++){
    if (visited[i]) continue;
    visited[i] = true;
    numList.push(input[i]);
    btk(selectedNum+1);
    visited[i] = false;  
    numList.pop();  
  }
}

result = [...result];
console.log(result.join("\n"));
