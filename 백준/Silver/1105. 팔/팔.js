let fs = require('fs');
let [l,r] = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

if (l.length!==r.length) console.log(0);
else {
  let count = 0;

  for (let i=0; i<l.length; i++){
    if (l[i]===r[i]){
      if (l[i]==='8') count++;
      else continue;
    }
    else break;
  }
  console.log(count);
}

