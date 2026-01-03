let fs = require('fs');
let [nm, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let [n,m] = nm.split(" ").map(Number);
input = input.map(v => v.split("").map(Number));


// 상, 하, 좌, 우
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

function bfs(){
    let queue = [[0,0]]
    let idx = 0;


    while(idx<queue.length){
        let [nowX, nowY] = queue[idx]
        
        for (let k=0; k<4; k++){
            let nx = nowX + dx[k];
            let ny = nowY + dy[k];

            //영역을 벗어남
            if (nx<=-1 || nx>=n || ny<=-1 || ny>=m) continue;
            else if (input[nx][ny]===0) continue;
            else if (input[nx][ny]===1){
                input[nx][ny] = input[nowX][nowY] + 1;
                queue.push([nx, ny]);
            }
        }

        idx++;
    }
}

bfs();
console.log(input[n-1][m-1])