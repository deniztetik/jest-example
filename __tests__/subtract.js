import subtract from '../subtract';

test('subtracts two numbers', () => {
    const result = subtract(3,2);
    expect(result).toBe(1);
});
