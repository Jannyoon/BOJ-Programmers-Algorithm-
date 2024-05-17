function solution(number, k) {
    let stack = [];
    
    for (let i=0; i<number.length; i++){
        let now = number[i];
        
        while(k>0 && stack.length!==0 && stack.at(-1)<now){
            stack.pop();
            k--;
        }
        
        stack.push(now);
    }
    
    while(k>0){
        stack.pop();
        k--;
    }
    
    return stack.join("")
    
}