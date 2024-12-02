let fs = require('fs');
let [n,...input] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
n = +n;

input = input.sort((a,b)=>{
  if (a.length!==b.length) return a.length - b.length;
  else if (a.length===b.length){
    let sum1 = a.split("").reduce((prev, cur)=>{
      if (isNaN(+cur)) return prev;
      else return parseInt(prev)+parseInt(cur);
    },0 );

    let sum2 = b.split("").reduce((prev, cur)=>{
      if (isNaN(+cur)) return prev;
      else return parseInt(prev)+parseInt(cur);
    },0 );

    if (sum1!==sum2) return (sum1<sum2) ? -1 : 1;
    else return (a<b) ? -1 : 1;
  }
})
console.log(input.join("\n"));