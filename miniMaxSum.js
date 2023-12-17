const miniMaxSum = (arr)=>{
    const sorted = arr.sort()
    let sumMin = 0
    let sumMax = 0
    for(let i = 0; i < sorted.length - 1; i++){
        sumMin += sorted[i]
    }
    for(let j = 1; j < sorted.length; j++){
        sumMax += sorted[j]
    }
    console.log(sumMin+" "+sumMax)
    return ""
}
const array = [7,2,3,4,1,5]
console.log(miniMaxSum(array))