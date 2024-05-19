function solution(arr) {
    let answer = [0,0];

    function quad(arr, x, y, len){
        let first = arr[x][y]; //시작 지점 저장해놓기
        for (let i=x; i<x+len; i++){
            for (let j=y; j<y+len; j++){
                if (arr[i][j]!==first){
                    let l = parseInt(len/2);
                    quad(arr, x, y, l)
                    quad(arr, x+l, y, l);
                    quad(arr, x, y+l, l);
                    quad(arr, x+l, y+l, l);
                    return;                
                }
            }
        }
        answer[first]++;
    }
    
    quad(arr, 0, 0, arr.length, answer);

    return answer;
}
