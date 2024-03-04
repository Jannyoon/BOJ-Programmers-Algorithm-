function solution(s)
{
    let stack = [];
    let idx = 0;
    while(idx<s.length){
        if (stack.length===0 || stack[stack.length-1]!==s[idx]){
            stack.push(s[idx++]); //push와 동시에 idx+
        }
        else if (stack[stack.length-1]===s[idx]){
            stack.pop();
            idx++;
        }
    }
    
    return stack.length===0 ? 1 : 0;
}
/*
짝지어 제거하기. 알파벳 소문자로 이루어진 문자열을 가지고 시작한다.
먼저 문자열에서 같은 알파벳이 2개 붙어있는 짝을 찾는다. => stack

(1)Stack에 아무것도 없을 경우 일단 쌓는다.
(2)stack의 top과 다를 경우 push 한다.
(3)stack의 top과 같을 경우 이미 있는 stack pop하고 다음 idx로 넘겨버린다.
(4)O(n)으로 idx를 전부 돌고 나서 stack에 남아있는 문자열이 없으면 return 1, else return 0;
*/