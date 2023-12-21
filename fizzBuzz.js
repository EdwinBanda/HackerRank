function fizzBuzz(n) {
    for(let i = 1; i <= n; i++){
        if(n > 0 && n < 2 * Math.pow(10,5)){
            if(i % 3 === 0 && i % 5 === 0){
                console.log("FizzBuzz")
            }else if(i % 3 === 0 && i % 5 !== 0){
                console.log("Fizz")
            }else if(i % 5 === 0 && i % 3 !== 0){
                console.log("Buzz")
            }else{
                console.log(i)
            }
        }else{

            return "Valor invalido!"
        }
    }
    return ""

}
console.log(fizzBuzz(15))