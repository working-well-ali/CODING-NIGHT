import inquirer from "inquirer"
import chalk from "chalk"

const number= Math.floor(Math.random()*5+1)
const answer= await inquirer.prompt([
    {
        name:"guessnumber",
        type: number,
        message:"pls guess the nummber between 1-5"
    }
])

if (answer.guessnumber==number){
    console.log(chalk.white.bgGreen.bold("you guess correct number"))
}
else {
    console.log(chalk.bgRed("you guess wrong number"))
}

if (answer.guessnumber > 5) {
    console.log(chalk.bgBlue("Please enter a number between 1 and 5."));
}
