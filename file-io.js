const { readFileSync } = require('fs');
const fileArg = process.argv[2];
if (fileArg){
    process.stdout.write(fileArg);
} else {
    process.exit();
}