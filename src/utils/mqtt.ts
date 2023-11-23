/*
 * @Author: xhn000406 1127835255@qq.com
 * @Date: 2023-11-22 22:01:40
 * @LastEditors: xhn000406 1127835255@qq.com
 * @LastEditTime: 2023-11-23 21:04:00
 * @FilePath: \QRS-SERVER\src\utils\mqtt.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


const mqtt = require('mqtt')
require('dotenv').config(); 



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


client.on("message",(topic:any, message:any)=>{
    console.log('Received message:', topic, message.toString())
    
})

client.on('error',(err:Error)=>{
    console.log(err)
})

client.on("offline",()=>{
    console.log("关机")
})

}

module.exports= mqttFunction