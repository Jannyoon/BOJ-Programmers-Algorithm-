function solution(A,B){
    //둘다 오름차순으로 재정렬
    A.sort((a,b)=>a-b);    //1 2 3
    B.sort((a,b)=>a-b);   // 4 5 6
    
    let result1 = 0;
    let result2 = 0;
    
    for (let i=0; i<A.length; i++){
        result1 += A[i]*B[B.length-1-i];
        result2 += B[i]*A[A.length-1-i];
    }
    
    return Math.min(result1, result2);
}

/*
길이가 같은 배열 a,b
각 배열은 자연수로 이루어져 있다.

배열 a,b에서 각각 한 개의 숫자를 뽑아 두 수를 곱한다.
배열의 길이만큼 반복. 
*/