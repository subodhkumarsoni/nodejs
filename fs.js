import * as fs from 'node:fs';


function creatFile(pathname) {
    //sync 
    // fs.writeFileSync(pathname, 'Hello Nodejs!\n');
    // fs.appendFileSync(pathname, 'Hello javascript!');

    // Async 
    // Error first callbacks
    fs.appendFile(pathname, 'Hello Nodejs!\n', (err) => {
        if (err) {
            console.log('something went wrong while creting file.');
            return
        }


        console.log('File has been created Synchronously.')

    });


    
     fs.appendFile(pathname, 'Hello javascript!\n', (err) => {
        if (err) {
            console.log('something went wrong while creting file.');
            return
        }


        console.log('File has been created Synchronously.')

    });
    




    console.log('file operation done!');

}

creatFile('./hello.txt');