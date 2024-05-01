function solution(s) {
    s = s.split(" ").map((v)=>v.split(""));
   
    
    s = s.map((v)=>v.map((val,i)=>{
        if (i%2===0) return val.toUpperCase();
        else return val.toLowerCase();
    }).join("")).join(" ");

    return s;
}