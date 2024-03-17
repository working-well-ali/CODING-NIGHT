import inquirer from "inquirer"

let total = await inquirer.prompt([
{name:"t1",type:"number",message:"pls enter your number"},
{name:"t2",type:"number",message:"pls enter your number"},

{name:"operator",type:"list",message:"slect any one opration to perfrom action",
choices:["addition","substraction","multiplication","division"]
},

]);

if(total.operator==="addition") {
    console.log(total.t1+total.t2);
}
else if(total.operator==="substraction") {
    console.log(total.t1-total.t2);
}

else if(total.operator==="multiplication") {
    console.log(total.t1*total.t2);
}

else if(total.operator==="division") {
    console.log(total.t1/total.t2);
}
else (console.log)
{
    "pls enter valid value"
}
