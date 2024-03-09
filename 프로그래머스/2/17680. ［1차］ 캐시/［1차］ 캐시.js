function solution(cacheSize, cities) {
    let cache = [];
    let total = 0;
    cities = cities.map((v)=>v.toUpperCase());
    for (let i=0; i<cities.length; i++){
        let idx = cache.indexOf(cities[i]);
        if (idx!==-1){ //캐시 내에 이미 존재하는 Cache Hit : 1
            let val = cache.splice(idx,1)[0];
            cache.unshift(val);
            total+=1;
        }
        else { //Cache Miss : 5
            cache.unshift(cities[i]);
            if (cache.length>cacheSize) cache.pop();
            total+=5;
        }

    }

    return total;
}
/*
캐시크기만큼 캐시를 넣을 수 있는 빈배열을 생성.
돌면서 length에 제한을 두는 방식으로 한다.
for문으로 도시이름들을 탐색하게 된다.
*/