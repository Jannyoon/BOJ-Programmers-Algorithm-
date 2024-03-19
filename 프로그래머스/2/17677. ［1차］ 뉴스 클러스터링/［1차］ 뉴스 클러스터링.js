function solution(str1, str2) {
    let one = arrCheck(str1);
    let two = arrCheck(str2);

    if (one.length===0 && two.length===0) return 65536;
    let oneMap = new Map();
    let twoMap = new Map();
    
    //str1의 요소의 중복 갯수 세기
    for (let i=0; i<one.length; i++){
        if (!oneMap.has(one[i])){
            oneMap.set(one[i],1);
        }
        else {
            let count = oneMap.get(one[i]);
            oneMap.set(one[i],count+1);
        }        
    }
    
    //str2의 요소의 중복 갯수 세기
    for (let i=0; i<two.length; i++){
        if (!twoMap.has(two[i])){
            twoMap.set(two[i],1);
        }
        else {
            let count = twoMap.get(two[i]);
            twoMap.set(two[i],count+1);
        }        
    }
    
    let cross = 0;
    let sum = 0;
    
    for (let [key, val] of oneMap){
        if (twoMap.has(key)){
            let oneVal = val;
            let twoVal = twoMap.get(key);
            cross += (oneVal<twoVal ? oneVal : twoVal);
            twoMap.set(key, Math.max(oneVal, twoVal));
        }
        else twoMap.set(key,val);
    }
    
    for (let [key, val] of twoMap){
        sum += val;
    }
  
    var answer = 0;
    return Math.floor(cross/sum * 65536);
}

function arrCheck(words){
    let arr = [];
    let idx = 0;
    while(idx<words.length-1){
        let str = '';
        let cnt = 0;
        let flag = false;
        let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        let a = words[idx].toUpperCase();
        if (alpha.includes(a)){
            str+=a;
        } else flag = true;
        
        let b = words[idx+1].toUpperCase();
        if (alpha.includes(b)){
            str+=b;
        }
        else flag = true;
        

            
        if (!flag) arr.push(str);
        idx++;
    }
    
    return arr;
}
/*
개선하는 업무.
개발의 방향을 잡기 위해 튜브는 우선 최근 화제가 되고 있는 카카오 신입 개발자 공채.
블라인드 방식...
코딩 실력만 본다....
어쩌고...
기사의 제목을 기준으로
"블라인드 전형"에 주목하는 기사와
"코딩 테스트"에 주목하는 기사로 나뉨.

각각 묶어서 보여주자?
유사한 기사를 묶는 기준을 정하기 위해서 논문과 자료를 조사하던 튜브.


자카드 유사도 : 집합 간의 유사도를 검사하는 여러 방법 중의 하나
두 집합 a.b 사이의 자카드 유사도 J(A,B)는 두 집합의 교집합 크기를 
두 집합의 합집합 크기로 나눈 값으로 정의

A와 B모두 공집합일 경우 따로 J(A,B)=1


*/