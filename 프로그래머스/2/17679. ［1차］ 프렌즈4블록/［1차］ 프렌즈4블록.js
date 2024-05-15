function solution(m, n, board) {
    let map = Array.from({length:n},()=>Array.from({length:m},()=>""));
    for (let col=0; col<n; col++){
        let str = '';
        for (let row=0; row<m; row++){
            map[col][m-row-1] = board[row][col];
        }
    }
    //newBoard에서 row : n, col : m;
    let row = n;
    let col = m;
    let totalCount = 0;
    
    while(true){
        let list = [];
        let checkNx = [0,1,1];//우,하,대각선우
        let checkNy = [1,0,1];
        for (let i=0; i<row; i++){
            for (let j=0; j<col; j++){
                let now = map[i][j];
                if (now==='') continue;
                let flag = true; //판별용
                
                for (let k=0; k<3; k++){
                    let nx = i+checkNx[k];
                    let ny = j+checkNy[k];
                    if (nx<=-1 || nx>=row || ny<=-1 || ny>=col){
                        flag = false;
                        continue;
                    }
                    if (now!==map[nx][ny]){
                        flag = false;
                        continue;
                    }
                }
                
                if (flag){
                    
                    console.log('저장한 좌표:',i,j);
                    list.push([i,j]);
                } //now의 좌표를 저장한다.
            }
        }
        
        if (list.length===0) break; //mapUpdate 함수를 가져오자
        
        totalCount += updateMap(map, list); //블록을 지우는 함수를 실행했다.
        //블록 재정렬 필요하다.
        reSort(map,m,n);
        //console.log(totalCount);
        
    }
    //console.log(map);
    var answer = 0;
    return totalCount;
}

function updateMap(map, list){
    let count = 0;
    for (let i=0; i<list.length; i++){
        let [x,y] = list[i];
        if (map[x][y]!=='') count++;
        map[x][y] = "";

        let nrow = [0,1,1]; //우,하,대각선우
        let ncol = [1,0,1];
        
        for (let k=0; k<3; k++){
            let nx = x+nrow[k];
            let ny = y+ncol[k];
            
            if (map[nx][ny]!=="") count++;
            map[nx][ny] = "";
        }
    }
    
    //console.log("이번회차 count:", count);
    return count;
}

function reSort(map,m,n){
    for (let i=0; i<n; i++){
        let arr = map[i].filter(v=>v!=="");
        while(arr.length!==m) arr.push(""); 
        map[i] = arr;
    }
}