let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim()
.split('\n').map(v => v.split(" ").map(Number))

let arr = []
let [row, col] = input[0]
let result = []
let i=1; 

for (let cnt=0; cnt<row; cnt++){
    arr.push(input[i++]);
}
i++;

//문제 정의
let problem = input.slice(i)

for (let idx=i; idx<input.length; idx++){
    let target = input[i];
    let val = 0;
    let [x1, y1] = [target[0]-1, target[1]-1];
    let [x2, y2] = [target[2]-1, target[3]-1];

    for (let x=x1; x<=x2; x++){
        for (let y=y1; y<=y2; y++){
            val+=arr[x][y];
        }
    }

    result.push(val);
    i++;
}

console.log(result.join("\n"))
