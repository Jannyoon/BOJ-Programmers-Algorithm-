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
1. 대기열이 없을 때 : ingredient에서 바로 비교
1-1 : 같을 때 -> while로 확인한다
1-2 : 다를 때 -> 바로 넘어간다(다음 inIdx++)

2. 대기열이 있을 때 : pop()을 확인한다


*/
/*
햄버거 포장.
다른 직원이 햄버거에 들어갈 재료를 조리.
조리된 순서대로 상수의 앞에 아래서부터 위로 쌓이게 된다. => queue?
상수는 순서에 맞게 쌓여서 완성된 햄버거를 따로 옮겨 포장을 하게 된다.

정해진 순서(빵 - 야채 - 고기 - 빵)로 쌓인 햄버거만!! 포장을 합니다.
상수는 손이 굉장히 빠르기 때문에 상수가 포장하는 동안 속 재료가 추가적으로 들어오는 일은 없다.
재료의 높이는 무시하여 재료가 높이 쌓여서 일이 힘들어지는 경우는 없다. => 재료가 높이 들어온다...

문자열 폭발같네.......
스택...

*/