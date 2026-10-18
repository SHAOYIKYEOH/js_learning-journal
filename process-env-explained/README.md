# 用 object 理解 process.env.PORT

右键 demo.html，选择 Open with Live Server。
页面会直接显示 console.log 的输出；按 F12 打开 Console 也能看到。
修改 demo.html 的学习示例中 PORT 的值并保存，可以观察 if 的结果。

浏览器没有 Node.js 内置的 process，因此 HTML 使用普通对象 fakeProcess 演示。
原来的 demo.js 保留为 Node.js 版本，可以用 node demo.js 运行。
