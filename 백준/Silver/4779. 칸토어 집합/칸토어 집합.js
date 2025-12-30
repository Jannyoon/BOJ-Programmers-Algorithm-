let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

let result = []
for (let i=0; i<input.length; i++){
    let num = Math.pow(3, input[i]);
    if (num === 1) result.push('-');
    else {
        let count = Math.floor(num/3)
        let startIdx = [0, count-1]
        let midIdx = [count, 2*count-1]
        let endIdx = [2*count, num-1]

        let answer = recursive('line', startIdx[0], startIdx[1])
                    + recursive('blank', midIdx[0], midIdx[1])
                    + recursive('line', endIdx[0], endIdx[1])
        result.push(answer)
    }  
}


function recursive(state, start, end){
    let count = Math.floor((end-start+1)/3)

    let startIdx = [start, start+count-1]
    let midIdx = [start+count, start+2*count-1]
    let endIdx = [start+2*count, end]

    if (state==='line' && (start === end)) return '-'
    else if (state==='blank' && (start === end)) return ' '

    if (state==='line'){
        return ''+recursive('line', startIdx[0], startIdx[1])
            + recursive('blank', midIdx[0], midIdx[1])
            + recursive('line', endIdx[0], endIdx[1])

    } else {
        return ''+recursive('blank', startIdx[0], startIdx[1])
            + recursive('blank', midIdx[0], midIdx[1])
            + recursive('blank', endIdx[0], endIdx[1])
    }
}

console.log(result.join("\n"))
