function solution(s) {
    let str1 = s.toLowerCase();
    console.log(str1);
    let arr = str1.split(" ").map((word)=>word.split("").map((alpha,idx)=>{
        if (idx===0 && isNaN(+alpha)) return alpha.toUpperCase();
        return alpha;
    }).join("")).join(" ");
    console.log(arr);
    return arr;
    
    var answer = '';
    return answer;
}
//문자열 s가 주어졌을 때 s를 JadenCase로 바꾼 문자열을 return 하라