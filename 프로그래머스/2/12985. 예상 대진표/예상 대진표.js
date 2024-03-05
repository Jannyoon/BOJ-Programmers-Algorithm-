function solution(n,a,b)
{
    if (b<a) [a,b] = [b,a];
    let round = 1;
    
    while(true){
        if (a%2!==0 && b%2===0 && b==(a+1)) break;
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        round++;
    }
    return round;
}

/*
트리 구조, 사촌이 아닌 형제 구조가 되는 순간이 언제인지를 찾아야 한다.
A,B는 N이하의 자연수.
둘이 사촌이 아닌 형제 구조가 되려면
A는 홀수, B는 짝수여야 하고 B = A+1이 되어야 함.

Math.ceil(해당 번호/2)가 다음턴이 된다.

1 2 3 (a:4) 5 6 (b:7) 8 <round = 1>;
1 (a:2) 3 (b:4)
*/