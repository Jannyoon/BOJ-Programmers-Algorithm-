function solution(s) {
    s = s.split(" ").map((v)=>v.split(""));
    
  
    
    s = s.map((v)=>v.map((s,i)=>{
        if (i===0) return s.toUpperCase();
        else return s.toLowerCase();
    }).join("")).join(" ")  
    console.log(s);
    return s;

}