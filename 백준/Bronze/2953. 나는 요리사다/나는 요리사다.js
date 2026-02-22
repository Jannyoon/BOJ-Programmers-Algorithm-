let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

input = input.map((value) => value.split(" ").map(v => Number(v)));
input = input.map((value) => {
    //value: input[i]인 배열이 들어가있을 것
    let sum = 0;  //18
    for (let i=0; i<value.length; i++){
        sum += value[i]
    }
    return sum
})

let max = Math.max(...input);
let maxIndexOf = input.indexOf(max);
console.log(maxIndexOf+1, max);


