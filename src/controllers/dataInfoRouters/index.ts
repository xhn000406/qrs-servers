/*
 * @Author: xhn000406 1127835255@qq.com
 * @Date: 2023-11-19 21:12:02
 * @LastEditors: xhn000406 1127835255@qq.com
 * @LastEditTime: 2023-11-19 21:16:25
 * @FilePath: \QRS-SERVER\src\controllers\dataInfoRouters\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Request, Response } from "express"


class dataInfoController {
  getAllInfoData = async (req:Request, res:Response) => {
     res.send({
        data:"123",
        code:200
     })
  }

 
}

module.exports = new dataInfoController()