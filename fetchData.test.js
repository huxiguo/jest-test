import { getPost, getPost2, getError } from "./fetchData";

test('异步代码测试 回调函数', (done) => {
  getPost(data => {
    expect(data.id).toEqual(1)
    done()
  })
});

test('异步代码测试 返回promise', () => {
  return getPost2().then(res => {
    expect(res.data.id).toEqual(2);
  })
});

test('测试接口错误', () => {
  expect.assertions(1) // 必须执行一次
  return getError().catch(e => {
    expect(e.toString().indexOf('404' > -1)).toBeTruthy();
  })
});

test('异步代码测试 async await', async () => {
  const res = await getPost2();
  expect(res.data.id).toEqual(2);
});