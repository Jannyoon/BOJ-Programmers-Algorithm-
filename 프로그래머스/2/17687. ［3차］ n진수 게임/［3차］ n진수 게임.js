function solution(n, t, m, p) {
    let str = '';
    
    for (let i=0; i<=100001; i++){
        str += i.toString(n).toUpperCase();
    }
    
    let stack = []; //순서 체크용
    let order = 1;
    let idx = 0;
    let cnt = 0;
    let ans = [];
    
    while(cnt<t){
        stack.push(str[idx++]); //일단 넣기
        if (order===p){
            ans.push(stack.pop());
            cnt++;
        }
        order++;
        
        if (order>m){
            order = 1;
        }        
    }
    //nsole.log(ans);
    return ans.join("")
}