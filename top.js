import inquirer from "inquirer";
let total = await inquirer.prompt([
    { name: "t1", type: "number", message: "pls enter your number" },
    { name: "t2", type: "number", message: "pls enter your number" },
    { name: "operator", type: "list", message: "slect any one opration to perfrom action",
        choices: ["addition", "substraction", "multiplication", "division"]
    },
]);
if (total.operator === "addition") {
    console.log(total.t1 + total.t2);
}
else if (total.operator === "substraction") {
    console.log(total.t1 - total.t2);
}
else if (total.operator === "multiplication") {
    console.log(total.t1 * total.t2);
}
else if (total.operator === "division") {
    console.log(total.t1 / total.t2);
}
else
    (console.log);
{
    "pls enter valid value";
}
let cal = await inquirer.prompt([
    {
        type: "number",
        name: "n1",
        message: "enter yor 1st number"
    },
    {
        type: "number",
        name: "n2",
        message: "enter yor 2nd number"
    },
    {
        type: "number",
        name: "n3",
        message: "enter yor 2nd number"
    },
    {
        type: 'input',
        name: 'op',
        message: 'enter your operator:'
    },
]);
if (cal.op == '+') {
    console.log(cal.n1 + cal.n2 + cal.n3);
}
else if (cal.op == '-') {
    console.log(cal.n1 + cal.n2 - cal.n3);
}
else if (cal.op == '*') {
    console.log(cal.n1 + cal.n2 * cal.n3);
}
else if (cal.op == '/') {
    console.log(cal.n1 + cal.n2 / cal.n3);
}
if (cal.op == '+') {
    console.log(cal.n1 + cal.n2 + cal.n3);
}
else if (cal.op == '-') {
    console.log(cal.n1 + cal.n2 - cal.n3);
}
else if (cal.op == '*') {
    console.log(cal.n1 + cal.n2 * cal.n3);
}
else if (cal.op == '/') {
    console.log(cal.n1 + cal.n2 / cal.n3);
}
else {
    console.log('please enter valid numbers or operator');
}
