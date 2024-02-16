
function findTarget(target,array){
    let atual = Math.ceil(array.length / 2)

    for(item of arr){
        if(arr.includes(target) == true){
            if(arr[atual] > target){
                atual--
            }else if(arr[atual] < target){
                atual++
            }else{
                return `Target found ${target} at ${arr.indexOf(target)}`
            }
        }else{
            return "No target found"
        }
    }
}
const target = 16
const arr = [0,1,2,3,4,5,6,7,8,9,6]
console.log(findTarget(target,arr))

// console.log(arr[atual])