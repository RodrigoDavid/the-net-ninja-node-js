var fs = require('fs');

// delete a file using fs
// fs.unlink('writeme.txt');

// creating a directory synchronously
// fs.mkdirSync('stuff');

// deleting a directory synchronously
// fs.rmdirSync('stuff');

// creating a directory asynchronously
// fs.mkdir('stuff', function () {
//     fs.readFile('readme.txt', 'utf8', function (err, data ) {
//         fs.writeFileSync('./stuff/writeme.txt', data);
//     });
// });

// you can't just remove a directory, you have to remove the stuff inside it
// fs.unlink('./stuff/writeme.txt', function () {
//     fs.rmdirSync('stuff');
// });