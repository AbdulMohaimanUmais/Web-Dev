// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



// Using fs module (File System)
const fs = require('fs')

fs.writeFile('umais.txt', "Mudassar is a good boy. ", ()=>{
    console.log("File created.")
});

fs.appendFile('mud.txt', " Yes Ofcourse.", ()=>{
    console.log('File added.')
})