const main = require('./main');

test('adds 1 + 2 to equal 3', () => {
  expect(main(1, 2)).toBe(3);
});