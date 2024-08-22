Mark_height = 1.69
John_height = 1.88
Mark_mass = 78
John_mass = 95

function calBMI(mass, height) {
    BMI = mass / (height * height)
    return BMI;
}
console.log(`Mark's BMI ${calBMI(Mark_mass,Mark_height)}`)
console.log(`John's BMI ${calBMI(John_mass,John_height)}`)

markHigherBMI = (calBMI(Mark_mass, Mark_height) > calBMI(John_mass, John_height))
console.log(markHigherBMI)