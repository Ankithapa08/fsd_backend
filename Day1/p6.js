const fs = require('fs');
const Append =()=>{
    data = "I am appended data"
    fs.appendFile('file.txt', data, (err) => {
        if (err) throw err;
        console.log('Saved!');
        });
}
Append();
