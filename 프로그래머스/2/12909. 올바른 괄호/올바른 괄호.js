function solution(s){
    s = s.split("");
    let idx = 0;
    let stack = [];
    while(idx<s.length){
        if (s[idx]==='(') stack.push('(');
        else {
            if (stack[stack.length-1]==='(') stack.pop();
            else return false;
        }
        idx++;
    }
    
    console.log(stack);
    return stack.length===0;
}

/*
stack에 남아있는 것이 없어야 한다.
(일 경우 push
)일 경우 stack의 top이 (이면 pop. 아니면 break
*/