// let num = prompt(`Please enter your number`)
// let isNull = num === null
// let isNan = isNaN
// let isEmpty
// let check = num == null|| num.trim() == "" || isNaN(num)
// let ansNum = ""
// if(check)alert("please enter valid number")
// else if(+num < 1 || +num > 99) alert("Invalid Range")
// else if(+num >= 1 || +num <= 99) alert("Guess the number")

// do{
//     ansNum =  prompt("What's the Number ?") || ""
//         isEmpty = ansNum.trim() == ""
//         isNan = isNaN(ansNum)
//         outOfRange = +ansNum < 1 || +ansNum > 99;
//         if(isEmpty || isNan){
//             alert(`invalid input`)
//         }
//         else if(outOfRange){
//             alert(`Invalid range `)
//         }


// }while( isEmpty || isNan )

// let guessNumber = 2

// do{
//     isEmpty = ansNum.trim() == ""
//         isNan = ansNum = isNaN(ansNum)
//         outOfRange = +guessNumber < 1 || +guessNumber > 99;
//         if(isEmpty || isNan){
//             alert(`invalid input`)
//         }
//         else if(outOfRange){
//             alert(`Invalid range `)
//         }
//         else if(+guessNumber > +ansNum)alert("Too high")
//         else if(+guessNumber < +ansNum)alert("Too low")
// }while (+guessNumber != + ansNum)

let outOfRange = ""
let isNan = ""
let isEmpty = ""
let inputNumber = ""
let guessNumber = 32
let count = ""
let attempNumber = ""
let attempLimit = ""
do {
    inputNumber = prompt("enter you number") || ""
    outOfRange = +inputNumber > 99 || +inputNumber < 1
    isNan = isNaN(inputNumber)
    isEmpty = inputNumber.trim() == ""
    if (isNan || isEmpty) alert("Invalid input")
    else if (outOfRange) alert("Invalid range")


} while (isNan || outOfRange || isEmpty)

do {

    alert(`you have 4 attempt`)
    calcNumber = prompt("what's the number ?") || ""
    count++
    outOfRange = +guessNumber > 99 || +guessNumber < 1
    isNan = isNaN(guessNumber)
    isEmpty = calcNumber.trim() == ""
    if (count == 5) {
        alert(`you have exceeded attempt limit`)
        break
    }
    else if (isNan || isEmpty) alert("Invalid input")
    else if (outOfRange) alert("Invalid range")
    else if (+calcNumber > guessNumber) alert("too high")
    else if (+calcNumber < guessNumber) alert("too low")
    attempNumber = alert(`This is your ${count}th attempt`)



    // console.log("bruh")
} while (calcNumber != guessNumber)
