function solution(A,B){
    A = A.sort((a,b)=>a-b);
    B = B.sort((a,b)=>b-a);
    
    let result = A.map((v,i)=>v*B[i]).reduce((prev,cur)=>prev+cur,0);
    console.log(result);
    return result;
}

/*
길이가 같은 배열 a,b 두 개가 있습니다. 각 배열은 자연수로 이루어져 있고..
배열 a,b에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다.
이러한 과정을 배열의 길이만큼 반복하며, 두 수를 곱한 값을 누적하여 더합니다.
이때 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다 => 그리디? 디피?
단, 각 배열에서 k번째 숫자를 뽑았다면 다음에 k번째 숫자는 다시 뽑을 수 없습니다.
*/