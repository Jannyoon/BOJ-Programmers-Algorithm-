function solution(s, n) {
    var answer = '';
    let alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy';
    
    
    for (let i=0; i<s.length; i++){
        if (s[i]===" "){
            answer+= " "
            continue;
        }
        
        let wIdx = alpha.indexOf(s[i].toLowerCase());
        let st = alpha[wIdx+n];
        if (alpha[wIdx]!==s[i]){
            st = st.toUpperCase();
        }
        answer += st;
    }
    return answer;
}