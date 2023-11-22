/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-11-19 14:15:36
 * @LastEditors: xhn000406 1127835255@qq.com
 * @LastEditTime: 2023-11-19 21:11:10
 * @FilePath: \QRS-SERVER\src\app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import express = require('express');
const dataInfoRouter = require('./src/routers/dataInfoRouters/index')



require('dotenv').config(); 

const app: express.Application = express();

app.use(dataInfoRouter);

 

app.listen(process.env.PORT, ()=> {
console.log(`Example app listening on port ${process.env.PORT}!`);

});