const fs = require('fs');
const program = require('commander');
const { readFile, readValue, writeFile } = require('./helpers');

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

    // #2 Parse parameter and Execute method
    let result;
    try {
        methodParameter = JSON.parse(methodParameter);

        result = method(methodParameter);
    } catch (err) {
        if (err instanceof SyntaxError) {
            err.message = 'Unable to parse input parameter'
        }
        process.stdout.write('Input error: ' + err.message + '\n\n');
        if (repeat) return execFunction(method);
        else return process.exit(0);
    }

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
