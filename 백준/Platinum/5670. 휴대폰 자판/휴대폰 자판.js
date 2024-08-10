let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

class Node {
  constructor(value=''){
    this.value=value;
    this.end=false;
    this.count=0;
    this.child={};
  }
}

class Trie {
  constructor(){
    this.root = new Node();
  }

  insert(string){
    let currentNode = this.root;
    for (let i=0; i<string.length; i++){
      let char = new Node(string[i]);
      if (!currentNode.child[string[i]]){
        char.value = currentNode.value + string[i]; //root부터 현재 문자열까지 value 프로퍼티에 저장
        currentNode.child[string[i]] = char;
      }
      currentNode = currentNode.child[string[i]];
    }
    currentNode.end = true;
  }

  search(string){
    let currentNode = this.root;
    for (let i=0; i<string.length; i++){
      //매 회차마다 자식노드들의 개수를 확인해야 한다.
      let children = Object.entries(currentNode.child);
      if (i===0){
        currentNode.child[string[i]].count = currentNode.count+1;
      }
      else if (children.length===1 && currentNode.child[string[i]]){
        if (currentNode.end) currentNode.child[string[i]].count = currentNode.count+1;
        else currentNode.child[string[i]].count = currentNode.count;
      }
      else currentNode.child[string[i]].count = currentNode.count+1;

      currentNode = currentNode.child[string[i]];
    }

    return currentNode.count;
  }
}

let result = [];
let idx = 0;
while(idx<input.length){
  let num = input[idx++];
  num = +num;
  let list = [];
  for (let i=0; i<num; i++){
    list.push(input[idx++]);
  }

  const trie = new Trie();
  for (let i=0; i<list.length; i++){
    trie.insert(list[i]);
  }

  let ans = [];
  for (let i=0; i<list.length; i++){
    ans.push(trie.search(list[i]));
  }

  let total = ans.reduce((prev, curr)=>prev+curr, 0);
  result.push((total/num).toFixed(2)); 
}
console.log(result.join("\n"));