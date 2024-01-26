// let theNumber = Number(prompt("Pick a number"));

// if (!Number.isNaN(theNumber)){
//     console.log("Your number is the square root of " + theNumber * theNumber);
// } else {
//     console.log('is NaN');
// }

// let num;
// if (num < 10) {
//     console.log("Small");
// } else if(num < 100) {
//     console.log("Medium");
// } else {
//     console.log("Large");
// }

// while loop to print even number
let n = 0;

// while(n <= 50){
// if (n % 2 === 0){
//     console.log(`${n} is an even number`);
// }
// n++;
// }

// while (n <= 50) {
//     console.log(n);
//     n +=2;
// }

let result = 1;
let counter = 0;

while (counter < 10) {
    result *= 2;
    counter++;
}
console.log(result);

// for loop
// let result = 1;

// for (let counter = 0; counter < 10; counter++){
//     result *= 2;
// }
// console.log(result);

// Breaking out of a loop
for (let current = 20; ; current++){
    if (current % 7 == 0){
        console.log(current);
        break;
    }
}

// Switch...case
switch (prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
        break;
    case "cloudy":
        console.log("Go outside.");
        break;
    default:
        console.log("Unkown weather type!");
        break;
}