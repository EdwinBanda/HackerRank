const gradingStudents =  grades =>{
    const finalValues = []

    for(let grade of grades){
        if(grade < 38){
            finalValues.push(grade)
        }else{
            let nextMultipleOfFive = Math.ceil(grade / 5) * 5
            if(nextMultipleOfFive - grade < 3){
                finalValues.push(nextMultipleOfFive)
            }else{
                finalValues.push(grade)
            }
        }
    }
    for(let grade of finalValues){
        console.log(grade)
    }
    
}
const marks = [73,67,38,33]
const results = gradingStudents(marks)













// const gradingStudents =  grades =>{
//     for(let i = 0; i < grades.length; i++){
//         if(grades[i] < 38){
//             console.log(grades[i])
//         }else{
//             for(let j = 1; j < 3; j++){
//                 if(grades[i] % 5 !== 0){
//                     grades[i]++
//                 }
//             }
//             if(grades[i] % 5 !== 0){
//                 console.log(grades[i] - 2)
//             }else{
//                 console.log(grades[i])
//             }
//         }
//     }
    
// }
// const marks = [73,67,38,33]
// console.log(gradingStudents(marks))

