import chalk from 'chalk'
function menu() {
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

}

menu();