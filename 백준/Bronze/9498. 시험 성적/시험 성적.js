let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let result = ""

if (input>=90 && input<=100) result = "A"
else if (input>=80 && input<90) result = "B"
else if (input>=70 && input<80) result = "C"
else if (input>=60 && input<70) result = "D"
else result = "F"

console.log(result)