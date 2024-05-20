function solution(numbers) {
    var answer = [];
    for (let i=0; i<numbers.length; i++){
        let now = numbers[i];
      
        if (now%2===0){
            answer.push(now+1);
        }
        else {
            now = now.toString(2).split("");
            let idx = now.lastIndexOf('0');
            if (idx===-1){
                now.unshift('1');
                idx = 0;
            }
            else {
                now[idx] = '1';
            }
            now[idx+1] = '0';
            answer.push(parseInt(now.join(""),2));
        }
        
    }
    
    return answer;
}
