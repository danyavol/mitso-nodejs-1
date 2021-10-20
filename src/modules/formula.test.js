const formula = require('./formula');

test('return value', () => {
    expect(formula(0)).toBe('1');
    expect(formula(1)).toBe('a+b');
    expect(formula(-2)).toBe('1/(a^2+2ab+b^2)');
    expect(formula(5)).toBe('a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5');
});

test('not number', () => {
    const errorMessage = 'Must be a number';
    expect(() => formula('5')).toThrow(errorMessage);
    expect(() => formula([5])).toThrow(errorMessage);
    expect(() => formula(true)).toThrow(errorMessage);
    expect(() => formula(false)).toThrow(errorMessage);
    expect(() => formula({cat: 'cat'})).toThrow(errorMessage);
});

test('not integer number', () => {
    const errorMessage = 'Number must be an integer';
    expect(() => formula(5.2)).toThrow(errorMessage);
    expect(() => formula(-4.00001)).toThrow(errorMessage);
});