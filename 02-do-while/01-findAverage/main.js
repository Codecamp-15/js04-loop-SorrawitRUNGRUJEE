let inputNumber = ""
let isZero = ""
let isNegative = ""
let isString = ""
let submitValue = ""



do{
    inputNumber = prompt("input your number") || ""
    isZero = inputNumber == "0"
    isNegative = +inputNumber < 0
    isString =  inputNumber.trim() == ""
    
  

    if(isZero)alert("it's zero")
    else if(isNegative) alert("it's negative")
    else if(isString) alert("it's string")


}while(inputNumber = Number)