Mark_height = 1.69
John_height = 1.88
Mark_mass = 78
John_mass = 95
    //data2
Mark_height_2 = 1.88
Mark_mass_2 = 95
John_height_2 = 1.76
John_mass_2 = 85
    //test data1
function calBMI(mass, height) {
    BMI = mass / (height * height)
    return BMI;
}
Mark_BMI_1 = calBMI(Mark_mass, Mark_height)
John_BMI_1 = calBMI(John_mass, John_height)
console.log(`Mark's BMI ${Mark_BMI_1}`)
console.log(`John's BMI ${John_BMI_1}`)
markHigherBMI = (calBMI(Mark_mass, Mark_height) > calBMI(John_mass, John_height))
console.log(markHigherBMI)
    //test data2
console.log("Apply for data 2")
John_BMI = calBMI(John_mass_2, John_height_2)
Mark_BMI = calBMI(Mark_mass_2, Mark_height_2)
console.log(`Mark's BMI  ${Mark_BMI}`)
console.log(`John's BMI ${John_BMI}`)
markHigherBMI2 = (Mark_BMI > John_BMI)
console.log(`Mark has a higher BMI than John: ${markHigherBMI2}`)
    //Exer2
console.log("Exercise 2: ")
if (Mark_BMI > John_BMI) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
}
// Exer2.1
console.log(`Mark's BMI (${Mark_BMI_1.toFixed(1)}) is higher than John's (${John_BMI_1.toFixed(1)})`)