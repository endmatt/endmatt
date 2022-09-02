let { downloadContentFromMessage } = (await import('@adiwajshing/baileys'));

export async function before(m, { isAdmin, isBotAdmin }) {
 
let chat = db.data.chats[m.chat]
if (/^[.~#/\$,](read)?viewonce/.test(m.text)) return
if (!chat.antiver || chat.isBanned) return
 
if (m.mtype == 'viewOnceMessage') {
let msg = m.message.viewOnceMessage.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])}
if (/video/.test(type)) {
return this.sendFile(m.chat, buffer, 'error.mp4', `${msg[type].caption}\n\n*𝙈𝘼𝙎𝙏𝙀𝙍 𝙔𝙊 𝙇𝙊 𝙑𝙀𝙊 𝙏𝙊𝘿𝙊 𝘼𝙌𝙐Í* 😎\n*𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋 𝙉𝙊𝙏𝙃𝙄𝙉𝙂 𝙄𝙎 𝙃𝙄𝘿𝘿𝙀𝙉!!*`, m)
} else if (/image/.test(type)) {
return this.sendFile(m.chat, buffer, 'error.jpg', `${msg[type].caption}\n\n*𝙈𝘼𝙎𝙏𝙀𝙍 𝙔𝙊 𝙇𝙊 𝙑𝙀𝙊 𝙏𝙊𝘿𝙊 𝘼𝙌𝙐Í* 😎\n*𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋 𝙉𝙊𝙏𝙃𝙄𝙉𝙂 𝙄𝙎 𝙃𝙄𝘿𝘿𝙀𝙉!!*`, m)
}}}
