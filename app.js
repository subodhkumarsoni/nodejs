// // common js
// // const getGreetings = require('./greeter');
// //ESM
// // import getGreetings from "./greeter.js";

// import { getGreetings } from "./greeter.js";
// const name = process.argv[2]

// const hours = new Date().getHours(); // 24 hours 

// // console.log('hours', hours)


// const greetings = getGreetings(hours)

// // good afternoon, Subodh!
// console.log(`${greetings}, ${name}!`)


//Built in operating system h 

import os from 'node:os'

console.log("CPUS", os.cpus().length);
console.log('Total Memory', os.totalmem()/ (1024*1024*1024)); //GB
console.log("Free Memory", os.freemem() / (1024 * 1024)); //MB
console.log('uptime', os.uptime() / 60 /60);  // Hours
console.log('Hostname', os.hostname());
console.log('User info', os.userInfo());
console.log('Macine', os.machine());
