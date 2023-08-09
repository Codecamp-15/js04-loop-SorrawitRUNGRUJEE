console.log('Learn counting loop')
// parenthesis () 
// Bracket {}
// Square Bracket
console.log('here we go')

// for(let i = 0; i < 3; i++ ){
//     console.log("Hello")
//     console.log('CodeCamp')
//     // if(i === 0){
//     //     break
//     // }
// }

// for(i = 0; i <=20; i++)
// if(i % 2 ===0)console.log(i)
// for(i = 2; i <=20;i = i+2 ){
//     console.log(i)
// }

// for(i = 1; i <= 20; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("Fizbuzz")
//     }
//     else if( i % 5 === 0){
//         console.log("buzz")
//     }
//     else if(i % 3 === 0){
//         console.log("fizz")
//     }
//     else console.log(i)
// }
// for(i = 1; i <= 20; i++){
//     if(i % 3 === 0 && i % 5 === 0)console.log("Fizbuzz");
//     else if( i % 5 === 0)console.log("buzz");
//     else if(i % 3 === 0) 
//     continue;
//     else console.log(i);
// }

// for(i =1; i<=20;i++){
//     if(i%2==0) console.log(i)
//     else continue;
//     console.log("even")
// }

// let str = ""

// for(i = 1; i<= 10; i++){
//     if(i % 3 === 0) continue
//     str = str + i
//     //short had str += i
// }

// remove vowel
// let src = "codecamp"
// let res = ""
// for(i=0; i < src.length; i++){
//     if(src[i] === "a" 
//     || src[i] ==="o" 
//     || src[i] === "e") continue
//     else console.log(i,src[i])
//     res += src[i]
    
// }


// console.log(res)
// console.log(i)
// console.log(count)

// nested loop
for(i = 1; i <= 12; i++){
    // console.log(`${i} * 1 = ${i * 1}`)
    console.log(`มาท่องสูตรคูณแม่${i}กัน`)
    for(let j =1; j <= 12; j++){
        console.log(`${i} * ${j} = ${i * j}`)
    }
    // for(i = 0; i <= 12; i++){

    // }
}
console.log("it's end here")