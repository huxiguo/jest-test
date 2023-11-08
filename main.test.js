const { add, sub } = require('./main')

test('5+5=10', () => {
  expect(add(5, 5)).toBe(10)
})

test('5-5=0', () => {
  expect(sub(5, 5)).toBe(0)
})