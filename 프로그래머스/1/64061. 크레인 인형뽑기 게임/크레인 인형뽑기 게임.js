/*
크레인은 가장 위에 있는 인형을 집어올릴 수 있다.
집어올린 인형은 바구니에 쌓이는데,
바구니의 가장 아래 칸부터 인형이 순서대로 쌓이게 된다.(얘도 스택)
만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면
두 인형은 터뜨려지면서 바구니에서 사라지게 된다.
크레인 작동 시 인형이 집어지지 않은 경우는 없다!!! => 무조건적인 확률로 집힘
만약 인형이 없는 곳에서 크레인을 작동시키는 경우엔 아무 인형 없음.
Q. 크레인을 모두 작동시킨 후 터뜨려져 사라진 인형의 개수?
*/

function solution(board, moves) {
    const n = board.length;
    let total = 0;
    let stack = []; //인형이 쌓이는 공간
    moves = moves.map((v)=>v-1); //idx를 맞춰주기 위해 mapping
    for (let cnt=0; cnt<moves.length; cnt++){
        let col = moves[cnt];
        let doll = null;
        let flag = false; //아무 인형도 발견하지 못했다는 신호
        for (let row=0; row<n; row++){
            if (board[row][col]===0) continue;
            else {
                flag = true;
                doll = board[row][col];
                board[row][col] = 0; //값 없애줌.
                break;
            }
        }
        if (!flag) continue;
        else {
            let top = stack[stack.length-1];
            if (stack.length!==0 && top === doll){
                stack.pop();
                total+=2;
            }
            else {
                stack.push(doll);
            }
        }
        
    }
    var answer = 0;
    return total;
}

