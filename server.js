import {createServer} from 'node:http'


const server = createServer((req, res) => {
    // Routing...
    console.log('req',req)
    
    console.log('Request received....');
    res.writeHead(200, {'content-type' : 'text/html'})


    res.end('<h1>Hello from Node Js Server!</h1>');
})

server.listen(3000, () => {
    console.log('Server is listing on port 3000')
});