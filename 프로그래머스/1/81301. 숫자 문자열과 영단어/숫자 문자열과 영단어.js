function solution(s) {
    let stack = [];
    let list = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let i=0;
    while(i<s.length){
        if (isNaN(+s[i])){
            console.log(s[i]);
            let str = '';
            while(isNaN(+s[i])){
                str = str+s[i];
                i++;
                if (list.includes(str)){
                    stack.push(list.indexOf(str));
                    break;
                }
            }
        }
        else{
            stack.push(s[i]);
            i++;
        }
    }

    return +stack.join("");
}