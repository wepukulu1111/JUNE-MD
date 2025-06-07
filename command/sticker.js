require('../settings/config');
const fs = require('fs');

let handler = async (m, { client, text, reply, quoted, mime, prefix, command }) => {
    if (!quoted) return reply(`\n*Contoh:* reply image/video lalu ketik ${prefix + command}\n`);

    try {
        const mimeType = quoted.mimetype || '';
        const media = await quoted.download();

        if (/image/.test(mimeType)) {
            const encmedia = await client.sendImageAsSticker(m.chat, media, m, {
                packname: global.packname,
                author: global.author,
            });
            if (fs.existsSync(encmedia)) fs.unlinkSync(encmedia);

        } else if (/video/.test(mimeType)) {
            if ((quoted?.msg || quoted)?.seconds > 10)
                return reply('\n⚠️ Durasi maksimal video untuk sticker adalah 10 detik!\n');

            const encmedia = await client.sendVideoAsSticker(m.chat, media, m, {
                packname: global.packname,
                author: global.author,
            });
            if (fs.existsSync(encmedia)) fs.unlinkSync(encmedia);

        } else {
            return reply(`\n⚠️ Format tidak didukung. Reply image/video saja.\nContoh: ${prefix + command}`);
        }

    } catch (error) {
        console.error(error);
        return reply('❌ Terjadi kesalahan saat membuat sticker.');
    }
};

handler.help = ['sticker'];
handler.tags = ['sticker'];
handler.command = ['sticker', 's'];

module.exports = handler
