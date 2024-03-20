function solution(numbers) {
    let stack = [];
    let arr = Array.from({length:numbers.length},()=>-1);
    
    for (let i=0; i<numbers.length; i++){
        while (stack.length>0 && numbers[stack.at(-1)]<numbers[i]){
            arr[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }
    
    return arr;
}