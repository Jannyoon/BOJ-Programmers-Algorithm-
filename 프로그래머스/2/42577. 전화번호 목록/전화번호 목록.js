function solution(phone_book) {
    let map = new Map();
    for (let i=0; i<phone_book.length; i++){
        map.set(phone_book[i], '');
    }
    
    let answer = true;
    
    for ([key, value] of map){
        let val = key;
        for (let i=1; i<val.length; i++){
            let part = val.slice(0,i);
            
            if (map.has(part)) return false;
        }
    }
    return answer;
}