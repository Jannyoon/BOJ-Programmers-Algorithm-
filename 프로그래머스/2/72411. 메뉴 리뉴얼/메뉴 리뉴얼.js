function solution(orders, course) {
    let answer = [];
    for (num of course){
        //num : 조합의 개수가 될 것
        let list = new Map(); //불리는 갯수를 세기 위해서.
        let max = -Infinity;
        
        for (let i=0; i<orders.length; i++){
            let strArr = orders[i].split("").sort();
            let combiList = getCombination(strArr, num).map(v =>v.join(""));
            combiList.forEach((combi)=>{
                if (list.has(combi)){
                    const val = list.get(combi);
                    list.set(combi, val+1);
                    max = Math.max(max, val+1);
                }
                else {
                    list.set(combi, 1);
                    max = Math.max(max, 1);
                }
            })
        }
        
        if (max>=2){
            let listArr = [...list];
            listArr=listArr.filter((value)=>value[1]===max);
            listArr.forEach(v => answer.push(v[0]));
        }
        
    }
    
    return answer.sort();
}

function getCombination(arr, selectNum){
    let result = [];
    if (selectNum===1){
        arr = arr.map(v => [v]);
        return arr;
    }
    
    arr.forEach((fixed, idx, origin)=>{
        const rest = arr.slice(idx+1);
        //재귀 함수
        const combination = getCombination(rest, selectNum-1);
        const attach = combination.map((el)=>[fixed, ...el]);
        result.push(...attach);
    });
    return result;
}