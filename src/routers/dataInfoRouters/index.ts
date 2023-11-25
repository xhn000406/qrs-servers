/*
 * @Author: xhn000406 1127835255@qq.com
 * @Date: 2023-11-19 21:06:51
 * @LastEditors: xhn000406 1127835255@qq.com
 * @LastEditTime: 2023-11-19 21:11:20
 * @FilePath: \QRS-SERVER\src\routers\dataInfoRouters.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');



const dataInfoRouter = express.Router()
const {getAllInfoData} = require("../../controllers/dataInfoRouters/index")



dataInfoRouter.post('/dataInfo',getAllInfoData)

module.exports = dataInfoRouter 

export{}