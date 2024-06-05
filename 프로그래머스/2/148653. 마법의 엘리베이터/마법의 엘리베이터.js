function solution(storey) {
    var answer = 0;
    let ans = Infinity;
    dfs(storey, 0);

    function dfs(storey, count){
        if (storey===0){
            ans = Math.min(ans, count);
            //console.log(ans);
            return;
        }

        let rest = storey%10;

        if (rest>5){ //위로 가야 함
            dfs(Math.floor(storey/10)+1, count+10-rest)
        }
        else if (rest<5){
            dfs(Math.floor(storey/10), count+rest);
        }
        else {
            dfs(Math.floor(storey/10)+1, count+10-rest);
            dfs(Math.floor(storey/10), count+rest);
        }
    }    
    return ans;
}
