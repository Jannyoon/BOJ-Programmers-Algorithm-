function solution(numbers) {
    let answer = [];
    numbers = numbers.map(v=>""+v);
    numbers.sort((a,b)=>(b+a)-(a+b));
    let result = numbers.join("");
    if (Number(result)==0) return "0";
    else return result;
}