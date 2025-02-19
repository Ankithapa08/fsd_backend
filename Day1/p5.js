const fs = require('fs')
const write =()=>{
    fs.writeFile('./mydir/file.txt', 'Hello World!', (err) => {
        if (err) throw err;
        console.log('File written successfully.');
        });
}
write();