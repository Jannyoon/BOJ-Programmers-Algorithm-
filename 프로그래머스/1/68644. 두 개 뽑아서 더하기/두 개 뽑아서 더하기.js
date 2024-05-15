function solution(numbers) {
    let answer = new Set();
    
    for (let i=0; i<numbers.length-1; i++){
        for (let j=i+1; j<numbers.length; j++){
            let sum = numbers[i] + numbers[j];
            answer.add(sum);
        }
    }
    return [...answer].sort((a,b)=>a-b);
}