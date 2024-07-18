function solution(s){
    var answer = true;
    let idx=0;
    let stack = []; //'('가 쌓일 용
    while(idx<s.length){
        while(s[idx]==='('){
            stack.push(s[idx++]);
        } 
        //while이 끝난 경우 
        //1)모든 s요소가 '('일 때
        //2) ')'를 만났을 때
        if (s[idx]===')'){
            if (stack.length>0 && stack[stack.length-1]==='('){
                stack.pop();
                idx++;
            }
            else return false;
        }  
    }
    if (stack.length>0) return false;
    else return true;
}