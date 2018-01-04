var fs = require('fs');

// reading a file synchronously
// first: name of the file;
// second: encoding.
var readme = fs.readFileSync('readme.txt', 'utf8');

// writing a file synchronously
// first: name of the file;
// second: content of the file.
fs.writeFileSync('writeme.txt', readme);

// reading a file asynchronously
// this version don't block the code
var readme = fs.readFile('readme.txt', 'utf8', function (err, data) {
    console.log(data);
    fs.writeFileSync('secondfile.txt', data);
});

console.log('This text will appear first than line 16');