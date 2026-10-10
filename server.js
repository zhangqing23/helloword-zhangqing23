const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const serverTime = new Date().toLocaleString('zh-CN');
  const html = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Hello World</title>
    <style>
        body {
            font-family: Microsoft Yahei, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 95vh;
            margin: 0;
            background-color: #f5f7fa;
        }
        .box{
            background:#fff;
            padding:40px 60px;
            border-radius:12px;
            box-shadow: 0 2px 12px #00000018;
        }
        h1{
            color:#2c3e50;
        }
        .time-text{
            font-size:18px;
            color:#666;
            margin-top:20px;
        }
    </style>
</head>
<body>
    <div class="box">
        <h1>Hello World！我是Zhangqing，我的第一个AI开发的网站</h1>
        <div class="time-text">当前服务器时间：${serverTime}</div>
    </div>
</body>
</html>
  `;
  res.send(html);
});

app.listen(port, () => {
  console.log(`服务已启动`);
});
