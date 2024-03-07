function solution(n, left, right) {
    left = left+1;
    right = right+1;
    let answer = [];
    for (let idx=left; idx<=right; idx++){
        let row = Math.ceil(idx/n)
        let col = idx%n===0 ? n : idx%n;
        
        answer.push(row>col ? row : col);
    }
    
    return answer;
}