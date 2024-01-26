function solution(participant, completion) {
   //map으로 찾아보자
    let particiMap = new Map();
    for (let i=0; i<participant.length; i++){
        let name = participant[i];
        if (!particiMap.has(name)) particiMap.set(name, 1);
        else {
            let count = particiMap.get(name);
            particiMap.set(name, count+1);
        }
    }
    
    let compMap = new Map();
    for (let i=0; i<completion.length; i++){
        let name = completion[i];
        if (!compMap.has(name)) compMap.set(name, 1);
        else {
            let count = compMap.get(name);
            compMap.set(name, count+1);
        }
    }
    
    for (let i=0; i<participant.length; i++){
        let name = participant[i];
        if (particiMap.get(name)!==compMap.get(name)) return name;
    }
}

/*
단 한명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였다...
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열
completion이 주어진다.
완주하지 못한 선수의 이름을 return하도록 solution 함수를 작성하라.
*/
//마라톤 경기에 참여한 선수의 수는 100000 //O(N^2) 불가..
