let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n").map(v => v.split("").filter(v => ['[', ']', '(', ')'].includes(v)));
input.pop();

let result = [];

for (let i=0; i<input.length; i++){
    let ans = 'yes';
    let idx = 0;
    let arr = input[i];
    let stack = [];

    while(idx<arr.length){
        let top = stack[stack.length-1]
        if (arr[idx]==='(' || arr[idx]==='[') stack.push(arr[idx++]);
        else {
            if (arr[idx]===')'){
                if (top==='('){
                    stack.pop();
                    idx++;
                } else {
                    ans = 'no';
                    break;
                }
            } else if (arr[idx]===']'){
                if (top==='['){
                    stack.pop();
                    idx++;
                } else {
                    ans = 'no';
                    break;
                }

            }
        }
    }

    if (stack.length!==0) ans = 'no';
    result.push(ans)
}

console.log(result.join("\n"));