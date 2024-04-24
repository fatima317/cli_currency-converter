#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    PKR: 1, // base currency
    USD: 0.0036,
    SAR: 0.014,
    AED: 0.013,
    IQD: 4.71,
    EUR: 0.0034,
    CNY: 0.026,
    TRY: 0.12,
};
const anwser = await inquirer.prompt([
    {
        name: "input1",
        message: "Select your currency from",
        type: "list",
        choices: ["PKR", "USD", "SAR", "AED", "IQD", "EUR", "CNY", "TRY"],
    },
    {
        name: "input2",
        message: "Select your currency to",
        type: "list",
        choices: ["PKR", "USD", "SAR", "AED", "IQD", "EUR", "CNY", "TRY"],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount ",
    }
]);
let fromAmount = currency[anwser.input1];
let toAmount = currency[anwser.input2];
let amount = anwser.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
