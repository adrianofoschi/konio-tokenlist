const fs = require('fs');
const path = require('path');

const inputFolderPath = './coins/';
const outputFolderPath = './';

const files = fs.readdirSync(inputFolderPath).map(fileName => {
    return path.join(inputFolderPath, fileName);
});

const output = {};

for (const file of files) {
    if (path.extname(file) === '.json') {
        const fileData = fs.readFileSync(file);
        const jsonData = JSON.parse(fileData);
        
        output[jsonData.address] = jsonData;
    }
}

fs.writeFileSync(`${outputFolderPath}/index.json`, JSON.stringify(output));