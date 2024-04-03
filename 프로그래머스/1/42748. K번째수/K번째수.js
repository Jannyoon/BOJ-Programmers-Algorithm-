function solution(array, commands) {
    let ans = [];
    for (let cnt=0; cnt<commands.length; cnt++){
        let [i,j,k] = commands[cnt];
        
        let newArr = array.slice(i-1,j);
        newArr.sort((a,b)=>a-b);
        ans.push(newArr[k-1]);
    }
    return ans
}