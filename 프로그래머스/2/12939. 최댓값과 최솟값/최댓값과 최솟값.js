function solution(s) {    
    let str = s.split(" ").map(Number).sort((a,b)=>a-b);
    let answer = [str[0], str.at(-1)];
    return answer.join(" ");
}
