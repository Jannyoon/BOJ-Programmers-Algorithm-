let fs = require('fs');
let [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
n = +n;
input = input.map(v => v.split(" ").map(Number));
input.sort((a,b)=>{
  if (a[0]==b[0]) return a[1]-b[1];
  return a[0]-b[0];
})

let result = 0;
let last = -Infinity;

for (let i=0; i<n; i++){
  let [nowFirst, nowLast] = input[i];
  if (nowFirst>last){
    result+=(nowLast-nowFirst);
    last = nowLast;
  }
  else if (nowLast>last && nowFirst<=last){
    result+=(nowLast-last);
    last = nowLast;
  }
}

console.log(result);