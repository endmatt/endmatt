let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => { 
const sections = [
{
title: `πππππΌ πΏπ πΎππππππππΌπΎπππ`,
rows: [
{title: "π π½ππππππππΏπΌ | ππππΎπππ", description: "πΎπ€π£π©ππ£πππ€ ππ π‘π π½πππ£π«ππ£πππ π₯ππ§π ππ‘ ππ§πͺπ₯π€\nπΎπ€π£π©ππ£π© π€π π©ππ πππ‘ππ€π’π ππ€π§ π©ππ ππ§π€πͺπ₯", rowId: `${usedPrefix + command} welcome`},
{title: "π πππΏπ πππ½πππΎπ | πππ½πππΎ πππΏπ", description: "ππ¨ππ§ ππ‘ π½π€π© ππ£ ππ€ππ€ ππͺππ‘πππ€ π€ ππ§ππ«πππ€\nππ¨π π©ππ π½π€π© ππ£ ππͺππ‘ππ π€π§ ππ§ππ«ππ©π ππ€ππ", rowId: `${usedPrefix + command} public`},
{title: "π πππΏπ πππππ | πππΏπ +18", description: "ππ€π¨π©π§ππ§ πΎπ€π’ππ£ππ€π¨ +18\nπΎπ€π’π’ππ£ππ¨ +18", rowId: `${usedPrefix + command} modohorny`},
{title: "π πΌπππ ππππΌπΎππ | πΌπππππππ", description: "ππ‘ππ’ππ£ππ§ ππ£π‘ππππ¨ ππ ππ§πͺπ₯π€π¨ ππ ππππ©π¨πΌπ₯π₯\nπππ’π€π«π π‘ππ£π π¨ ππ§π€π’ ππππ©π¨πΌπ₯π₯ ππ§π€πͺπ₯π¨", rowId: `${usedPrefix + command} antilink`},   
{title: "π πΌπππ ππππΌπΎππ 2 |πΌπππππππ 2", description: "ππ‘ππ’ππ£ππ§ ππ£π‘ππππ¨ π¦πͺπ ππ€π£π©ππ£ππ ππ©π©π₯π¨\nπππ’π€π«π π‘ππ£π π¨ ππ€π£π©πππ£ππ£π ππ©π©π₯π¨", rowId: `${usedPrefix + command} antilink2`},    
{title: "π πΏππππΎππΌπ | πΏππΎπππΎπ", description: "ππ€π©ππππππππ€π£ππ¨ ππ ππ§πͺπ₯π€\nππ§π€πͺπ₯ ππ€π©ππππππ©ππ€π£π¨", rowId: `${usedPrefix + command} detect`},    
{title: "π πΌππππππππππ", description: "ππͺππ ππ π£ππ«ππ‘ πΌπͺπ©π€π’Γ‘π©ππππ’ππ£π©π ππ£ πΎπππ©π¨\nπππ«ππ‘ πͺπ₯ πΌπͺπ©π€π’ππ©ππππ‘π‘π? ππ£ πΎπππ©π¨", rowId: `${usedPrefix + command} autolevelup`},    
{title: "β ππππππππππ | πππππππΎπ", description: "ππ¨ππ§ π‘ππ¨ ππͺπ£πππ€π£ππ¨ π₯ππ§π π¨ππππ§ π?/π€ πΓ±ππππ§ ππ£ ππ‘ ππ§πͺπ₯π€\nππ¨π π©ππ ππͺπ£ππ©ππ€π£π¨ π©π€ π§ππ’π€π«π ππ£π/π€π§ πππ ππ£ π©ππ ππ§π€πͺπ₯", rowId: `${usedPrefix + command} restrict`},    
{title: "β πππΎππππΌ πΌπππππΌπππΎπΌ | πΌππππππΌπΏ", description: "πππππ§ π¦πͺπ ππ‘ π½π€π© π©ππ£ππ π‘π€π¨ π’ππ£π¨ππππ¨ ππ€π’π€ ππΓ­ππ€\nπππ π π©ππ π½π€π© πππ«π π©ππ π’ππ¨π¨ππππ¨ ππ¨ ππππ", rowId: `${usedPrefix + command} autoread`},
{title: "π πΌππΏπππ", description: "ππ¨ππ§ π‘π€π¨ πΎπ€π’ππ£ππ€π¨ ππ πΌπͺπππ€π¨\nππ¨π πΌπͺπππ€ πΎπ€π’π’ππ£ππ¨", rowId: `${usedPrefix + command} audios`},
{title: "π π½ππ πππππππΌπ | π½ππ πππππππΌπππ ", description: "πππ§π π₯ππ§π’ππ©ππ§ π€ π£π€ π¦πͺπ ππ‘ ππ€π© π¨π πͺπ£π π©ππ’π₯π€π§ππ‘π’ππ£π©π ππ£ ππ§πͺπ₯π€π¨\nππ€ π©ππ’π₯π€π§ππ§ππ‘π? ππ‘π‘π€π¬ π€π§ πππ¨ππ‘π‘π€π¬ π©ππ ππ€π© π©π€ ππ€ππ£ ππ£ ππ§π€πͺπ₯π¨", rowId: `${usedPrefix + command} temporal`},
{title: "π πΌπππ πππ | πΌπππ πππ", description: "πππππ§ π¦πͺπ π£πππ π¨π π€ππͺπ‘π©π ππ£ ππ§πͺπ₯π€π¨\nπππ π π£π€π©πππ£π ππππ ππ£ ππ§π€πͺπ₯π¨", rowId: `${usedPrefix + command} antiver`},
{title: "πͺ πΌπππππππΎπππ", description: "ππ€ππ ππ’ππππ£, π«ππππ€, πππ, ππ£π‘πππ ππ₯π ππ ππ€π£π«ππ§π©ππ§π ππ£ ππ©πππ ππ§ πΌπͺπ©π€π’ππ©ππππ’ππ£π©π\nπΌπ‘π‘ ππ’πππ, π«ππππ€, πππ, ππ₯π π‘ππ£π π¨ πππ‘π‘ π½π πΎπ€π£π«ππ§π©ππ ππ€ ππ©πππ ππ§ πΌπͺπ©π€π’ππ©ππππ‘π‘π?", rowId: `${usedPrefix + command} autosticker`},
{title: "π  ππππΎππππ", description: "πππππ§ π¦πͺπ π¨π ππ£π«ππ π¨π©πππ ππ§π¨ πππ‘ ππ€π©\nπππ«π π©ππ ππ€π© π¨ππ£π π¨π©πππ ππ§π¨", rowId: `${usedPrefix + command} stickers`},
{title: "βοΈ ππΎππππ", description: "πππππ§ π¦πͺπ ππ‘ π½π€π© π§ππ¨π₯π€π£ππ π¨π€π‘π€ ππ£ πΎπππ©π¨ ππ§ππ«πππ€π¨\nπππ₯π‘π? π€π£π‘π? ππ£ ππ§ππ«ππ©π πΎπππ©π¨", rowId: `${usedPrefix + command} pconly`},
{title: "βοΈ ππΎππππ", description: "πππππ§ π¦πͺπ ππ‘ π½π€π© π§ππ¨π₯π€π£ππ π¨π€π‘π€ ππ£ πΎπππ©π¨ ππ ππ§πͺπ₯π€π¨\nπππ π π©ππ π½π€π© π§ππ¨π₯π€π£π π€π£π‘π? ππ£ ππ§π€πͺπ₯ πΎπππ©π¨", rowId: `${usedPrefix + command} gconly`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: '*~ CENTRO DE CONFIGURACIΓN*',
footer: `β­βββ[ *πΌππππππ ππΌππΌπ½ππ* ]ββββ¬£
ββββββββββββββββββ
βπ *Β‘Hola | Hi!* ${name}
ββββββββββββββββββ
β°ββββββββ° *${vs}* β±βββββββ¬£
β­ββββββββββββββ¬£
β *ππππππππ ππππ πππππΌππ π πππ*
β *πππ πΎπππΌππΏππ πΏπ ππππ πππππΌππ*
ββββββββββββββββββ
ββοΈ _${usedPrefix}on *:* off *welcome*_
ββοΈ _${usedPrefix}on *:* off *public*_
ββοΈ _${usedPrefix}on *:* off *modohorny*_
ββοΈ _${usedPrefix}on *:* off *antilink*_
ββοΈ _${usedPrefix}on *:* off *antilink2*_
ββοΈ _${usedPrefix}on *:* off *detect*_
ββοΈ _${usedPrefix}on *:* off *autolevelup*_
ββοΈ _${usedPrefix}on *:* off *restrict*_
ββοΈ _${usedPrefix}on *:* off *pconly*_
ββοΈ _${usedPrefix}on *:* off *gconly*_
ββοΈ _${usedPrefix}on *:* off *autoread*_
ββοΈ _${usedPrefix}on *:* off *audios*_
ββοΈ _${usedPrefix}on *:* off *stickers*_
ββοΈ _${usedPrefix}on *:* off *temporal*_
ββοΈ _${usedPrefix}on *:* off *antiver*_
ββοΈ _${usedPrefix}on *:* off *autosticker*_
β°ββββββββββββββ¬£
${wm}`,
title: null,
buttonText: "πΎππππππππΌπ",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'stickers':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.stickers = isEnable          
break
//case 'temporal':
//if (m.isGroup) {
//if (!(isAdmin || isOwner)) {
//global.dfail('admin', m, conn)
//throw false
//}}
//chat.temporal = isEnable          
//break
case 'temporal':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.temporal = isEnable
break
case 'autolevelup':
isUser = true
user.autolevelup = isEnable
break
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'antiver':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiver = isEnable 
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `${rg}α¦ *_COMANDO_* *|* ${type} 
α¦ *_ACTUALMENTE_* *|* ${isEnable ? 'ACTIVADO' : 'DESACTIVADO'} 
α¦ *_EN ESTE_* *|* ${isAll ? 'BOT' : isUser ? '' : 'CHAT'}`, wm, null, [[`${isEnable ? 'π DESACTIVAR' : 'π ACTIVAR'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ π', '.menu']],m)}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler
