const minimumNumber = require('./minimumNumber');

test('return value', () => {
    expect( minimumNumber([3, 1, 2]) ).toBe(1);
    expect( minimumNumber([5, 2]) ).toBe(0);
    expect( minimumNumber([50, 39, 49, 6, 17, 28]) ).toBe(2);
    expect( minimumNumber([1, 1, 1]) ).toBe(0);
    expect( minimumNumber([2, 12, 8, 4, 6]) ).toBe(5);
});

test('type of input parameter', () => {
    const errorMessage = 'Must be an array';
    expect( () => minimumNumber(12) ).toThrow(errorMessage);
    expect( () => minimumNumber('23') ).toThrow(errorMessage);
    expect( () => minimumNumber(true) ).toThrow(errorMessage);
    expect( () => minimumNumber(false) ).toThrow(errorMessage);
    expect( () => minimumNumber({0: 1, 1: 12}) ).toThrow(errorMessage); 
});

test('minimal array length', () => {
    const errorMessage = 'Minimal length is 2';
    expect( () => minimumNumber([3]) ).toThrow(errorMessage);
    expect( () => minimumNumber([]) ).toThrow(errorMessage);
});

test('must be an array of number', () => {
    const errorMessage = 'Must be an array of numbers';
    expect( () => minimumNumber(['1', '12', '5']) ).toThrow(errorMessage);
    expect( () => minimumNumber([2, 5, '9', 8]) ).toThrow(errorMessage);
});

test('array must contain integer number', () => {
    const errorMessage = 'Number must be an integer';
    expect( () => minimumNumber([12, 1, 2.3, 1.5]) ).toThrow(errorMessage);
});


