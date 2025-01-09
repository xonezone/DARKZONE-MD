




const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "settings",

    react: "🎛️",

    alias: ["setting","env"],

    desc: "Get bot\'s settings list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeSetting =`*[ • ᴍaʟᴠɪɴ xᴍ sᴇᴛᴛɪɴɢs • ]*
*╭┈┈┈┉┉┉┉┉┄┄┄┄┄┅┅┅┅┅┅┅┅┅┅*
*┋* *➮ AUTO_READ_STATUS:* ➠ ${config.AUTO_READ_STATUS}
*┋* *➮ MODE:* ➠ ${config.MODE} 
*┋* *➮ AUTO_VOICE:* ➠ ${config.AUTO_VOICE} 
*┋* *➭ AUTO_STICKER:* ➠ ${config.AUTO_STICKER} 
*┋* *➮ AUTO_REPLY:* ➠ ${config.AUTO_REPLY} 
*┋* *➮ ALIVE_IMG:* ➠ ${config.ALIVE_IMG} 
*┋* *➮ ALIVE_MSG:* ➠ ${config.ALIVE_MSG} 
*┋* *➮ ANTI_LINK:* ➠ ${config.ANTI_LINK} 
*┋* *➮ ANTI_BAD:* ➠ ${config.ANTI_BAD} 
*┋* *➭ PREFIX:* ➠ [${config.PREFIX}]
*┋* *➮ FAKE_RECORDING:* ➠ ${config.FAKE_RECORDING} 
*┋* *➮ AUTO_REACT:* ➠ ${config.AUTO_REACT} 
*┋* *➮ HEART_REACT:* ➠ ${config.HEART_REACT} 
*┋* *➮ OWNER_REACT:* ➠ ${config.OWNER_REACT} 
*┋* *➮ BOT_NAME:* ➠ ${config.BOT_NAME}
*┋* *➮ READ_MESSAGE:* ➠ ${config.READ_MESSAGE}
*╰┈┈┉┉┉┉┉┉┉┄┄┄┄┅┅┅┅┅┅┅┅┅┅┅*

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴏʀᴅ ᴍaʟᴠɪɴ
`


await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeSetting},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
