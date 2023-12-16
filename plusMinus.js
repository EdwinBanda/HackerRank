const plusMinus = arr=>{
    const n = arr.length
    let positiveElements = 0
    let zeros = 0
    let negativeElemets = 0
    for(let i = 0; i < n; i++){
        if(n < 0 || n > 100 || arr[i] < -100 || arr[i] > 100){
            return 
        }
        if(arr[i] > 0){
            positiveElements ++
        } else if(arr[i] < 0){
            negativeElemets ++
        }else if(arr[i] === 0){
            zeros ++
        }
        
    }
    const positiveResult = positiveElements / n
    const negativeResult = negativeElemets / n
    const zerosResult = zeros / n

    return positiveResult.toFixed(6)+"\n"+negativeResult.toFixed(6)+"\n"+zerosResult.toFixed(6)   
}
const inputArray = [1,2,3,-1,-2,-3,0,0]
const result = plusMinus(inputArray)
console.log(result)