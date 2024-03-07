function solution(arr1, arr2) {
    var answer = [[]];
    
    let row1 = arr1.length;
    let col1 = arr1[0].length;
    
    let row2 = arr2.length;
    let col2 = arr2[0].length;
    
    let result = Array.from({length:row1},()=>Array.from({length:col2},()=>0));
    
    //행렬 채우는 용...(바깥 껍데기)
    for (let row = 0; row<row1; row++){
        for (let col=0 ; col<col2; col++){
            let sum = 0;          
            for (let k=0; k<col1; k++){
                sum+=arr1[row][k]*arr2[k][col];
            }
                            
            result[row][col] = sum;
        }
    }
    
    
    return result;
}