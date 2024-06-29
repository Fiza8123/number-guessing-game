import inquirer from "inquirer";
let guess = Math.floor(Math.random() * 10 + 1);
let guessnumber = await inquirer.prompt({
    message: "enter yuor number between 1-10:",
    type: "number",
    name: "yourguess",
});
if (guessnumber.yourguess === guess) {
    console.log("congratulation  !!! your guess is right ........");
}
else {
    console.log("opp's your guess is wrong");
}
