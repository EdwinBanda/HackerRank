const migratoryBirds = arr =>{
    let rep = []
    let maior = 0
    let mostOccur = []
    let result = 0
    
    Array.prototype.counter = function (element){
        let counter = 0
        for(let i = 0; i < this.length; i++){
            if(this[i] === element){
                counter++
            }
        }
        return counter
    }
    
    Array.prototype.removeRepeated = function (){
        let curr = [];
        curr[0] = 0
        for(let i = 0; i < this.length; i++){
            if(!curr.includes(this[i])){
                curr.push(this[i])
            }
        }
        return curr.splice(1)
    }

    Array.prototype.major = function (){
        let major = 0;
        for(let i = 0; i < this.length; i++){
            if(this[i] > major){
                major = this[i]
            }
        }
        return major
    }

    let birdId = arr.removeRepeated()

    for(let i = 0; i < birdId.length; i++){
        rep.push(arr.counter(birdId[i]))
        
    }
    maior = rep.major()

    for(let i = 0; i < arr.length; i++){
        if(arr.counter(arr[i]) === maior){
            mostOccur.push(arr[i])
        }
    }

    mostOccur.sort()

    result = mostOccur[0]

    return result
    
}
console.log(migratoryBirds([5,4,5,2,7,2]))

