import { createServer } from 'node:http';
import fs from 'node:fs';
// import fsPromises from 'node:fs/promises';

let count = 0;


// Server sent events (SSE)
const server = createServer(async (req, res) => {

    if (req.url === '/') {




        const htmlPage = fs.createReadStream('./stream.html')
        htmlPage.pipe(res);

    } else if (req.url === '/stream') {
        res.writeHead(200, {
            'content-type': 'text/event-stream',
            'cache-control': 'no-cache',
            connection: 'keep-alive',
        });

        setInterval(() => {
            res.write(`data: The Count is - ${count++} \n\n`);
        }, 1000);
    }


    // // Routing...
    // console.log('req', req);

    // console.log('Request received....');

    // if (req.url === '/') {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });

    //     const dataStream = fs.createReadStream('./index.html');

    //     dataStream.pipe(res);

    // } else if (req.url === '/about') {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });

    //     res.end('<h1>This is your about page</h1>');

    // } else if (req.url === '/expanses') {
    //     // APIs
    //     // Create an expense
    //     // POST

    //     if (req.method === 'POST') {
    //         // Read data from request
    //         let buff = '';

    //         req.on('data', (chunk) => {
    //             console.log('chunk', chunk);
    //             buff = buff + chunk.toString();
    //         });

    //         req.on('end', async () => {
    //             const data = await fsPromises.readFile('./db.json', 'utf-8');

    //             const dbData = JSON.parse(data);
    //             dbData.push(JSON.parse(buff));

    //             await fsPromises.writeFile(
    //                 './db.json',
    //                 JSON.stringify(dbData, null, 2)
    //             );
    //         });

    //         // Store it in json database

    //     } else if (req.method === 'GET') {
    //         // Read data from json db
    //         const data = await fsPromises.readFile('./db.json');
    //         // Return the data to client
    //         res.end(data);
    //     }
    // }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});