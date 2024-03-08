/*queue.shift()를 사용해야 하는 상황*/

function solution(progresses, speeds) {
    let answer = [];
    
    let idx = 0;
    while(progresses.length!==0){
        //console.log("now:", progresses[0]);
        let count = 0;
        while(progresses[0]>=100){
            progresses.shift();
            speeds.shift();
            count++;
        }
        
        for (let i=0; i<progresses.length; i++){
            progresses[i]+=speeds[i];
        }
        
        if (count!==0) answer.push(count);

    }
    return answer;
}

/*
프로그래머스 팀에서 기능 개선 작업 수행 중.
각 기능은 진도가 100%일 때 서비스에 반영할 수 있음.

또, 각 기능의 개발 속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다
먼저 개발될 수 있고,
이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다?
=>개발 속도가 뒤에 것이 먼저 완성될 경우,
=>앞에 있는 기능 배포되면 그 때 같이 배포된다.

먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와
//배포 순서... (queue)?
//작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때
//각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 내ㅣㅕ샤ㅐㅜ gkatnfmf dhkstjdgktpdy.
*/