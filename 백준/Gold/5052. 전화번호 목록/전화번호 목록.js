let fs = require('fs');
let [tc, ...input] = fs.readFileSync('/dev/stdin').toString().trim()
.split("\n");

class Node {
  constructor(value=""){
    this.value = value;
    this.end = false;
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
        char.value = currentNode.value + string[i];
        currentNode.child[string[i]] = char;
      }
      currentNode = currentNode.child[string[i]];
    }
    currentNode.end = true;
  }

  check(string){
    //해당 string이 다른 문자의 접두사에 포함되어 있는가?
    let currentNode = this.root;
      
    for (let i=0; i<string.length; i++){  
      if (currentNode.child[string[i]]) currentNode = currentNode.child[string[i]]; 
      else return;
    }
    //console.log("nowroot", root);       
    if (Object.entries(currentNode.child).length!=0) return 'NO';
    return 'YES';
  }
}

let answer = [];
let idx=0;

for(let s=0; s<tc; s++){
  let result = 'YES';
  let tri = new Trie();
  let len = input[idx++];
  let list = [];
    
  for (let i=0; i<len; i++){    
    list.push(input[idx++]);    
  }

  for (let i=0; i<len; i++){
    tri.insert(list[i]);
  }


  for (let i=0; i<len; i++){
    result = tri.check(list[i])
   //console.log("check결과", result);
    if (result==='NO') break;
  }
  answer.push(result);
}

console.log(answer.join("\n"));


