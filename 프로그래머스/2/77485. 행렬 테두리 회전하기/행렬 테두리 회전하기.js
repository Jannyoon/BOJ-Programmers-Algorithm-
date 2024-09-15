function solution(rows, columns, queries) {
    let answer = [];
    //초기 맵 생성
    let mapArr = Array.from({length:rows},()=>Array.from({length:columns},()=>0));
    let num = 1;
    for (let i=0; i<rows; i++){
        for (let j=0; j<columns; j++){
            mapArr[i][j] = num++;
        }
    }
    //console.log(mapArr);
    
    for (let i=0; i<queries.length; i++){
        let query = queries[i];
        let subArr = mapArr.map(v => v.map(s => s));
        answer.push(rotate(query, subArr, mapArr));

        mapArr = subArr;
        
    }
    
    return answer;
}

function rotate(query, arr, origin){
    //arr는 복사한 배열이 들어가게 된다.
    let min = Infinity;
    let idxScale = query.map(v => v-1);
    let [x1, y1, x2, y2] = idxScale;
    
    let dx = [0,1,0,-1];
    let dy = [1,0,-1,0];
    
    let [x,y] = [x1,y1]; //start
    let dir = 0; //방향
    
    while(dir<4){
        while(x1<=x && x<=x2 && y1<=y && y<=y2){
            nextX = x+dx[dir];
            nextY = y+dy[dir];
            if (nextX<x1 || nextX>x2 || nextY<y1 || nextY>y2) break;
            min = Math.min(min, origin[x][y]);
            arr[nextX][nextY] = origin[x][y];
            x = nextX;
            y = nextY;
        }
        dir++;
    }
    return min;
}
/*
직사각형 모양의 범위를 여러 번 선택한다.
테두리 부분에 있는 숫자들은 시계 방향으로 회전시킬 것이다.
각 회전은 (x1, y1, x2, y2)인 정수 4개로 표현한다.

(2,2,5,4)라면 idx 상으로는 (1,1,4,3)이 될 것.
*/