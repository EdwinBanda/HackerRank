String.prototype.replaceAll = (search, replace)=>{
    if(this.includes(search)){
        return this.join(replace)
    }
}

const script = "I am a student"

script.replaceAll(" ","-")

return script