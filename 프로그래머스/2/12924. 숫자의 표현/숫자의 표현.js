function solution(n) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let count = 0;
    
    while(left<=right && right<=n && left<=n){
        while(sum<n){ //합산 값이 작을 경우 right를 옮김.
            right++;  
            sum+=right;
        }
        
        if (sum===n){
            count++;
            sum-=left; //통째로 오른쪽으로 옮겨간다고 생각하자.
            left++;
            right++;
            sum+=right;
        }
        else if (sum>n){
            sum-=left;
            left++;
        }        
    
    }
    console.log(count);
    return count;
}


/*
연속한 자연수들로 표현하는 방법.
슬라이딩 윈도우를 사용해볼까...
1부터...
*/