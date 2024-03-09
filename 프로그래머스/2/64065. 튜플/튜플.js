function solution(s) {
    let str = s.slice(2, -2).split("},{")
    .map(v=>v.split(",").map(Number))
    .sort((a,b)=>a.length-b.length);
    console.log(str);
    
    let ans = [];
    for (let i=0; i<str.length; i++){
        let arr = str[i];
        for (let j=0; j<arr.length; j++){
            if (ans.indexOf(arr[j])===-1) ans.push(arr[j]);
        }
    }
    
    return ans;
}
/*
셀 수 있는 수량의 순서있는 열거...
n개의 요소를 가진 튜플을 n-튜플

1. 중복된 원소가 있을 수 있다.
2. 원소에 정해진 순서가 있으며 원소의 순서가 다르면 서로 다른 튜플
3. 튜플의 원소 개수는 유한하다.

원소의 개수가 n개이고, 중복되는 원소가 없는 튜플(a1, a2, a3, .... an)이 주어질 때


//튜플을 구하는 게 목적인가?

튜플이 (2,1,3,4)인 경우
(2) (2,1), (2,1,3), (2,1,3,4) 
이렇게 될 수 있다.

원소의 순서가 바뀌어도 상관이 없다!

*/