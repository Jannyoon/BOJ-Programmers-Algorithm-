function solution(arr)
{
    //연속적으로 나타나는 숫자는 하나만 남기고 전부 제거할 것이다.
    let answer = [];
    let val = '';
    for (let i=0; i<arr.length; i++){
        if (val!==arr[i]){
            answer.push(arr[i]);
            val = arr[i];
        }
    }

    return answer;
}