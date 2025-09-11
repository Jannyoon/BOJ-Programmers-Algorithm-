//x좌표 y좌표
let fs = require('fs');
let [n, ...input] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map(v => v.split(" ").map(Number));

n=+n[0]
input = input.sort((a,b)=>{
    if (a[1]===b[1]) return a[0]-b[0];
    else return a[1]-b[1];
})

console.log(input.map(v => v.join(" ")).join("\n"));
