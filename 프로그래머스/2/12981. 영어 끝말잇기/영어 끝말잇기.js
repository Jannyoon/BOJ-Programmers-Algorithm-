function solution(n, words) {
    var answer = [];
    let lastAlpha = words[0][0];
    
    let turn = 1; //첫번째 턴부터 시작
    let person = 1; //1번부터 시작한다.
    let a = new Set(); //답 목록 적는 용
    
    let flag = false; //탈락자가 생겼는가? 마지막까지 false이면 [0,0] return 한다.0
    let idx = 0;
    
/*
    3. 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 한다. (문자열 판별)
    4. 이전에 등장했던 단어는 사용할 수 없음.(Set has 판별)
    5. 한 글자인 단어는 인정되지 않습니다.
*/
    while(idx<words.length){
        let nowWord = words[idx++];
         //console.log(lastAlpha, turn, person);
        if (nowWord.length>0 &&
           nowWord[0]===lastAlpha &&
            !a.has(nowWord)
           ){
            a.add(nowWord);
            lastAlpha = nowWord[nowWord.length-1];
            person++;
        }
        else return [person, turn];
        if (person>n){
            turn++;
            person = 1;
        }   
    }
   
    return [0,0];
}
/*
new Set()을 사용해서 has로 판별.
1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말한다.
마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작한다.(while에서 1로 다시 돌려주는 로직 작성.)
3. 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 한다. (문자열 판별)
4. 이전에 등장했던 단어는 사용할 수 없음.(Set has 판별)
5. 한 글자인 단어는 인정되지 않습니다.

가장 먼저 탈락하는 사람의 번호. 그 사람이 자신의 몇 번째 차례에 탈락하는지를 구해서 return
몇 번째 차례인지는 모두가 안고 가는 숫자이다.
*/