const fs = require('fs');
let file = String(fs.readFileSync("file-io.json"));
console.log(`file`, file);
