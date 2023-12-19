//By the Logic
const birthdayCakeCandles = (candles)=>{
    candles.sort()
    const Max = candles[candles.length - 1]
    let countMax = 0
    for(let i = 0; i < candles.length; i++){
        if(candles.length >= 1 && candles.length <= Math.pow(10,5) && candles[i] >= 1 && candles[i] <= Math.pow(10,7)){
            candles[i] == Max ? countMax += 1 : console
        }else{

            return "Valores invalidos!"
        }
    }
    return countMax
}
const candles = [7,2,1,7,4,2]
console.log(birthdayCakeCandles(candles))

//Simple code (Kyss)

// const Max = Math.max(...candles)
//     const tallest = candles.filter(height => height === Max)
//     return tallest.length