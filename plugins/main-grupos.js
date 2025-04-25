import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://i.ibb.co/3N4StyG/file.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*Hola!, te invito a unirte a los grupos oficiales de del Bot para convivir con la comunidad :D*

1- 【 ✯ 𝙰𝙸_𝙷𝙾𝚂𝙷𝙸𝙽𝙾-𝙱𝙾𝚃 ✰ 】
*✰* ${global.group}

2- 【 ✯ 𝙰𝙸_𝙷𝙾𝚂𝙷𝙸𝙽𝙾-𝙱𝙾𝚃 ✰ 】- ll
*✰* ${global.group2}

3- 【 ✯ 𝙰𝙸_𝙷𝙾𝚂𝙷𝙸𝙽𝙾-𝙱𝙾𝚃 ✰ 】- lll
*✰* ${global.group3}

*─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ*

➠ Enlaces anulados? entre aquí! 

Canal :
*✰* ${global.canal}

> [ ✰ ] ${global.textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos)$/i
export default handler 
