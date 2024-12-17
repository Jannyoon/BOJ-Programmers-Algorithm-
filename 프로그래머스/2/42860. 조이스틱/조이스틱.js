const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function solution(name) {
    let count = 0 ;
    let topdownCnt = name.split("").map(v => {
        let num = alpha.indexOf(v);
        if (num>=13) return (26-num); 
        return num;
    });
    
    count = topdownCnt.reduce((prev,cur)=>prev+cur,0);
    //name에 A가 존재하지 않을 경우 커서를 오른쪽으로만 이동하면 된다.

    let minMove = name.length-1;
    topdownCnt.forEach((v,index) => {
        let nextIndex = index+1; //A가 아닌 곳이 될때까지 간격 벌리는 용
        
        while(nextIndex<name.length && topdownCnt[nextIndex]===0){
            nextIndex++;
        }
        
        let toBack = name.length-nextIndex;
        minMove = Math.min(minMove, 2*index+toBack, index+2*toBack);
    })
    
    count+=minMove;    
    
    return count;
}