const {cmd , commands} = require('../command')

cmd({
    pattern: "support",
    desc: "support bot",
    category: "main",
    react: "💖",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*
          

*🇿🇼MALVIN-XMD Support Channels💗*

👨‍💻◦ Whatsapp Channel Link:* https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z

👨‍💻◦ *Youtube Channel Link:* https://www.youtube.com/@malvintech2 

👨‍💻◦ *Github Profile Link:* https://github.com/kingmalvn 

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/7pg2gp.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
