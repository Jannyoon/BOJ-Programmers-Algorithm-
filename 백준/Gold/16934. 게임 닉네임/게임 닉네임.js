let fs = require('fs');
let [n, ...input]= fs.readFileSync('/dev/stdin').toString().trim().split("\n");

n=+n;

class Node {
  constructor(value=""){
    this.value = value;
    this.end = false;
    this.count = 0; //this.end=true인 조건에서 지금까지 총 몇 명이 같은 닉네임을 가졌는가
    this.child = {};
  }
}

class Trie {
  constructor(){
    this.root = new Node();
  }

  insert(string){
    let currentNode = this.root;
    let answer = currentNode.value;

    for (let i=0; i<string.length; i++){
      let char = new Node(string[i]);

      if (!currentNode.child[string[i]]){
        char.value = currentNode.value + string[i];
        currentNode.child[string[i]] = char;
        if (answer==='') answer = char.value; //답 냈음.
      }
      currentNode = currentNode.child[string[i]]
    }

    currentNode.end = true;
    currentNode.count = currentNode.count+1;
    if (answer===''){
      if (currentNode.count===1) answer = string;
      else answer = string+currentNode.count;
    }
    return answer;
  }
}


let trie = new Trie();
let ans = [];
for (let i=0; i<input.length; i++){
  let res = trie.insert(input[i]);
  console.log(res);
  ans.push(res);

}