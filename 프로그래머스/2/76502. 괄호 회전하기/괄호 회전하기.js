function solution(s) {
    let arr = (s+s).split("");
    arr.pop();
    let count = 0;
    
    //왼쪽으로 회전 구현
    for (let i=0; i<s.length; i++){
        let startIdx = i;
        let target = arr.slice(startIdx, startIdx+s.length);

        if (stackTest(target)) count++; 
    }

    return count;
}

function stackTest(arr){
    let stack = [];
    let idx = 0;
    
    let left = ['(', '[', '{'];
    let right = [')', ']', '}'];
    while(idx<arr.length){
        if (arr[idx]==='(' || arr[idx]==='[' || arr[idx]==='{'){
            stack.push(arr[idx]);
            idx++;
        }
        else if (right.includes(arr[idx])){
            if (stack.length!==0 
                && left.indexOf(stack[stack.length-1])===right.indexOf(arr[idx])){
                stack.pop();
                idx++;
            }
            else return false;
        }

    }
    
    return stack.length===0 ? true : false;
}

/*
짝을 찾는 스택.
left = ['(', '[', '{'];
indexOf()로 하지말고 비교문 자체에서 문자열 비교를 하게 만들어 O(1) 처리하기.
*/

/*
s의 길이만큼 무조건 돌린다.
그 과정에서 짝이 적절히 떨어질 때마다 count+1을 하라는 뜻.
*/