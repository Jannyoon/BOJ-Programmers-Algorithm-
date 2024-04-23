let fs = require('fs');
let [n,k] = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
let dp = Array.from({length:100001},()=>0);
let prev= Array.from({length:100001},()=>0);


function bfs(){
  let queue = [n]; //n부터 시작해서 k까지 도달
  while(queue.length!==0){
    let now = queue.shift();

    if (now===k){
      return;
    }

    let list = [now-1, now+1, 2*now];

    for (next of list){
      if (next<0 || next>100000) continue;
      if (dp[next]===0){
        dp[next] = dp[now]+1;
        prev[next] = now;
        queue.push(next);
      }
    }
  }
}
bfs();

//console.log(dp);
//console.log(prev);


let now = k;
let ans = [k];
while(now!==n){
  now = prev[now];
  ans.push(now);
}

console.log(dp[k]);
console.log(ans.reverse().join(" "));
