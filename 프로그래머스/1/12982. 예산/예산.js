function solution(d, budget) {
    var answer = 0;
    d.sort((a,b)=>a-b);
    let count = 0;
    for (let i=0; i<d.length; i++){
        if (budget<d[i]) break;
        budget-=d[i];
        count++;
    }
    return (count);
}
//최대한 많은 부서의 물품을 지원해주려고 한다.
//예산이 적게 드는 순서로 배열한다
//될 때까지 -