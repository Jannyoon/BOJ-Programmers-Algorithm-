function solution(number) {
    let count = 0;
    for (let i=0; i<number.length-2; i++){
        for (let j=i+1; j<number.length-1; j++){
            for (let k=j+1; k<number.length; k++){
                if (number[i]+number[j]+number[k]===0) count++;
            }
        }
    }
    return count;
}
/*
한국 중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다.
3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사.

5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때....
더해봐라...

*/