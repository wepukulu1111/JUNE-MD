const axios = require("axios");

let handler = async (m, context) => {
    const { client, text, reply, command } = context;
    const args = context.args || text?.split(' ') || [];

    if (!args[0]) return reply(`Masukkan judul manhwa!\nContoh: .${command} solo leveling`);

    try {
        const judul = args.join(" ");
        const res = await axios.get(`https://api.mangadex.org/manga?title=${encodeURIComponent(judul)}&limit=1`);

        if (!res.data?.data || res.data.data.length === 0) {
            return reply("❌ Manhwa tidak ditemukan.");
        }

        const manga = res.data.data[0];

        const title =
            manga.attributes.title.en ||
            Object.values(manga.attributes.title)[0] || "-";

        const coverRel = manga.relationships.find(r => r.type === "cover_art");
        if (!coverRel) return reply("❌ Gagal mendapatkan cover.");

        const coverRes = await axios.get(`https://api.mangadex.org/cover/${coverRel.id}`);
        const fileName = coverRes.data?.data?.attributes?.fileName;
        if (!fileName) return reply("❌ File cover tidak ditemukan.");

        const coverUrl = `https://uploads.mangadex.org/covers/${manga.id}/${fileName}`;

        await client.sendMessage(m.chat, {
            image: { url: coverUrl },
            caption: `*Judul:* ${title}\n*ID:* ${manga.id}\n*Link:* https://mangadex.org/title/${manga.id}`
        });

    } catch (e) {
        console.error("Manhwa Error:", e);
        reply("⚠️ Terjadi kesalahan saat mencari manhwa.");
    }
};

handler.help = ['manhwa <judul>'];
handler.tags = ['anime'];
handler.command = ['manhwa'];

module.exports = handler
