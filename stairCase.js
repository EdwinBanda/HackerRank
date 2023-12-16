const stairCase = (n)=>{
    if(n <= 0 || n > 100){
        return
    }
    let x = ""
    let space = " "
    for(let i = 0; i < n; i++){
        x += "#"
        console.log(space.repeat(n-i-1)+""+x)
    }
    return ""
}
console.log(stairCase(6))