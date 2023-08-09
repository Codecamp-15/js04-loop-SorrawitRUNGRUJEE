let n = +prompt("Enter your number")
let sum = 0
while (n){
    remainder = n % 10;
    n = (n - remainder) / 10;
    sum += remainder;
    console.log(remainder)
    count++;
}
console.log(sum)
