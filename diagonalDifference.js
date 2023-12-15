const diagonalDifference = (arr)=>{
    let sumFirstDiag = 0
    let sumSecDiag = 0
    for(let i = 0; i < arr.length; i++){
        sumFirstDiag += arr[i][i]
        sumSecDiag += arr[i][arr.length -i -1]
    }
    return sumFirstDiag > sumSecDiag ? sumFirstDiag - sumSecDiag : sumSecDiag - sumFirstDiag
}
const matrix = [
    [1,2,3]
    ,[4,5,6]
    ,[9,8,9]
]
const result = diagonalDifference(matrix)
console.log(result)

//This one was so challenging, specially at row: 6 where I had to iterate the second diagonal from back to the start [arr.length -i -1] subtracting 1 for each iteration

