/*
 * @Author: xhn000406 1127835255@qq.com
 * @Date: 2023-11-19 21:12:02
 * @LastEditors: xhn000406 1127835255@qq.com
 * @LastEditTime: 2023-11-26 20:29:23
 * @FilePath: \QRS-SERVER\src\controllers\dataInfoRouters\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Request, Response } from "express"
const {getAllDeviceInfoDao} = require("../../services/deviceInfoServices")
class deviceInfoController {
   async getAllDeviceInfoData(req:Request,res:Response){
       const result =   await getAllDeviceInfoDao()
       res.send({
        code:200,
        data:result
       })
  }

 
}

module.exports = new deviceInfoController()