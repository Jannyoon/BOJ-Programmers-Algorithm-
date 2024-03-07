function solution(citations) {
    citations.sort((a,b)=>b-a);
    for (let i=0; i<citations.length; i++){
        if (citations[i]===(i+1)){
            return i+1;
        }
        else if (citations[i]<i+1){
            return i;
        }
    }
    return citations.length;
}
/*
H-Index는 과학자의 생산성과 영향력을 나타내는 지표
H-Index를 나타내는 값인 h를 구하려고 한다. H-Index는 다음과 같이 구한다.

논문 n편 중, h번 이상 인용된 논문이 h편 이상이고,
나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.
!h번 이상 인용된 논문이 h편 이상!

O(N^2)를 돌리며
citations[i] : 인용 횟수
인용횟수보다 크거나 같은 값인 case의 숫자를 비교한다.
음.
ㅅㅂ.
?...1000편..
*/