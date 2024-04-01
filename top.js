#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let totalamount = 56000;
let mypin = 8553;
let { pindetails } = await inquirer.prompt([
    {
        type: "input",
        name: "pindetails",
        message: "enter your pin: ",
    }
]);
if (pindetails == mypin) {
    let choice = await inquirer.prompt([
        {
            name: "option",
            message: "enter your option",
            type: "list",
            choices: ['withdrawal', 'fastcash', 'check balance', '']
        }
    ]);
    if (choice.option === "check balance") {
        console.log("your current amount is ", (chalk.green ` ${totalamount}`));
    }
    if (choice.option === "fastcash") {
        let options2 = await inquirer.prompt([
            {
                name: "fast",
                message: "choose amount for fast transaction",
                type: "list",
                choices: [10000, 15000, 20000, 30000]
            }
        ]);
        if (options2.fast == 10000 || options2.fast == 15000 || options2.fast == 20000 || options2.fast == 30000) {
            console.log(chalk.green("thanks for transaction"));
            totalamount -= options2.fast;
            console.log(chalk.yellowBright("your remaining balance is:" + totalamount));
        }
    }
    if (choice.option === "withdrawal") {
        let option3 = await inquirer.prompt([
            {
                name: "withdraw",
                message: "write your payment",
                type: "input"
            }
        ]);
        if (option3.withdraw === "") {
            console.log(chalk.bgRed("Sorry, you need to write a payment."));
        }
        else if (option3.withdraw > `${totalamount}`) {
            console.log(chalk.bgRed("the cash is out of range your current balance is", ` ${totalamount}`));
        }
        else {
            totalamount -= option3.withdraw;
            console.log(chalk.yellowBright("thank you!", "your remaining balance is:" + totalamount));
        }
    }
}
else {
    console.log(chalk.bgRed("wrong password"));
}
