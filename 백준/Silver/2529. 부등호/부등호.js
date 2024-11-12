let fs = require('fs');
let [k,sign] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map(v => v.split(" "));

k = +k[0];

//제출용
let result = [-Infinity, Infinity];

//백트래킹 바닥조건 시 완성용.
//들어가는 숫자는 (부등호 개수+1)개.
let list = Array.from({length:k+1},()=>-1);

//숫자 사용 체크용
let visited = Array.from({length:10},()=>false);

function btk(idx){
  if (idx===(k+1)){
    let sub = list.join("");
    result[0] = +sub>result[0] ? sub : result[0];
    result[1] = +sub<result[1] ? sub : result[1];

    return;
  }

  for (let i=0; i<=9; i++){

    if (visited[i]) continue;
    if (idx===0){
      list[idx] = i;
      visited[i] = true;
      btk(idx+1);
      visited[i] = false;
    }
    if (idx>0){
      if (sign[idx-1]==='<' && list[idx-1]>=i) continue;
      else if (sign[idx-1]==='>'&& list[idx-1]<=i) continue;
      list[idx] = i;
      visited[i] = true;
      btk(idx+1);
      visited[i] = false;
    }
  }
}

btk(0);
console.log(result.join("\n"));