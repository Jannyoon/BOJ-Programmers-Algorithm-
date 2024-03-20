function solution(numbers) {
    let list = new Set();
    numbers = numbers.split("");
    
    for (let len=1; len<=numbers.length; len++){
        let visited = Array.from({length:numbers.length},()=>false);
        btk(0,"", len, visited);   
    }
    
    function btk(n, now, end, visited){
        if (n === end){
            list.add(+now);
            return;
        }
        for (let i=0; i<numbers.length; i++){
            if (visited[i]) continue;
            visited[i] = true;
            btk(n+1, now+numbers[i], end, visited);
            visited[i] = false;
        }
    }
    
    let count = 0;
    for (let val of list){
        if (checkPrimeNumber(val)) count++;
    }
    

    return (count);

}


function checkPrimeNumber(n){
    if (n===0 || n===1) return false;
    for (let i=2; i<=Math.sqrt(n); i++){
        if (n%i===0) return false;
    }
    return true
}