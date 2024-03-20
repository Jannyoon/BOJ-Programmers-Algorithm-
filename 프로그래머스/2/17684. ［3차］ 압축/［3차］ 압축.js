function solution(msg) {
    let alpha = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(""); //저장 배열
    let idx = 0;
    let result = [];
    
    while(idx<msg.length){
        let str = '';
        str += msg[idx];
        while (alpha.indexOf(str+msg[idx+1])!==-1){ //현재 문자열에 다음 문자를 포함한 게 배열에 존재하지 않을 때까지
            idx++;
            str+=msg[idx];
        }
        //console.log(str);
        result.push(alpha.indexOf(str));
        alpha.push(str+msg[idx+1]);
        idx++;  
    }
    return result;
  
    //let str = 'A';  A의 아스키 코드 값 65
    //console.log(str.charCodeAt())
    //console.log(String.fromCharCode(65));
}

/*
메시지를 압축하여 전송 효율을 높이는 업무.
메시지를 압축하더라도 전달되는 정보가 바뀌어선 안됨.
압축 전의 정보를 완벽하게 복원 가능한 무손실 압축 알고리즘을 구현.


LZW
1. 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다. 
2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 W를 찾는다.

*/