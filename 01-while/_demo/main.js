console.log("Let's learn while loop")
let i = 1
while( i <= 20 ){

    if(i % 3 == 0 && i % 5 ==0){
        console.log("Fizz Buzz")
    }
    else if( i % 3 == 0){
        console.log("fizz")

    }
    else if(i % 5 == 0){
        console.log("buzz")
    }

    else 
     console.log(i)

    i++
}

// console.log("Hello")
// while(i <= 10 ){
//   if(i % 3 == 0)  {
//     console.log(i)
//   }
//   i++
// }


// while(i < 20){
//     if (i % 5 == 0){
//         console.log(String(i) + " " + "High five")
//     }
//     else if(i % 3 == 0){
//         console.log(String(i))
//     }
//     i++
// }


console.log("It finally end")