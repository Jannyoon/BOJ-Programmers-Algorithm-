function solution(files) {
    let newFiles = Array.from({length:files.length},()=>['','','']); //HEAD, NUMBER, TAIL

    for (let i=0; i<files.length; i++){
        let word = files[i];
        let idx = 0;
        let head = '';
        let number = '';
        let tail = '';
        while(idx<word.length){
            while(word[idx]==' ' || isNaN(+word[idx])){
                head += word[idx];
                idx++;
            }
            while(word[idx]!==' ' && !isNaN(+word[idx])){
                number = number+''+word[idx];
                idx++;
            }
            break;
        }
        tail = word.slice(idx,);
        newFiles[i] = [head, number, tail];
    }
    
    
    newFiles.sort((a,b)=>{
        let aUp = a[0].toUpperCase();
        let bUp = b[0].toUpperCase();
        
        if (aUp<bUp) return -1;
        if (aUp>bUp) return 1;
        if (aUp===bUp) return a[1]-b[1];
    });
    
    newFiles = newFiles.map(v=>v.join(""));
    //console.log(newFiles);
    return newFiles;
}
/*
세 차례의 코딩 테스트와 두 차례의 면접이라는 기나긴 블라인드 공채를 무사히 통과해
카카오에 입사한 무지는 파일 저장소 서버 관리를 맡게 되었다.

저장소 서버에는 프로그램의 과거 버전을 모두 담고 있어, 이름 순으로 정렬된 파일 목록은 보기가 불편했다.
과거 버전을 모두 담고 있다?
이름 순으로 정렬된 파일 목록은 보기가 불편했다.
파일을 이름 순으로 정렬하면 나중에 만들어진 ver-10.zip이 ver-9.zip보다 먼저 표시되기 때문

버전 번호 외에도 숫자가 포함된 파일 목록은 여러 면에서 관리하기 불편.
예컨대 파일 목록이 img12.png...
일반적인 정렬은 img1.png img10.png img12.png img2.png 순이다.
숫자 순으로 정렬된 img1.png img2.png, img10.png, img12.png 순.

소스 파일 저장소에 저장된 파일명은 100글자 이내. 영문 대소문자, 숫자, 공백(" "), 마침표("."), 빼기 부호("-") 만으로 이루어짐.
파일명은 영문자로 시작하며, 숫자를 하나 이상 포함하고 있다.
파일명은 크게 HEAD, NUMBER, TAIL의 세 부분으로 구성된다.

HEAD는 숫자가 아닌 문자로 이루어져 있으며, 최소한 한 글자 이상이다. =>isNaN()으로 판별.
NUMBER는 한 글자에서 최대 다섯 글자 사이의 연속된 숫자로 이루어져 있으며, 앞쪽에 0이 올 수 있다.
0부터 99999 사이의 숫자로 00000이나 0101등도 가능하다.
TAIL은 그 나머지 부분으로, 여기에는 숫자가 다시 나타날 수도 있으며, 아무 글자도 없을 수 있다.

파일명은 우선 HEAD 부분을 기준으로 사전 순으로 정렬한다.
이때, 문자열 비교 시 대소문자 구분을 하지 않는다. MUZI와 muzi, MuZi는 정렬 시에 같은 순서로 취급된다.
(HEAD, NUMBER, TAIL)로 새롭게 각각 배열을 작성해야 할 듯

파일명의 HEAD 부분이 대소문자 차이 외에는 같을 경우, NUMBER의 숫자 순으로 정렬한다.
9<10<0011<012<13<014 순으로 정렬된다. 숫자 앞의 0은 무시되며, 012와 12는 정렬 시에 같은 값으로 처리된다.

두 파일의 HEAD 부분과 NUMBER의 숫자도 같을 경우, 원래 입력에 주어진 순서를 유지한다.
MUZI01.zip과 muzi1.png가 입력으로 들어오면, 정렬 후에도 입력 시 주어진 두 파일의 순서가 바뀌어서는 안 된다.

허허허~

*/