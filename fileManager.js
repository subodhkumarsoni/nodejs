import * as readline from 'node:readline/promises';
import {stdin, stdout} from 'node:process';
import chalk from 'chalk'


const rl = readline.createInterface({
   input: stdin,
   output: stdout,
})



async function menu() {
   console.log(chalk.blue.bold(`\n📂 File system manager\n`));

   const options = [
      'Create Folder',
      'Create File',
      'Write to File',
      'Delete File',
      'Delete Folder',
      'List Items',
      ' Exit',
   ];

   options.forEach((opt, i) => console.log(chalk.yellow(`${i + 1}`) + chalk.white(`${opt}`)));

  const answer = await rl.question(chalk.cyan('\nSelect option: '));
  console.log('Ans: ', answer);

}

menu();