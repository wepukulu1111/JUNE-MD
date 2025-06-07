let handler = async (m, { client, text, reply }) => {
    const quoted = m.quoted ? m.quoted : null;

    if (!quoted && text) {
        client.sendStatusMention(
            { text: text },
            [m.chat]
        );
        return;
    }

    if (quoted && quoted.mtype === "conversation") {
        client.sendStatusMention(
            { text: quoted.text || '' },
            [m.chat]
        );
        return;
    }

    if (quoted && quoted.mtype === "audioMessage") {
        let audioData = await quoted.download();
        client.sendStatusMention(
            { audio: audioData, mimetype: 'audio/mp4', ptt: true },
            [m.chat]
        );
        return;
    }

    if (quoted && quoted.mtype === "imageMessage") {
        let imageData = await quoted.download();
        client.sendStatusMention(
            { image: imageData, caption: text || '' },
            [m.chat]
        );
        return;
    }

    if (quoted && quoted.mtype === "videoMessage") {
        let videoData = await quoted.download();
        client.sendStatusMention(
            { video: videoData, caption: text || '' },
            [m.chat]
        );
        return;
    }

    // fallback jika quoted tidak valid
    reply("❌ Format tidak dikenali. Balas media atau teks untuk mengirim ke status.");
};

handler.help = ['upsw'];
handler.tags = ['owner'];
handler.command = ['upsw'];
handler.owner = true;

module.exports = handler
