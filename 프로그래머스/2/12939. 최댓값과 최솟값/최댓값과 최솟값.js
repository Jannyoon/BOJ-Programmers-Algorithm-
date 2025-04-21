function solution(s) {
    let arr = s.split(" ").map(Number);
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return `${min} ${max}`;
}

//최소값, 최대값 형태의 문자열을 반환하는 함수.
