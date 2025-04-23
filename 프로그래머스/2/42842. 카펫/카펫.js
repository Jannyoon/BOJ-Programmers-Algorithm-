function solution(brown, yellow) {
    let halfBrown = parseInt(brown/2);
    
    //x+y = halfBrown;
    //y*(x-2) = yellow;
    //y = halfBrown-x;
    //(halfBrown-x) * (x-2) = yellow;
    
    //가로 길이 최소3개부터 시작
    let ans = 3; //x
    while(true){
        let calc = (halfBrown-ans)*(ans-2);
        if (calc===yellow) break;
        ans++;
    }
    
    let result = [ans, halfBrown-ans+2];
    result.sort((a,b)=>b-a)
    return result;
}

/*
중앙은 노랑, 테두리 1줄은 갈색

카펫의 가로 길이는 세로 길이와 같거나 세로 길이보다 깁니다. 가로>=세로
*/