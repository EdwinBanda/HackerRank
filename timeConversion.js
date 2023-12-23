const timeConversion = (s)=>{
    const separa = s.split(":").map(Number)
    let time = ""
    if(separa[0] > 12){
        time = separa[0] - 12+":"+separa[1]+":"+separa[2]
    }else{
        time = separa[0]+":"+separa[1]+":"+separa[2]
    }
    return time
}

console.log(timeConversion("7:30:16"))