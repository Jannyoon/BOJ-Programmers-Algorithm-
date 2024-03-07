function solution(elements) {
    var answer = 0;
    let newArray = [...elements, ...elements];
    newArray.pop();
    
    let list = new Set();
    
    for (let len=1; len<=elements.length; len++){ //길이
        for (let start = 0; start<=(elements.length-1); start++){
            let nums = newArray.slice(start, start+len)
            .reduce((prev,cur)=>prev+cur,0);
            list.add(nums);                
        }
    }
    
    list = [...list]
    return list.length;
}
/*
어떤 자연수로 이루어진 원형 수열의 !!연속하는 부분 수열의 합!!
만들 수 있는 수가 모두 몇 가지인지 알아보고 싶다

원형 수열 =>배열 +배열 & 마지막 숫자 pop()을 고려해서 배열을 새로 재배치

배열의 최대 길이 : 기존 elements의 길이
*/