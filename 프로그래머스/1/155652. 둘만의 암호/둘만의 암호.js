function solution(s, skip, index) {
    let alphaStr = 'abcdefghijklmnopqrstuvwxyz'
    console.log(alphaStr.length)
    let canCount = Array(26).fill(true);
    
    for (let i=0; i<skip.length; i++){
        let alpha = skip[i];
        canCount[alphaStr.indexOf(alpha)] = false;
    }

    let answer = [];
    let sStr = s.split("");
    for (let j=0; j<s.length; j++){
        let alpha = s[j];
        let nowIdx = alphaStr.indexOf(alpha);
        answer.push(findAlpha(nowIdx))
    }
    
    function findAlpha(nowIdx){
        let count = 0;
        let nextIdx = nowIdx;
        while(count<index){
            if (!canCount[(nextIdx+1)%26]){
                nextIdx++;
            }
            else {
                count++;
                nextIdx++;
            }
        }
        return (alphaStr[nextIdx%26])
    }
    
    return answer.join("")
}

