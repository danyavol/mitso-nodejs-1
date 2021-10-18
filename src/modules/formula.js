module.exports = function(n) {
    if (n == 0) return '1';
    
    const isOpposite = n < 0;
    if (isOpposite) n = -n;

    const array = [];
    for (let i = 0; i <= n; i++) {
        let coefficient = getCoefficient(i, n);
        if (coefficient == 1) coefficient = '';

        let numberString = getNumberString(
            { letter: 'a', power: n-i },
            { letter: 'b', power: i }
        );

        array.push(`${coefficient}${numberString}`);
    }
    const result = array.join('+');

    return isOpposite ? `1/(${result})` : result;
};



// { letter: 'a', power: 1 }, ...
function getNumberString(...numbers) {
    let result = '';
    numbers.forEach(num => {
        if (num.power == 0) result += '';
        else if (num.power == 1) result += `${num.letter}`;
        else result += `${num.letter}^${num.power}`;
    });

    return result;
}

function getCoefficient(x, y) {
    return factorial(y) / ( factorial(y-x) * factorial(x) );
}

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}