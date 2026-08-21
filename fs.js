import * as fs from 'node:fs';


function creatFile(pathname) {
    //sync 
    // fs.writeFileSync(pathname, 'Hello Nodejs!\n');
    // fs.appendFileSync(pathname, 'Hello javascript!');

   // Async




    console.log('file has been created!');

}

creatFile('./hello.txt');