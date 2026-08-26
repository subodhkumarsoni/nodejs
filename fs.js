import fs from 'node:fs/promises';

async function deleteFolder(folderPath) {
    await fs.rm(folderPath, {recursive: true})
}

async function deleteFile(filepath) {
    await fs.unlink(filepath);
}


async function readFile(pathname) {
   const data = await fs.readFile(pathname, 'utf-8')
   console.log('data', data)
}


async function createFolder(foldername) {
    await fs.mkdir(foldername, {recursive: true});
}

async function writeToFile(pathname, content = '') {
    await fs.appendFile(pathname, content);
}

async function createFile(pathname, content = '') {
    await fs.writeFile(pathname, content);
}

async function getFileInfo(filePath) {
    const stats = await fs.stat(filePath)
    
    return {
        size: `${(stats.size / 1024).toFixed(2)} KB`,
        created: stats.birthtime.toLocaleString(),
        modified: stats.mtime.toLocaleString(),
    };
   
}

 getFileInfo('./hello.txt').then(data => {
     console.log('data', data);
 });
// console.log(stats);

// createFile('./hello.txt', 'Hello Nodejs! \n')
// createFolder('./contents/images/logos');
// readFile('./hello.txt')
// deleteFile('./hello.txt');
// deleteFolder('./contents');






// async function creatFile (pathname) {
//     try {
//          await fs.writeFile (pathname, 'Hello Nodejs!\n');
//           await fs.appendFile (pathname, 'Hello Javascript!\n');
//     } catch(err) {
//         console.log('err', err);
//     }
    
//      console.log('File Written!');
// }

// creatFile('./hello.txt');



// function creatFile(pathname) {

//     //sync 
//     // fs.writeFileSync(pathname, 'Hello Nodejs!\n');
//     // fs.appendFileSync(pathname, 'Hello javascript!');

//     // Async 
//     // Error first callbacks
//     fs.appendFile(pathname, 'Hello Nodejs!\n', (err) => {
//         if (err) {
//             console.log('something went wrong while creting file.');
//             return
//         }


//         console.log('File has been created Synchronously.')

//     });


    
//      fs.appendFile(pathname, 'Hello javascript!\n', (err) => {
//         if (err) {
//             console.log('something went wrong while creting file.');
//             return
//         }


//         console.log('File has been created Synchronously.')

//     });
    




//     console.log('file operation done!');

// }

// creatFile('./hello.txt');