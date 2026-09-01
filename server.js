import { createServer } from 'node:http';
import fs from 'node:fs';

const server = createServer(async (req, res) => {
    // Routing...
    console.log('req', req);

    console.log('Request received....');

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // const data = await fs.readFile('./index.html');

        const dataStream = fs.createReadStream('./index.html')

        dataStream.pipe(res);
         
        // dataStream.on('data', (chunk) => {
        //     res.write(chunk)
        // });

        // dataStream.on('end', () => {
        //     res.end();
        // });



        
       
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end('<h1>This is your about page</h1>');
    } else if (req.url === '/expanses') {
        // Apis 
        // Create an expanse
        // POST

        if (req.method === 'POST') {
            // read data from request 
            let buff = ''

            req.on('data', (chunk) => {
                console.log('chunk', chunk);
                // buff = buff + data.toString() 
            })
            // Store it in json database 
        } else if (req.method === 'GET') {

            //  Read data from js db
            // Return the data to client
        }

    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});