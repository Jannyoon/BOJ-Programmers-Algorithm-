function solution(skill, skill_trees) {
    let alpha = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let arr = Array.from({length:skill.length},()=>0);
    let count = 0;
    //arr[idx]에서 idx : skill의 idx. 
    //arr[idx] : skill의 idx에 해당하는 알파벳의 부모가 무엇인가
    for (let i=1; i<skill.length; i++){
        arr[i] = alpha.indexOf(skill[i-1]);
    }
    
    for (let i=0; i<skill_trees.length; i++){
        let visited = Array.from({length:alpha.length},()=>false);
        let list = skill_trees[i].split("");
        let flag = true;
        for (let j=0; j<list.length; j++){
            if (!skill.includes(list[j])){
                visited[alpha.indexOf(list[j])] = true;
                continue;
            }
            else {
                //루트인가
                //해당 알파벳의 skill에서의 위치
                let idx = skill.indexOf(list[j])
                if (arr[idx]==0) visited[alpha.indexOf(list[j])] = true;
                else {
                    let parent = arr[idx];
                    if (!visited[parent]){
                        flag = false; 
                        break;
                    } 
                    else visited[alpha.indexOf(list[j])] = true;
                }
            }
        }
        if (flag) count++;
    }
    return count;
}
/*
선행 스킬 : 스파크 => 라이트닝 볼트 => 썬더

*/