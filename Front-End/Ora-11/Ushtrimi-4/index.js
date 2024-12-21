const calculateValuesByOperator = (parameter,valueX,valueY) => {
    switch(parameter){
        case "+":  return valueX + valueY 
        case "-":  return valueX - valueY 
        case "*":  return valueX * valueY 
        case "/":  return valueX / valueY
        default:   return 'Error'
    }
}
const operator = "-"
const value = calculateValuesByOperator(operator, 10, 2)
console.log(value)