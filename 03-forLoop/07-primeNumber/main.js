// let i = prompt("enter number")

// let n = prompt(`Enter your number`)

for(n= 2; n <=100; n++){
    let isPrime = true
    
    for(i = 2; i < n; i++){
        if(n % i == 0) isPrime = false;
    }
    if(isPrime)console.log(n)
}

// if(isPrime) alert("that's a prime")
// else alert("That's not a prime")
