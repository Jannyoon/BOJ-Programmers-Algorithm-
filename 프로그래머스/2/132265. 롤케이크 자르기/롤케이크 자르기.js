function solution(topping) {
    //map으로 풀자
    let count = 0;
    
    let a = new Map();
    a.set(topping[0],1);
    let akind = 1;
    
    let b = new Map();
    let bkind = 0;

    for (let i=1; i<topping.length; i++){
        if (!b.has(topping[i])){
            b.set(topping[i],1);
            bkind++;
        } else {
            let val = b.get(topping[i]);
            b.set(topping[i], val+1);
        }        
    }
    
    if (akind===bkind) count++; //초기상태
    
    for (let idx=1; idx<topping.length; idx++){
        let number = topping[idx];
        
        if (!a.has(number)){
            akind++;
            a.set(number,1);
        } else {
            let cnt = a.get(number);
            a.set(number, cnt+1);
        }
        
        if (b.get(number)===1){
            bkind--;
            b.set(number,0);
        } else {
            let val = b.get(number);
            b.set(number, val-1);
        }
        
        if (akind===bkind) count++;
    }
    //console.log(a,b, akind, bkind);

    
    return count;
}

/*
철수는 롤케이크를 두 조각으로 잘라서 동생과 한 조각씩 나눠 먹으려고 합니다.
이 롤케이크에는 여러가지 토핑들이 일렬로 올려져 있습니다.
철수와 동생은 롤케이크를 공평하게 나눠먹으려 하는데, 그들은 롤케이크의 크기보다 롤케이크 위에 올려진 토핑들의 종류에
더 관심이 많습니다.
그래서 잘린 조각들의 크기와 올려진 토핑의 개수와 상관없이 각 조각에 동일한 가짓수의 토핑이 올라가면 공평하게
롤케이크가 나누어진 것으로 생각합니다.

예를 들어, 롤케이크에 4가지 종류의 토핑이 올려져 있다고 합시다.
토핑들을 1,2,3,4와 같이 번호로 표시했을 때, 케이크 위에 토핑들이 [1,2,1,3,1,4,1,2] 순서로 올려져 있습니다.
만약 세 번째 토핑(1)과 네 번째 토핑(3) 사이를 자르면 롤케이크의 토핑은 [1,2,1], [3,1,4,1,2]로 나뉘게 됩니다.

만약 롤케이크의 네 번째 토핑(3)과 



*/