function solution(people, limit) { 
    people.sort((a,b)=>a-b);
    let left = 0;
    let right = people.length-1;
    let count = 0;
    while(left<right){
        if (people[left]+people[right]<=limit){
            people[left] = 0;
            people[right] = 0;
            left++;
            right--;
            count++;
        }
        else {
            right--;
        }
    }
    count+=(people.filter(v=>v!==0).length);
    return count;
}
//한번에 2명씩 밖에 탈 수가 없다?
//구명보트를 최대한 적게 사용하여 모든 사람을 구출하자.
//항상 사람들의 몸무게 중 최댓값보다 크게 주어진다.

/*

바꾼 건 0으로?
제일 무게 적은 사람 => 무게 많이 나가는 사람함께..

*/