let fs = require('fs');
let [n,m] = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

let result = [];
let arr = Array.from({length:m},()=>0);
let visited = Array.from({length:n+1},()=>false);

function btk(idx){
  if (idx===m){
    result.push(arr.join(" "));
    return;
  }

  for (let i=1; i<=n; i++){
    if (visited[i] || i<arr[idx-1]) continue;
    arr[idx] = i;
    visited[i] = true;
    btk(idx+1);
    visited[i] = false;
  }
}

btk(0);
console.log(result.join("\n"));