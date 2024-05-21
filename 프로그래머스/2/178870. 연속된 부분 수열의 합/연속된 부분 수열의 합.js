function solution(sequence, k) {
    //슬라이딩윈도우
    //sequence는 오름차순(비내림차순)으로 정렬되어있
    let answer = [];
    let left = 0;
    let right = 0;
    
    let totalLen = Infinity;
    let sum = sequence[right];
    console.log(sum);
    
    while(left<=right && right<sequence.length){
        if (sum===k){
            let len = right-left+1;
            if (len < totalLen){
                totalLen = len;
                answer = [left, right];
            }
            sum -= sequence[left++];
            sum += sequence[++right];
        }
        
        else if (sum<k){
            sum += sequence[++right];
        }
        else {
            sum -= sequence[left++];
        }
    }
    return answer;
}