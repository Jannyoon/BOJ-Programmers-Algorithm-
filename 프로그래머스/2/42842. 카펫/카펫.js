function solution(brown, yellow) {
    let xPLUSy = parseInt(brown/2)+2;
    let xy = yellow-4 + 2*xPLUSy;
    
    let x=xy;
    let y=1;
    
    for (let y=1; y<=xy; y++){
        if (xy%y!==0) continue;
        if (y+parseInt(xy/y)===xPLUSy) return [xy/y, y];
    }
  
}
/*
중앙은 노란색, 테두리 1줄은 갈색
아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억한다고...?

*/