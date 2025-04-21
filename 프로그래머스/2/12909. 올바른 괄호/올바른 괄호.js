function solution(s){
    s = s.split("");
    console.log(s);
    let idx=0;
    let stack = [];
    
    while(idx<s.length){
        let str = s[idx];
        if (str==='('){
            stack.push(str);
            idx++;
        } else { //str===')'
            if (idx===0) return false;
            
            const top = stack[stack.length-1];
            if (top==='('){
                stack.pop();
                idx++;
            } else return false;
        }
    }
    
    if (stack.length!==0) return false;
    return true;

}

/*


*/