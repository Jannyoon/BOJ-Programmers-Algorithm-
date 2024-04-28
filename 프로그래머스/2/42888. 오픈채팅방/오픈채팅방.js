function solution(record) {
    let info = new Map();
    let answer = [];
    
    for (let i=0; i<record.length; i++){
        let now = record[i].split(" ");
        let order = now[0];
        let userId = now[1];
        
        if (order==='Enter'){
            //들어오면서 새 닉네임으로 바꾸는 경우가 있다.
            info.set(userId, now[2]); //now[2]가 닉네임이다.
             
            let nickName = info.get(userId);
            answer.push(`${userId}님이 들어왔습니다.`);
        }
        else if (order==='Change'){
            info.set(userId, now[2]);
        }
        else {
            let nickName = info.get(userId);
            answer.push(`${userId}님이 나갔습니다.`);
            //info.delete(userId);
        }
        
    }
    
    answer = answer.map((v)=>{
        let nowStr = v.split("님이 ");
        let userId = nowStr[0];
        let nickName = info.get(userId);
        return `${nickName}님이 ${nowStr[1]}`;
        
    })
    //var answer = [];
    //console.log(info)
    return answer;
}

/*
카카오톡 오픈채팅방에서는 친구가 아닌 사람들과 대화를 할 수 있는데, 본래 닉네임이 아닌 가상의 닉네임을 사용해
채팅방에 들어갈 수 있다.

신입사원인 김크루. 카카오톡 오픈 채팅방을 개설한 사람을 위해, 다양한 사람들이 들어오고, 나가는 것을 지켜볼 수 있는
관리자창을 만들기로 했다. 채팅방에 누군가 들어오면 다음 메시지가 출력된다.

"[닉네임]님이 들어왔습니다.""

채팅방에서 누군가 나가면 다음 메시지가 출력된다.

"[닉네임]님이 나갔습니다."

채팅방을 나간 후, 새로운 닉네임으로 다시 들어간다.
채팅방에서 닉네임을 변경한다.

닉네임을 변경할 때는 기존에 채팅방에 출력되어 있던 메시지의 닉네임도 전부 변경된다.


!중복 닉네임을 허용한다!

현재 채팅방에는 Prodo라는 닉네임을 사용하는 사람이 두 명 있음.
두 번째로 들어왔던 Prodo가 Ryan으로 닉네임 변경하면 저렇게 변경된다..

채팅방에 들어오고 나가거나, 닉네임을 변경한 기록이 담긴 문자열 배열 record가 매개변수로 주어질 때,
모든 기록이 처리된 후, 최종적으로 방을 개설한 사람이 보게 되는 메시지를 문자열 배열 형태로
return 하도록 solution 함수를 완성하라.


record는 다음과 같은 문자열이 담긴 배열이며, 길이는 1이상 100000이하이다.
다음은 record에 담긴 문자열에 대한 설명이다.
모든 유저는 [유저 아이디]로 구분한다.
[유저 아이디] 사용자가 [닉네임]으로 채팅방에 입장 - "Enter [유저 아이디] [닉네임]" (ex. "Enter uid1234 Muzi")
[유저 아이디] 사용자가 닉네임을 [닉네임]으로 변경 - "Change [유저 아이디] [닉네임]" (ex. "Change uid1234 Muzi)

첫 단어는 Enter, Leave, Change 중 하나이다.
각 단어는 공백으로 구분되어 있으며, 알파벳 대문자, 소문자, 숫자로만 이루어져 있다.
유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다.
유저 아이디와 닉네임의 길이는 1이상 10이하이다.
채팅방에서 나간 유저가 닉네임을 변경하는 등 잘못된 입력은 주어지지 않는다.

"*/