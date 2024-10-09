//이코테-그리디 : 거스름돈
//손님에게 거슬러 주어야 할 돈 N원일 때, 동전의 최소 개수를 구하도록 할 것
//단, 거슬러 줘야 할 돈 N은 항상 10의 배수여야 함.
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let money = 1000 - Number(input);
let list = [500, 100, 50, 10, 5, 1];
let idx = 0;
let count = 0;

while(money>=1){
  if (money>=list[idx]){
    count += parseInt(money/list[idx]);
    money %= list[idx];
  }
  idx++;
}

console.log(count);
