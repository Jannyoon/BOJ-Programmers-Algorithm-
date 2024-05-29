function solution(n) {
    let arr = Array.from({length:n},()=>Array.from({length:n},()=>0));
    
    let idx = 0;
    let num = 1;
    let count = n;
    let [x,y] = [0,0];
    
    let nx = [1,0,-1];
    let ny = [0,1,-1];
    
    while(count>=0){
        
        for (let i=0; i<count; i++){
            arr[x][y] = num;
        
            let nextx = x+nx[idx];
            let nexty = y+ny[idx];
            
            if (nextx<=-1 || nextx>=n || nexty<=-1 || nexty>=n) break; 
            x = nextx;
            y = nexty;
            num++;
        }
        
        idx++;
        count--;
        if (idx===3) idx=0;
        if (count===0){
            arr[x][y] = num;
            break;
        }
       
        
    }
    
    arr = arr.map(v =>v.filter(s => s!==0)).flat();
    
    return arr;
}