test('toBe匹配器', () => {
  expect('这是一个toBe').toBe('这是一个toBe')
})

test('toBe匹配器完全相等', () => {
  const obj = { number: 999 }
  // expect(obj).toBe({ number: 999 })
})

test('toEqual 内容相等可通过', () => {
  const obj = { number: 999 }
  expect(obj).toEqual({ number: 999 })
})

test('toBeNul 只匹配null', () => {
  const a = null
  expect(a).toBeNull()
  // expect(a).toBe(null)
})

test('toBeUndifined', () => {
  const a = undefined
  expect(a).toBeUndefined()
})

test('toBeDefine', () => {
  const a = 1
  expect(a).toBeDefined()
})

test('toBeTruthy', () => {
  const a = 1
  expect(a).toBeTruthy()
})

test('toBeFalsy', () => {
  const a = 0
  expect(a).toBeFalsy()
})

test('toBeGreaterThan匹配器', () => {
  const a = 10
  expect(a).toBeGreaterThan(9.9);
});

test('toBeGreaterThan匹配器', () => {
  const a = 10n
  expect(a).toBeGreaterThan(9n);
});

test(`toBeGreaterThanOrEqual()`, () => {
  const a = 10
  expect(a).toBeGreaterThanOrEqual(10);
})

test(`toBeLessThan()`, () => {
  const a = 10
  expect(a).toBeLessThan(100);
})

test(`toBeLessThanOrEqual()`, () => {
  const a = 10
  expect(a).toBeLessThanOrEqual(10);
})

test('toEqual匹配器', () => {
  const one = 0.1
  const two = 0.2
  // expect(one + two).toEqual(0.3)
})

test('toBeCloseTo', () => {
  const one = 0.1
  const two = 0.2
  expect(one + two).toBeCloseTo(0.3, 15);
})

test('toMatch()', () => {
  const a = 'qwertyuiop'
  expect(a).toMatch('iop');
})

test('toContain()', () => {
  const a = ['a', 'b', 'c', 'd']
  expect(a).toContain('c');
})

test('toContain()', () => {
  const a = ['a', 'b', 'c', 'd', 'a']
  const mySet = new Set(a)
  expect(mySet).toContain('c');
})

test('toThrow', () => {
  const a = () => {
    throw new Error('error')
  }
  expect(() => {
    a()
  }).toThrow('error');
})
test('not', () => {
  expect(1).not.toBe(2)
})