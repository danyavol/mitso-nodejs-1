// Read value from stdin
module.exports.readValue = function readValue() {
    return new Promise(res => {
        const listener = data => {
            process.stdin.removeListener('data', listener);
            res(data.toString());
        };
        process.stdin.on('data', listener);
    });
}

// Read value from file
module.exports.readFile = function readFile(fileName) {
    return new Promise((res, rej) => {
        const readStream = fs.createReadStream(fileName, 'utf-8');
        let data = '';
        readStream.on('data', chunk => data += chunk);
        readStream.on('end', () => res(data));
        readStream.on('error', rej);
    });
}

// Save value to file
module.exports.writeFile = function writeFile(fileName, data) {
    return new Promise((res, rej) => {
        const writeStream = fs.createWriteStream(fileName);
        writeStream.end(data);
        writeStream.on('finish', res);
        writeStream.on('error', rej);
    });
}