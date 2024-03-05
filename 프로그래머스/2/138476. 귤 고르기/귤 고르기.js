function solution(k, tangerine) {
    let map = new Map();
    for (let i=0; i<tangerine.length; i++){
        if (!map.has(tangerine[i])){
            map.set(tangerine[i], 1);
        }
        else {
            let count = map.get(tangerine[i]);
            map.set(tangerine[i], count+1);
        }
    }
    //[해당 원소, 원소의 갯수]로 저장이 된다.
    map = [...map];
    map.sort((a,b)=>{
        if (a[1]===b[1]) return a[0]-b[0];
        else return b[1]-a[1]; //원소 갯수 내림차순
    });
    
    let kind = 0;
    let sum = 0;
    let idx = 0;
    while(sum<k){
        sum += map[idx][1];
        kind++;
        idx++;
    }
    return kind;
}
/*
과수원에서 귤을 수확했다.
수확한 귤 중 'k개'를 골라 상자 하나에 담을 거다.
수확한 귤의 크기가 일정하지 않아, 보기에 좋지 않다고 생각했다.
귤을 크기별로 분류했을 때 서로 다른 종류의 수를 최소화하고 싶다?
=>개수 같은 것이 가장 많은 순으로 정렬
=>개수가 같으면 숫자 적은 순으로 정렬.

=>종류의 수 : kind 변수로 +1씩 늘어나도록 설정한다.


경화가 수확한 귤 8개의 크기가 ...그렇다...
정렬이 필요하다?

[1,3,2,5,4,5,2,3] => [1,2,2,3,3,4,5,5]
*/