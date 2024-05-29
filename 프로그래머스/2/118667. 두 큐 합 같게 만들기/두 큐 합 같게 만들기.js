function solution(queue1, queue2) {
    //queue1 = queue1.map(v=>BigInt(v));
    //queue2 = queue2.map(v=>BigInt(v));
    let a = queue1.reduce((prev,cur)=>prev+cur,0);
    let b = queue2.reduce((prev,cur)=>prev+cur,0);
    let target = (a+b)/2;
    let list = [...queue1, ...queue2, ...queue1];
    
    let left = 0;
    let right = queue1.length-1;
    let sum = a; // 처음 합산 값은 a와 동일하다
    let count = 0;
    
    while(left<=right && right<list.length){
        if (sum<target){
            right++;
            sum += list[right];
            count++;
        }
        else if (sum>target){
            sum -= list[left];
            left++;
            count++;
        }
        else break;
    }
    
    return (""+sum)==target ? count : -1;

}