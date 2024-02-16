const icecreamParlor = (m, arr)=>{
    const map = new Map()

    for(let i = 0; i < arr.length; i++){
        let complement = m - arr[i]
        if(map.has(complement)){
            return `${map.get(complement) + 1} ${i + 1}`
        }else{
            map.set(arr[i], i)
        }
    }
}
const amount = 4
const array = [1, 4, 5, 3, 2]
console.log(icecreamParlor(amount, array))