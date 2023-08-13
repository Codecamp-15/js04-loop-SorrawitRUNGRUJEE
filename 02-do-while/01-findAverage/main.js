let inputNumber = ""
let isZero = ""
let isNegative = ""
let isString = ""
let sum = 0
let lap = 0
let average



do{
    inputNumber = prompt("input your number") || ""
    isZero = "0"
    isNegative = +inputNumber < 0
    isString =  inputNumber.trim() == ""
    if(isNegative) inputNumber = 0
    sum += +inputNumber
    lap++
    console.log(sum)
    average = sum / (lap-1)
    
    


}while(inputNumber != isZero && inputNumber != isString && inputNumber != isNegative)

console.log(` total sum is ${sum} with the average of ${average}`)