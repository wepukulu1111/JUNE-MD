const settings = require("../settings");
async function aliveCommand(sock, chatId, message) {
    try {
        const message1 =
                       `╔════▢ 𝐉ᴜɴᴇ 𝐌ᴅ ▢════╗\n` +
                        `▢ *Version:* ${settings.version}\n` +
                        `▢ *Status:* Online\n` +
                        `▢ *Mode:* Public\n` +
                       `╚═════════════════╝`;
        await sock.sendMessage(chatId, {
            text: message1,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '@newsletter',
                    newsletterName: '𝐉ᴜɴᴇ 𝐌ᴅ',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
    }
}

module.exports = aliveCommand;