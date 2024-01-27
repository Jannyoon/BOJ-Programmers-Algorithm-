function solution(ingredient) {
    //1 : 빵, 2: 야채, 3: 고기, 1 : 빵
    let wait = [];
    let success = [];
    let count = 0;
    
    let hamburger = [1,2,3,1];
    let hidx = 0;
    let inIdx = 0;
   //거꾸로 stack..
    while(inIdx<ingredient.length){
        //console.log(wait);
        if (wait.length<3){
            wait.push(ingredient[inIdx++]);
            continue;
        }
        else {
            if (ingredient[inIdx]!==1){
                wait.push(ingredient[inIdx++]);
                continue;
            }
            let list = [3,2,1];
            let flag = true;
            let lastwaitIdx = wait.length-1;
            
            for (let i=0; i<3; i++){
                if (wait[lastwaitIdx-i]!==list[i]){
                    flag = false;
                    break;
                }                
            }
            if (flag===true){
                for (let i=0; i<3; i++){
                    wait.pop();
                }
                
                count++;
                inIdx++;
            }
            else {
                wait.push(ingredient[inIdx++]);
            }
        }
        
    }
    return (count);
}

/*
스택을 거꾸로 확인한다고 생각한다.
현재 idx를 기준으로
이미 쌓여져 있는 대기열을 거꾸로 확인한다.
*/
