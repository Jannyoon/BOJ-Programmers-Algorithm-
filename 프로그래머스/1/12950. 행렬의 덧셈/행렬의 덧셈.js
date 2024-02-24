function solution(arr1, arr2) {
    arr1 = arr1.map((v,i)=> v.map((s,j)=> s + arr2[i][j]));
    return arr1;
}