/*
 * @Author: xhn000406 1127835255@qq.com
 * @Date: 2023-11-22 22:01:40
 * @LastEditors: xhn000406 1127835255@qq.com
 * @LastEditTime: 2023-11-26 22:01:36
 * @FilePath: \QRS-SERVER\src\utils\mqtt.ts
 * @Description: 连接mqtt并且用socketio发送数据给前端
 */



const mqtt = require('mqtt')
require('dotenv').config(); 
import { PrismaClient } from '@prisma/client'
import { mqttData } from './type';
import { getDate } from './getDate';

const prisma = new PrismaClient()

const updateLastTime = async (Group_id:string,lastTime:string) =>{
  await  prisma.t_device_info.updateMany({
    where:{
      group_id:Group_id
    },data:{
      update_time:lastTime
    }
  })
}


let options = {
  clean: true,	
 
  connectTimeout: 4000,	
  reconnectPeriod: 1000,	
  clientId:'qrs-server',
  username: process.env.MQTT_USERNAME,
  password: process.env.MQTT_PASSWORD,
}

const mqttFunction = ()=>{
const client = mqtt.connect(process.env.MQTT_URL ,options);
client.on('connect', () => {
  client.subscribe('gkdgr',(err:Error)=>{
   
  })
 
  client.subscribe('ESP32/40:91:51:84:94:C0/status',()=>{
    console.log("订阅成功")
  })
});

  

client.on("message",async (topic:any, message:any)=>{
      
    const tiemStamp = new Date().getTime()
    console.log(tiemStamp)
    const returnData: mqttData = JSON.parse(message.toString())
    let  newTime  = 1
    let selectIndex= 0

    const resultData = await prisma.t_device_data.findMany({
      where:{
        group_id:returnData.GroupID
      },
      select:{
         id:true,
         timestamp:true,
         update_time:true 
      },
      orderBy:{
        timestamp:"asc"
      }
    })
   
    if(resultData != null && resultData.length > 0){
      const {id,timestamp : oldTimestamp  }= resultData[resultData.length -1]
      newTime =  tiemStamp -  Number(oldTimestamp)
     
    }

  //  if(newTime > 3600000){
  //   await 
  //  }
 
  if(resultData.length < 24 &&newTime > 36000 || newTime === 1){
   const {GroupID, UserID,CO2,TVOC,CH2O,PM2_5,PM10,temper,hud, DC} = returnData
   await prisma.t_device_data.create({
    data:{
      group_id:GroupID,
      update_time:getDate(tiemStamp),
      timestamp:tiemStamp + '',
      user_id:UserID,
      co2:CO2,
      tvoc:TVOC,
      ch20:CH2O,
      pm2_5:PM2_5,
      pm10:PM10,
      temper:temper,
      hud:hud,
      dc:DC
    }
   })
  
  }

  if(resultData.length  === 24 &&newTime > 2){
    console.log('更改成功')
selectIndex = resultData[0].id
const {GroupID, UserID,CO2,TVOC,CH2O,PM2_5,PM10,temper,hud, DC} = returnData
await prisma.t_device_data.update({
  where:{
    id:selectIndex
  },data:{
    group_id:GroupID,
      update_time:getDate(tiemStamp),
      timestamp:tiemStamp + '',
      user_id:UserID,
      co2:CO2,
      tvoc:TVOC,
      ch20:CH2O,
      pm2_5:PM2_5,
      pm10:PM10,
      temper:temper,
      hud:hud,
      dc:DC
  }
})
  }
})

client.on('error',(err:Error)=>{
    console.log(err)
})

client.on("close",(e:any) =>{
  console.log(e)
})

client.on("offline",(e:any)=>{
    console.log("关机")
    console.log(e)
})

}
module.exports= mqttFunction