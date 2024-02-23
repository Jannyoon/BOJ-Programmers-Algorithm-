function solution(price, money, count) {
    let sum = 0;
    for (let i=1; i<=count; i++){
        sum += (price*i);
    }

    return (sum-money>0) ? sum-money : 0;
}
/*
새로 생긴 놀이기구..이용료..price
놀이기구를 N번째 이용하면 원래 이용료의 N배를 받기로 함.
매 회차마다 갱신된다.
O(N)으로 해결가능.
for문 돌리면서 x*1 + x*2 + x*3 식으로 되도록...

sum-money>0 : 모자란 것. return (sum-money)
sum-money<=0 : 모자라지 않은 것 . return 0

*/