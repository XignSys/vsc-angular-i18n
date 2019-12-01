const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');

const arguments = process.argv.slice(2);

if(arguments.length < 1) {
    throw 'Missing path to delete';
}

const relativeDelPath = arguments[0];
const absoluteDelPath = path.resolve(__dirname, `../${relativeDelPath}`);

if(fs.existsSync(absoluteDelPath)) {
    console.log(`Deleting folder ${absoluteDelPath}`);
    rimraf(absoluteDelPath, function(error) {
        console.error(error);
    });
} else {
    console.log(`The folder ${absoluteDelPath} doesn't exist. Nothing to remove.`);
}
