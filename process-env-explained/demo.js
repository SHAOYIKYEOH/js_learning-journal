// 运行：node demo.js
// fakeProcess 是我们手写的普通对象，用来模拟 Node.js 的 process。
// 它不会读取系统环境变量，也不会读取 .env 文件。
const fakeProcess = {
  env: {
    PORT: '8080'
  }
};

console.log('=== 1. 一层一层读取对象属性 ===');
console.log('整个对象 fakeProcess：', fakeProcess);
console.log('第一层 fakeProcess.env：', fakeProcess.env);
console.log('第二层 fakeProcess.env.PORT：', fakeProcess.env.PORT);
console.log('PORT 的类型：', typeof fakeProcess.env.PORT);
console.log('点号是在读取属性，这里没有调用方法。');
console.log('console.log(...) 有括号，这是调用方法。');

console.log('\n=== 2. 有 PORT：从 3000 改成 "8080" ===');
let portNumber = 3000;
console.log('进入 if 前：', portNumber, '类型：', typeof portNumber);
console.log('if 条件转成布尔值：', Boolean(fakeProcess.env.PORT));
if (fakeProcess.env.PORT) {
  console.log('条件成立，执行 if 里面的赋值');
  portNumber = fakeProcess.env.PORT;
}
console.log('执行后：', portNumber, '类型：', typeof portNumber);

console.log('\n=== 3. 没有 PORT：保留 3000 ===');
const anotherProcess = {
  env: {}
};
let anotherPortNumber = 3000;
console.log('anotherProcess.env：', anotherProcess.env);
console.log('不存在的 PORT 属性：', anotherProcess.env.PORT);
console.log('if 条件转成布尔值：', Boolean(anotherProcess.env.PORT));
if (anotherProcess.env.PORT) {
  anotherPortNumber = anotherProcess.env.PORT;
}
console.log('执行后：', anotherPortNumber, '类型：', typeof anotherPortNumber);

console.log('\n=== 4. 真正的 Node.js process.env.PORT ===');
console.log('当前环境中的 PORT：', process.env.PORT);
console.log('当前 PORT 的类型：', typeof process.env.PORT);
console.log('process 是 Node.js 提供的对象，不是我们上面创建的 fakeProcess。');
console.log('process.env 保存环境变量；它本身不会自动读取 .env 文件。');

// 练习：把上面 fakeProcess.env.PORT 的值改成以下内容，再运行：
// '9000'    → 条件成立，portNumber 变成字符串 '9000'
// ''        → 条件不成立，portNumber 保持数字 3000
// '0'       → 非空字符串，条件成立（字符串 '0' 不是数字 0）
