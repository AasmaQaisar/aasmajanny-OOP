#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
const welCome = async () => {
    console.log(chalk.greenBright(figlet.textSync("OOP \n")));
};
await welCome();
// OOP
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    async introduce() {
        console.log(chalk.redBright(`Hi, my name is ${this.name} and I am ${this.age} years old.`));
        const { hobby } = await inquirer.prompt([
            {
                type: 'input',
                name: 'hobby',
                message: (chalk.yellowBright('What is your favorite hobby?')),
            },
        ]);
        console.log(chalk.redBright(`My favorite hobby is ${hobby}.`));
    }
}
async function startProgram() {
    const { name, age } = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: (chalk.yellowBright('What is your name?')),
        },
        {
            type: 'input',
            name: 'age',
            message: (chalk.yellowBright('What is your age?')),
            validate: (value) => {
                const parsedValue = parseInt(value);
                if (isNaN(parsedValue)) {
                    return 'Please enter a valid number';
                }
                return true;
            },
        },
    ]);
    const person = new Person(name, parseInt(age));
    await person.introduce();
}
startProgram();
