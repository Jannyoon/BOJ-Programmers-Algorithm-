//map 사용
function solution(clothes) {
    let a ={};
    
    let map = new Map();
    for (let i=0; i<clothes.length; i++){
        let [content, kind] = clothes[i];
        
        if (!map.has(kind)){
            map.set(kind, 1);
        }
        else {
            let cnt = map.get(kind);
            map.set(kind, cnt+1);
        }
    }
    //console.log(map);
    
    map = [...map];
    //console.log(map);
    /*
        부분집합의 경우의 수를 생각하자
    */
    let sum = 1;
    for (let i=0; i<map.length; i++){
        sum *= (map[i][1]+1)
    }
    return sum-1;
}
/*
코니는 매일 다른 옷을 조합하여 입는 것을 좋아합니다.
오늘 코니가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 
다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스
*/
/*
각 종류별로 최대 1가지 의상.
예를 들어 위 예시의 경우 동그란 안경과 검정 선글라스를 동시에 착용할 수 없다.
착용한 의상의 일부가 겹치더라도, 다른 의상이 겹치지 않거나, 
혹은 의상을 추가로 더 착용한 경우에는 서로 다른 방법으로 옷을 착용한 것으로 계산합니다.
(배열의 일치 불일치 여부를 따지나..)

코니는 하루에 최소 한 개의 의상은 입습니다..
*/