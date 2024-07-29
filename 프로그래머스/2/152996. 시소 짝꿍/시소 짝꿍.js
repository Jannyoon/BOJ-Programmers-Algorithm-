function solution(weights) {
    let answer = 0;
    
    weights.sort((a,b)=>b-a);
    let save = {};
    let calc = [1, 3/2, 2, 4/3];

    weights.forEach((value)=>{
        calc.forEach((cv)=>{
            if (save[value*cv]) answer+= save[value*cv];
        })
        if (!save[value]) save[value] = 1;
        else save[value]++;
        
    })
    
    return answer;
}