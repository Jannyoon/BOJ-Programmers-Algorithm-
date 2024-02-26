process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    //a : 가로 길이, b : 세로 길이
    let list = [];
    for (let i=0; i<b; i++){
        list.push(Array.from({length:a},()=>"*"));
    }
   
    list = list.map((v)=>v.join("")).join("\n");
    console.log(list);
});