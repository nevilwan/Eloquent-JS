// For numbers divisible by 3, print "Fizz"
// instead of the number, and for numbers divisible by 5 (and not 3), print
// "Buzz" instead
// "FizzBuzz
// " for numbers that are divisible by both 3 and 5 (and still print "Fizz"
// or "Buzz" for numbers divisible by only one of those

// for (let x = 0; x <= 100; x++){
//     if(x % 3 == 0 && x <= 100){
//         console.log("Fizz");
//     }
// }

for (let x = 1; x <= 100; x++) {
    if (x % 15 == 0){
        console.log("FizzBuzz");
    } else if (x % 5 == 0){
        console.log("Buzz");
    } else if(x % 3 == 0){
        console.log("Fizz");
    } else {
        console.log(x);
    }
}

// using ternary operator, falsey, truthy
for (let i = 0; i < 100;) {
    console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
}