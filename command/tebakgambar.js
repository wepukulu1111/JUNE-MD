const axios = require('axios');

let handler = async (m, { client, text, reply, reaction, prefix, command }) => {
    // Kalau teks kosong, tetap jalankan, jadi tanpa harus ada input selain command.
    await reaction(m.chat, "⚡");

    try {
        // Ambil gambar dari API tebakgambar
        let res = await axios.get('https://api.siputzx.my.id/api/games/tebakgambar');
        let json = res.data;

        // Cek status API dan pastikan ada gambar
        if (!json.status || !json.result || !json.result.image) {
            return reply('Gagal ambil gambar, coba lagi nanti.');
        }

        // Mengirim gambar dan instruksi untuk menebak gambar
        await client.sendMessage(m.chat, {
            image: { url: json.result.image },
            caption: '🔍 Tebak gambar ini! Apa ini?'
        }, { quoted: m });
        
    } catch (e) {
        console.error(e);
        reply('❌ Ada masalah dalam mengambil gambar. Coba lagi nanti.');
    }
}

// Menambahkan help dan tags
handler.help = ['tebakgambar'];
handler.tags = ['games'];
handler.command = ['tebakgambar'];

module.exports = handler
