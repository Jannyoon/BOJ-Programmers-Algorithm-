function solution(keymap, targets) {
    //keymap의 원소는 알파벳 대문자로 이루어져 있다.
    //dp로 미리 다 저장하자..
    let str = 'A'; //A의 아스키코드 65
    let alphaPosition = Array(27).fill(Infinity); //0번 눌러야 해당 알파벳 위치 가능
    
    
    for (let idx=0; idx<keymap.length; idx++){
        let word = keymap[idx];
        for (let j=0; j<word.length; j++){
            let alpha = word[j];
            alphaPosition[alpha.charCodeAt()-64] = 
                Math.min(alphaPosition[alpha.charCodeAt()-64], j+1);
        }
    }
    
    let answer = [];
    for (let i=0; i<targets.length; i++){
        let count = 0;
        let target = targets[i];
        for (let j=0; j<target.length; j++){
            let alpha = target[j];
            count += alphaPosition[alpha.charCodeAt()-64];
            
        }
        if (count == Infinity) answer.push(-1);
        else answer.push(count);
    }
    console.log(answer);
    return answer;
}
/*
하나의 키에 여러 개의 문자가 할당될 수 있음.
키 하나에 여러 문자가 할당된 경우, 동일한 키를 연속해서 빠르게 누르면
할당된 순서대로 문자가 바뀜. => count해서 idx로 문자에 접근하도록... ['a', 'b','c']

예를 들어 1번 키에 'A', 'B', 'C' 순서대로 문자가 할당되어 있다면 1번 키를 한 번 누르면 a
두 번 누르면 b, 세 번 누르면 c

키의 개수 : 1개~최대 100개
특정 키를 눌렀을 때 입력되는 문자들도 무작위로 배열되어 있다.(!순서가 없다는 뜻..)
또, 같은 문자가 자판 전체에 여러 번 할당된 경우도 있고, (??...)
키 하나에 같은 문자가 여러 번 할당된 경우도 있다. ['a', 'd','d','a'] 이럴 수 있다는 뜻;
심지어 아예 할당되지 않은 경우도 있다.
따라서 몇몇 문자열은 작성할 수 없을 수도 있다.

indexOf를 이용하면...되겠..

*/