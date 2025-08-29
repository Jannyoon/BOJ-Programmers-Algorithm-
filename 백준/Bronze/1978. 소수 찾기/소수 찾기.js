let fs = require('fs');
let [n, list] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

n=+n;
list = list.split(" ").map(Number).sort((a,b)=>a-b);

let ansList = new Set();
let last = list[list.length-1]

//전제: 모든 수는 소수다
let arr = Array.from({length:last+1}, ()=>true);
arr[0] = false;
arr[1] = false

for (let i=2; i<=Math.sqrt(last); i++){
  for (let j=i*i; j<=last; j+=i){
    arr[j] = false;
  }
}

for (let i=0; i<n; i++){
  if (arr[list[i]]) ansList.add(list[i])
}


console.log(ansList.size)