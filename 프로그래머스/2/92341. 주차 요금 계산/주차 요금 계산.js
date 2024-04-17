function solution(fees, records) {
    var answer = [];
    let InVisited = Array.from({length:10000},()=>false); //들어온 차량 번호를 확인하는 용. 이진수로 처리하자.

    let carsFee = new Map(); //입출차 기록용
    let forRecord = new Map(); //각각의 차량 전체 긹
    let end = 23*60+59; //마지노선
    
    records = records.map((v)=>v.split(" "));
    for (let i=0; i<records.length; i++){
        let [time, number, word] = records[i];
        number = +number;
        time = time.split(":").map(Number);
        time = time[0]*60+time[1];
        
        if (word==='IN'){
            InVisited[number] = true;
            if (!forRecord.has(number)) forRecord.set(number,0);
            carsFee.set(number, time); 
        }
        else {
            InVisited[number] = false;
            let val = carsFee.get(number); //들어온 시간
            let diff = time - val;
            let prevTime = forRecord.get(number);
            forRecord.set(number, prevTime+diff);            
        }
    }
    
    for (let i=0; i<10000; i++){
        if (InVisited[i]){
            let val = carsFee.get(i); //들어온 시간
            let diff = end-val;
            let prevTime = forRecord.get(i);
            forRecord.set(i, prevTime+diff);
        }
    }
      
    //번호, 총 주차시간
    forRecord = [...forRecord];
    
    //fees : 기본시간, 기본 요금, 단위 시간, 단위 요금
    forRecord = forRecord.map((v)=>{
        let time = v[1];
        if (time<fees[0]) return [v[0], fees[1]];
        else {
            return [v[0], fees[1]+Math.ceil((time-fees[0])/fees[2])*fees[3]];
        }
    })

    forRecord.sort((a,b)=>a[0]-b[0]);
    for (let i=0; i<forRecord.length; i++){
        answer.push(forRecord[i][1]);
    }
   
    return answer;
}
/*
fees : 기본시간, 기본 요금, 단위 시간, 단위 요금
records : 시각(시:분), 차량 번호, 내역 .split(" ")로 배열로 저장한다.

*/
/*
입차, 출차는 Map()으로
누적 주차시간 요금은 Set()

누적 주차 시간이 기본 시간 이하라면, 기본 요금을 청구합니다.
누적 주차 시간이 기본 시간을 초과하면, 기본 요금에 더해서,
초과한 시간에 대해서 단위 시간마다 단위 요금을 청구합니다.

초과한 시간이 단위 시간으로 나누어 떨어지지 않으면, 올림합니다.
아아아아아아악!!!!!

*/