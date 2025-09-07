let fs = require('fs');
let [n,...input] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

n = +n;

let sizes = input[0].split(" ").map(Number);
let [t,p] = input[1].split(" ").map(Number);

//티셔츠를 T장씩 최소 몇 묶음 주문해야 하는지, 그리고 펜을 P자루씩 최대 몇 묶음 주문할 수 있고, 그 때 펜을 한 자루씩 몇 개 주문하는지 구하세요.
let shirtCnt = 0;
let penGroupCnt = 0;
let penSingleCnt = 0;

shirtCnt = sizes.reduce((prev,cur)=> prev + Math.ceil(cur/t), 0);
penGroupCnt = Math.floor(n/p);
penSingleCnt = n%p;

let ans = [
  shirtCnt, `${penGroupCnt} ${penSingleCnt}`
]
console.log(ans.join("\n"));
