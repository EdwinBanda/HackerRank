const kangaroo = (x1,v1,x2,v2)=>{
    if(v1 === v2){
        return "NO"
    }

    const t = (x2 - x1) / (v1 - v2) 

    if(Number.isInteger(t) && t >= 0){
        return "YES"
    }else{
        return "NO"
    }
    
}
console.log(kangaroo(0,4,4,2))