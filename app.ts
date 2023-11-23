/*
 * @Author: xhn000406 1127835255@qq.com
 * @Date: 2023-11-19 14:15:36
 * @LastEditors: xhn000406 1127835255@qq.com
 * @LastEditTime: 2023-11-23 20:21:31
 * @FilePath: \QRS-SERVER\app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import express = require('express');
const dataInfoRouter = require('./src/routers/dataInfoRouters/index');
const  mqttClient  = require( './src/utils/mqtt')

require('dotenv').config();

const app: express.Application = express();


app.use(dataInfoRouter);
mqttClient();


// 启动应用监听指定端口
app.listen(process.env.PORT, () => {
    console.log(`应用正在监听端口 ${process.env.PORT}!`);
});
