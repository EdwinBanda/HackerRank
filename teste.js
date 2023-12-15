const replaceAll = (search, replace)=>{
    this.includes(search)
}

const teste = function(script){
    const listScript = script.split(" ")
    const vamos = listScript.map((e)=>{
        if(e == "eu"){
            return e.toUpperCase()
        }
        return e
    })
    return vamos.toString().replaceAll(',',' ')
}
a
console.log(teste("eu sou um estudante"))