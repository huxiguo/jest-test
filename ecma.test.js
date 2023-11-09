import { getUser } from "./ecma"

test('测试es6', () => {
  expect(getUser()).toBeLessThanOrEqual(100);
});