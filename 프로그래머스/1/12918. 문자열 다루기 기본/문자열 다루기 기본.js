function solution(s) {
    s = s.split("");
    console.log(s);
    if (s.length!==4 && s.length!==6) return false;
    
    for (let i=0; i<s.length; i++){
        if (isNaN(Number(s[i]))) return false;
    }
    return true;
}