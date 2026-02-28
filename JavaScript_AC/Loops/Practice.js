// Qs 1

// for (let number = 0; number <=100;number++) {
//     if(number%2==0){
//         console.log(number)
//     }
// }


// Qs 2

let gameNum = 33;

let userNum = prompt("Guess The Number : ");


while(userNum != gameNum){
    userNum = prompt("You Entered A Wrong Number, Guess Again");
}

console.log("You Guessed Right")