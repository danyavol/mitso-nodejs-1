const fs = require('fs');
const program = require('commander');

program
    .option('-i, --input <filename>', 'An input file')
    .option('-o, --output <filename>', 'An output file')
    .parse(process.argv);

const { input, output } = program.opts();



module.exports = async function execFunction(method) {
    
    let repeat = false;

    // #1 Read parameter for method
    let methodParameter;
    try {
        methodParameter = await readFile(input);
    } catch {
        // Input file was not provided. Asking user to enter input value
        repeat = true;
        process.stdout.write('Input:    ');
        methodParameter = await readValue();
    }

    // #2 Execute method
    const result = method(methodParameter);

    // #3 Save result
    try {
        await writeFile(output, result);
        process.stdout.write(`Result were saved to the output file\n`);
    } catch { }
    process.stdout.write(`Output:   ${result}\n\n`);

    // #4 Repeat if input file was not provided
    if (repeat) execFunction(method);
    else process.exit(0);
}


// Read value from stdin
function readValue() {
    return new Promise(res => {
        const listener = data => {
            process.stdin.removeListener('data', listener);
            res(data.toString());
        };
        process.stdin.on('data', listener);
    });
}

// Read value from file
function readFile(fileName) {
    return new Promise((res, rej) => {
        const readStream = fs.createReadStream(fileName, 'utf-8');
        let data = '';
        readStream.on('data', chunk => data += chunk);
        readStream.on('end', () => res(data));
        readStream.on('error', rej);
    });
}

// Save value to file
function writeFile(fileName, data) {
    return new Promise((res, rej) => {
        const writeStream = fs.createWriteStream(fileName);
        writeStream.end(data);
        writeStream.on('finish', res);
        writeStream.on('error', rej);
    });
}