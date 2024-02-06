function solution(s){
    let [pNum, yNum] = [0,0];
    for (let i=0; i<s.length; i++){
        if (s[i]==='p' || s[i]==='P') pNum++;
        else if (s[i]==='y' || s[i]==='Y') yNum++;
    }
    return pNum===yNum;
}