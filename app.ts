/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-11-19 14:15:36
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-19 15:05:16
 * @FilePath: \QRS-SERVER\src\app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import express = require('express');
require('dotenv').config(); 

const app: express.Application = express();

app.get('/', (req, res) => {
res.send('Hello World!');
});

app.listen(process.env.PORT, ()=> {
console.log(`Example app listening on port ${process.env.PORT}!`);

});