function solution(data, col, row_begin, row_end) {
    let answer = 0;
    
    data = data.sort((a,b)=>{
        if (a[col-1]===b[col-1]) return b[0]-a[0];
        else return a[col-1]-b[col-1];
    }).map((v,row)=>v.map(s => s%(row+1)).reduce((prev,cur)=>prev+cur,0));
    console.log(data);
    
    for (let i=row_begin-1; i<=row_end-1; i++){
        answer^=data[i];
    }
    return answer;
}