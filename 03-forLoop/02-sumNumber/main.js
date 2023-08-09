let sum = 0;
let even_sum = 0;
let odd_sum = 0;
let even_sum_1 = 0;
let odd_sum_1 = 0;
let last_result = 0;

// for(i = 1; i <= 100; i++){
//     // console.log(i)
//     plus_result = sum += i
//     // sum = sum + i 
// }

// for(i = 1; i <= 100; i++){
//    if(i  % 2 != 0) continue
// //    console.log(i)
//    even_result = even_sum +=i
// }

// for(i = 1; i < 100; i++){
//     if(i % 2 == 0) continue
//     odd_result = odd_sum +=i
// }

for(i = 1; i <= 100; i++){
    if(i  % 2 != 0) continue
 //    console.log(i)
    even_sum_1 = even_sum_1 += (i * i)
    even_result_1 = even_sum_1  
 }

 for(i = 1; i < 100; i++){
    if(i % 3 == 0) 
    odd_sum_1 = odd_sum_1 += (i* i)
    odd_result_1 = odd_sum_1
}

last_result = even_result_1 - odd_result_1



 console.log(even_result_1)
 console.log(odd_sum_1)
 console.log(last_result)




// console.log(odd_result)
// console.log(even_result)
// console.log(plus_result)