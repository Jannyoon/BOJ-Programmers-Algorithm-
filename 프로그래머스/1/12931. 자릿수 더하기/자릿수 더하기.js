function solution(n)
{
    n = n.toString();
    n = n.split("").map(Number);
    return n.reduce((prev,cur)=>prev+cur,0);
    
}