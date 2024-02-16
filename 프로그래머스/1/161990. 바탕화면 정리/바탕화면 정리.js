function solution(wallpaper) {
    let maxCol = -Infinity;
    let maxRow = -Infinity;
    let minRow = Infinity;
    let minCol = Infinity;
    
    let n  = wallpaper.length;
    for (let row=0; row<n; row++){ //row
        let lastcol = wallpaper[row].length;
        for (let col=0; col<lastcol; col++){
            if (wallpaper[row][col]==='#'){
                [minRow, minCol] = [Math.min(minRow, row), Math.min(minCol, col)];
                [maxRow, maxCol] = [Math.max(maxRow, row), Math.max(maxCol, col)];
            }         
        }
    }
    
    return [minRow, minCol, maxRow+1, maxCol+1];
}
