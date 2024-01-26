const encryption = (s)=>{
    const arr = s.split("")
    const L = s.length
    const sqrt = Math.sqrt(L)
    const r = Math.round(sqrt)
    const c = Math.ceil(sqrt)
    const finalArr = new Array
    const result = new Array

    for(let i = 0; i < r; i++){
        finalArr.push(arr.splice(0,c))
    }

    for(let i = 0; i < c; i++){
        for(let j = 0; j < r; j++){
            if(finalArr[j] && finalArr[j][i]){
                result.push(finalArr[j][i])
            }
        }
        result.push(" ")
    }

    return result.join("")
}
const string = "chillout"
console.log(encryption(string))