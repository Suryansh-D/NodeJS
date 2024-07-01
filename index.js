const fs = require('fs');
// const data = fs.readFileSync('file.txt', 'utf8');
// console.log(data);

// fs.writeFile('file.txt', 'Hello World!', (err) => {
//   console.log('The file has been saved!');
// });

//---------------------------------------------------------------

// fs.appendFile('file.txt', ' Namaste World!', (err) => {
//   console.log('The data has been appended!');
// });

//---------------------------------------------------------------

// fs.mkdir('dir1', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Directory created successfully!');
// });

//---------------------------------------------------------------

// fs.rmdir('dir1', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Directory deleted successfully!');
// });

//---------------------------------------------------------------

// fs.rename('file.txt', 'newFile.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File renamed successfully!');
// });

//---------------------------------------------------------------

// const p = '/Users/scaler/Desktop/Node/newFile.txt'
// const path = require('path');

// const dir = path.dirname(p);
// const extension = path.extname(p);
// console.log(dir);
// console.log(extension);
// console.log(path.basename(__filename));

//---------------------------------------------------------------

//move newFile.txt to dir1
// fs.rename('newFile.txt', 'dir1/newFile.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File moved successfully!');
// });

//---------------------------------------------------------------

//copy newFile.txt
// fs.copyFile('dir1/newFile.txt', 'copyFile.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File copied successfully!');
// });

//---------------------------------------------------------------

 const http = require('http');
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('<html> <head> <title> Node.js </title> </head> <body> <h1> Hello World! </h1> </body> </html>');
//     res.end();
// });

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

//---------------------------------------------------------------

//manage user login, if request is /login then show login page else show home page
const server = http.createServer((req, res) => {
    if (req.url === '/login') {
        res.write('<html> <head> <title> Login Page </title> </head> <body> <h1> Login Page </h1> </body> </html>');
        res.end();
    } else {
        res.write('<html> <head> <title> Home Page </title> </head> <body> <h1> Home Page </h1> </body> </html>');
        res.end();
    }
});
