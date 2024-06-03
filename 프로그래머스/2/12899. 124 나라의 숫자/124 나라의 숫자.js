
function solution(n) {
  
    let ans = dfs(n);
    return ans;
    
}


function dfs(n){        
    let list = ['4', '1', '2'];
    if (n===0 || n===1 || n===2){
        //나머지가 들어오게 될 것..

        return list[n];
    }
    if (n<=3) return list[n%3];
    if (n%3===0 && n>3){
        return dfs(parseInt(n/3)-1)+"4";
    }
    else return dfs(parseInt(n/3)) + n%3;
}

/*
124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현

1. 124나라에는 자연수만 존재합니다.
2. 124 나라에는 모든 수를 표현할 때 1,2,4만 사용합니다.
*/