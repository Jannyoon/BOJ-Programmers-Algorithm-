//테두리는 1, 내부는 8
function solution(rectangle, characterX, characterY, itemX, itemY) {
    let arr = Array.from({length:101},()=>Array.from({length:101},()=>0));
    rectangle = rectangle.map((v)=>v.map((pos)=>2*pos));
    
    for (let i=0; i<rectangle.length; i++){
        let [lx, ly, rx, ry] = rectangle[i];
        
        for (let i=lx; i<=rx; i++){
            for (let j=ly; j<=ry; j++){
                if (i===lx || i===rx || j===ly || j===ry){
                    if (arr[i][j]!==0) continue;
                    else arr[i][j] = 1;
                }
                else arr[i][j] = 8;
            }
        }
    }
    
    let answer = bfs(arr, characterX*2, characterY*2, itemX*2, itemY*2);
    
    //console.log(arr.map((v)=>v.join("")).join('\n'))
    return answer;
}

function bfs(array, i,j, finx, finy){
    let queue = [[i,j]];
    let nrow = [-1,1,0,0]; //상, 하, 좌, 우
    let ncol = [0,0,-1,1]; 

    while(queue.length){
        let [x,y] = queue.shift();
        
        if (x===finx && y===finy) return parseInt(array[x][y]/2);
        
        for (let cnt=0; cnt<4; cnt++){
            let nx = x+nrow[cnt];
            let ny = y+ncol[cnt];
            
            if (nx<=-1 || nx>=101 || ny<=-1 || ny>=101) continue;
            if (array[nx][ny]===1){
                queue.push([nx,ny]);
                array[nx][ny] = array[x][y]+1;
            }
        }
        
    }
}