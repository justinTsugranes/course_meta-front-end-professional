const timesTwo = require('./timesTwo');
const { default: TestRunner } = require("jest-runner");

// Write the first test
test('returns the number times 2', () => {
    expect(timesTwo(10)).toBe(20)
});