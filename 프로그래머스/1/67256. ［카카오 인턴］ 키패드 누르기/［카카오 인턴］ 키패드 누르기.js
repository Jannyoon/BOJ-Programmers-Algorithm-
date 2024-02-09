function solution(numbers, hand) {
    let ans = [];
    let board = 
        [[1,2,3],
        [4,5,6],
        [7,8,9],
        ['',0,'']
        ];
    let lefthands = [1,4,7];
    let righthands = [3,6,9];
    let rest = [2,5,8,0];
    
    
    let Lpos = [3,0]; //3행 0열에서 출발
    let Rpos = [3,2]; //3행 2열에서 출발
    const zeroPos = [3,1] // 0은 3행 1열이다.
    
    for (let i=0; i<numbers.length; i++){
        let nextNum = numbers[i]; //다음에 눌러야 할 숫자임.
        let nextPos = [-1, -1];
        
        if (lefthands.find(v=>v===nextNum)){
            Lpos = [Math.floor(nextNum/3), 0];
            ans.push('L');
        }
        else if (righthands.find(v=>v===nextNum)){
            Rpos = [Math.floor(nextNum/3)-1, 2];
            ans.push('R');
        }
        else { //소속하지 않을 경우.....
            nextPos = [rest.indexOf(nextNum),1];
            //console.log(nextPos);
            let Ldist = Math.abs(Lpos[0]-nextPos[0])+Math.abs(Lpos[1]-nextPos[1]);
            let Rdist = Math.abs(Rpos[0]-nextPos[0])+Math.abs(Rpos[1]-nextPos[1]);
            
            if (Ldist<Rdist){
                Lpos = nextPos;
                ans.push('L');
            }
            else if (Ldist>Rdist){
                Rpos = nextPos;
                ans.push('R');
            }
            else {
                if (hand==='right'){
                    Rpos = nextPos;
                    ans.push('R');
                }
                else {
                    Lpos = nextPos;
                    ans.push('L');
                }
            }
            
        }
    }
    return ans.join("");
        
}