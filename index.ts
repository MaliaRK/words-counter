#! /usr/bin/env node

import inquirer from 'inquirer'

console.log("\n***LET STARTS WORDS COUNTING***\n");

const answer: {sentence: string} = await inquirer.prompt(
    {
        message: "Enter your sentence to count the words..  ",
        type: 'input',
        name: 'sentence'
    }
)

const words = answer.sentence.trim().split(" ");

console.log('\n', words);

console.log('\nYour sentence words count is:', words.length);
