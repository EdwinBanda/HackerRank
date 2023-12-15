const aVeryBigSum = ar =>{
    if(ar.length > 10){
        return "Array only supports 10 elements inside"
    } 
    
    for(let i = 0; i < ar.length; i++){
        if(ar[i] < 0 || ar[i] > Math.pow(10,10) || typeof(ar[i]) != 'number'){
            return "Valores invalidos!"
        }
    }
    return ar.reduce((acum, atual)=>{
        return acum + atual
    })
    
}
const inputArray = [1000000001,1000000002,1000000003,1000000004,1000000005]
const result = aVeryBigSum(inputArray)
console.log(result)









// arr.map((e)=>{
//     if(e < 0 || e >= Math.pow(10,10) || e != Number){
//         return "Valores invalidos!"
//     }
// })