/*
 * @Author: xhn000406 1127835255@qq.com
 * @Date: 2023-11-19 21:14:23
 * @LastEditors: xhn000406 1127835255@qq.com
 * @LastEditTime: 2023-11-26 20:31:25
 * @FilePath: \QRS-SERVER\src\services\dataInfoServices\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


class deviceInfoServices {

 async getAllDeviceInfoDao(){
      const result = await prisma.t_device_info.findMany()
      return result
  }


}

module.exports = new deviceInfoServices()