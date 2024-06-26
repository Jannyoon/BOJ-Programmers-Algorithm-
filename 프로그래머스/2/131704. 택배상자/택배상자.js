function solution(order) {

    let count = 0;
    let stack = [];
    
    let now = 1;    
    let idx = 0;    
    
    let flag = false;
    while(!flag && idx<order.length){
        let first = order[idx];
        console.log(first);
        for (let i=now; i<=first; i++){
            stack.push(i);
        }
        now = first+1;
        
        while(stack.length>0){
            if (stack[stack.length-1]!==order[idx]){
                flag = true;
                break;
            }
            stack.pop();
            idx++;
            count++;
        }
        
    }
    console.log(count);
    return count;
}
/*
영재는 택배상자를 트럭에 싣는 일.
택배상자는 크기가 모두 같음.
1번~ n번 상자까지 번호가 증가하는 순서대로 컨테이너 벨트에 일렬로 놓여 영재에게 전달됩니다.
컨테이너 벨트는 한 방향으로만 진행이 가능해서
벨트에 놓인 순서대로(1번 상자부터) 상자를 내릴 수 있습니다

하지만 컨테이너 벨트에 놓인 순서대로 택배상자를 내려 바로 트럭에 싣게 되면
택배 기사님이 배달하는 순서와, 택배상자가 실려 있는 순서가 맞지 않는다.
배달에 차질이 생긴다.
그래서 택배 기사님이 미리 알려준 순서에 맞게 영재가 택배상자를 실어야 합니다.

맨 앞에 놓인 상자가 현재 트럭에 실어야 하는 순서가 아니라면 그 상자를 될 때까지 보관 필요.(스택)
가장 마지막에 보조 컨테이너 벨트에 보관한 상자부터 꺼내게 됩니다.
보조 컨테이너 벨트를 이용해도 기사님이 원하는 순서대로 상자를 싣지 못한다면 더 이상 상자를 싣지 않습니다.

예를 들어, 영재가 5개의 상자를 실어야 하며 택배 기사님이 알려준 순서가
기존의 컨테이너 벨트에 4,3,1,2,5인 경우

어라?

1번부터 순서대로 쌓는다.


*/