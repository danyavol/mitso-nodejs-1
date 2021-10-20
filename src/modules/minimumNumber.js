module.exports = function(array) {
    validate(array);

    const arraySum = array.reduce((total, curr) => total + curr);

    let newSum = arraySum - 1;
    while (!isSimpleNumber(++newSum)) {}

    return newSum - arraySum;
}

function isSimpleNumber(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function validate(array) {
    if (!Array.isArray(array)) {
        throw new Error('Must be an array');
    }
    if (array.length < 2) {
        throw new Error('Minimal length is 2');
    }
    array.forEach(item => {
        if (typeof item !== 'number') throw new Error('Must be an array of numbers');
        if (n % 1 !== 0) throw new Error('Number must be an integer');
    })
}