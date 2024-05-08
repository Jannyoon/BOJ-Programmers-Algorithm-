function solution(strings, n) {
    var answer = [];
    strings.sort();
    strings.sort((a,b)=>{
        if (a[n]<b[n]) return -1;
        else if (a[n]===b[n]) return 0;
        else return 1;
    })
    return strings;
}