function solution(dirs) {
    let now = [0,0];
    let dir = {
        U : [-1,0],
        D : [1,0],
        L : [0,-1],
        R : [0,1],
    }
    
    let list = new Set();
    
    for (let i=0; i<dirs.length; i++){
        let nx = now[0]+dir[dirs[i]][0];
        let ny = now[1]+dir[dirs[i]][1];
        
        if (nx<-5 || nx>5 || ny<-5 || ny>5) continue;
        
        list.add(`${now[0]}${now[1]}${nx}${ny}`);
        list.add(`${nx}${ny}${now[0]}${now[1]}`);
        
        now = [nx,ny];
    }
    
    return ([...list].length/2);
    
    
}

