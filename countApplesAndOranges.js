const countApplesAndOranges = (s,t,a,b,apples,oranges)=>{
    
    let applesOnSam = 0
    let orangesOnSam = 0
    
    const distApplesToTree = apples.map(apple => apple + a)
    const distOrangesToTree = oranges.map(orange => orange + b)

    distApplesToTree.map(apple =>{
        if(apple >= s && apple <= t){
            applesOnSam++
        }
    })
    
    distOrangesToTree.map(orange =>{
        if(orange >= s && orange <= t){
            orangesOnSam++
        }
    })
    
    
    return  distApplesToTree+"\n"+distOrangesToTree+"\n"+applesOnSam+"\n"+orangesOnSam
}
console.log(countApplesAndOranges(2,3,1,5,[-2],[-1]))