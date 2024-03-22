function solution(word) {
    let answer = [];
    let words = ['A', 'E', 'I', 'O', 'U']
    for (let len=1; len<=5; len++){
        let arr = [];
        btk(0, len, arr);
    }
    
    function btk(count, len, arr){
        if (count===len){
            answer.push(arr.join(""));
            return;
        }
        
        for (let i=0; i<words.length; i++){
            arr[count] = words[i];
            btk(count+1, len, arr);
        }
    }
    answer.sort();
    return (answer.indexOf(word)+1);
}

