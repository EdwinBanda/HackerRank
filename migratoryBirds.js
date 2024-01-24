const migratoryBirds = arr =>{
    const countOccurences = element => arr.filter(item => item === element).length

    const uniqueBirdIds = Array.from(new Set(arr)) // new Set removes all duplicated elements on arr

    const occurrences = uniqueBirdIds.map(id => countOccurences(id))

    const maxOccur = Math.max(...occurrences)

    const mostFrequentIds = uniqueBirdIds.filter(id => countOccurences(id) === maxOccur)
    mostFrequentIds.sort()
    
    return mostFrequentIds[0]
    
}
console.log(migratoryBirds([5,4,5,2,7,2]))

