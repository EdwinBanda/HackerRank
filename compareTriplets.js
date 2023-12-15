const comparetriplets = function(a, b){
    const listA = a.toString().split("").map(Number)
    const listB = b.toString().split("").map(Number)
    const result = []
    result[0] = 0
    result[1] = 0

    for(let i = 0; i < listA.length; i++){ //Percorre se apenas o primeiro Array "listA"
        if(listA[i] > listB[i]){ //comparamos cada iterracao do listA com as iterracoes do listB, EX: comparar a[i] com b[i]
            result[0]++ 
        }
        else if(listA[i] < listB[i]){
            result[1]++
        }
        
    }
    return result
}

console.log(comparetriplets(123,321))