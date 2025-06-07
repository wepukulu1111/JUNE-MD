/**
 * github : https:
 * youtube : https:
*/

require('../settings/config');
const fetch = require('node-fetch');
const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const moment = require("moment-timezone");
const path = require("path")
const os = require('os');
const confessSessions = {}; 
const confessHistory = [];
const rateLimit = {}; 
const emojis = ['💌', '❤️', '✨', '💭', '❣️', '🧡', '💬'];


function savePremium() {
  fs.writeFileSync(dbPremPath, JSON.stringify(global.premiumUser, null, 2));
}
function generateID() {
    return Math.floor(1000 + Math.random() * 9000); 
}
const { SnackVideo } = require('../start/lib/function/snackvideo')
const {
    spawn, 
    exec,
    execSync 
   } = require('child_process');

const {
    default:
    baileys,
    getContentType, 
   } = require("@whiskeysockets/baileys");
global.banList = global.banList || {};
module.exports = client = async (client, m, chatUpdate, store) => {
    try {
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");
        
        const sender = m.key.fromMe ? client.user.id.split(":")[0] + "@s.whatsapp.net" || client.user.id
: m.key.participant || m.key.remoteJid;
        
        const senderNumber = sender.split('@')[0];
const botNumber = await client.decodeJid(client.user.id);
        const budy = (typeof m.text === 'string' ? m.text : '');
        
        
global.nsfwMode = global.nsfwMode || {};
global.antilink = global.antilink || {};
global.antigroup = global.antigroup || {};
global.callWarnDB = global.callWarnDB || {};
global.lastCmd = global.lastCmd || {};
global.autoRead = global.autoRead || false;
global.fakeTyping = global.fakeTyping || false;
global.fakeRecording = global.fakeRecording || false;
global.commandCooldown = new Set();

if (m.message?.protocolMessage?.type === 2) {
    const callerId = m.key.remoteJid;

    if (!global.callWarnDB[callerId]) {
        global.callWarnDB[callerId] = 1;

        await client.sendMessage(callerId, {
            text: `⚠️ Jangan telepon bot!\nKalau kamu telepon lagi, kamu akan diblokir otomatis.`,
        }, { quoted: m });
        console.log(`⚠️ Warning pertama ke ${callerId}`);
    } else {
        await client.sendMessage(callerId, {
            text: `❌ Kamu telah diblokir karena terus menelpon bot.`
        }, { quoted: m });

        await sleep(3000);
        await client.updateBlockStatus(callerId, 'block');
        console.log(`✅ Blocked ${callerId} karena menelpon dua kali.`);

        delete global.callWarnDB[callerId];
    }
}
if (global.banList?.[m.sender]) {
  let dataBan = global.banList[m.sender];

  if (Date.now() < dataBan.until) {
    
    if (!dataBan.notified) {
      client.sendMessage(m.sender, {
        text: `> Anda telah dibanned oleh bot.

> Hingga: *${moment(dataBan.until).format("LLL")}*
> Alasan: *${dataBan.reason}*`,
        headerType: 1
      });

      global.banList[m.sender].notified = true; 
    }

    return; 
  } else {
    delete global.banList[m.sender]; 
  }
}
        const prefa = ["", "!", ".", ",", "🐤", "🗿"];

        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");

        const kontributor = JSON.parse(fs.readFileSync('./start/lib/database/owner.json'));
        const ownerList = Array.isArray(global.owner) ? global.owner : [global.owner];
const Access = [botNumber, ...kontributor, ...ownerList]
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender);
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const command2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const isCreator = ["6281931488608@s.whatsapp.net", botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const text = q = args.join(" ");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const dbPremPath = './database/premium.json';
if (!fs.existsSync(dbPremPath)) fs.writeFileSync(dbPremPath, '[]');
global.premiumUser = JSON.parse(fs.readFileSync(dbPremPath));
        const isMedia = /image|video|sticker|audio/.test(mime);

        const groupMetadata = isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";
        const groupOwner = isGroup ? groupMetadata.owner : "";
        const groupName = m.isGroup ? groupMetadata.subject : "";
        const participants = isGroup ? await groupMetadata.participants : "";
        const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
        const groupMembers = isGroup ? groupMetadata.participants : "";
        const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        
        
        const {
            smsg,
            fetchJson, 
            sleep,
            formatSize
            } = require('./lib/myfunction');
     
        const {
            jadibot,
	        stopjadibot,
          	listjadibot
        } = require('./jadibot')
        
        let cihuy = fs.readFileSync('./start/lib/media/rimuru.png')
       
        if (m.message) {
            console.log('\x1b[30m--------------------\x1b[0m');
            console.log(chalk.bgHex("#e74c3c").bold(`▢ New Message`));
            console.log(
                chalk.bgHex("#00FF00").black(
                    `   ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
                    `   ⌬ Pesan: ${m.body || m.mtype} \n` +
                    `   ⌬ Pengirim: ${pushname} \n` +
                    `   ⌬ JID: ${senderNumber}`
                )
            );
            
            if (m.isGroup) {
                console.log(
                    chalk.bgHex("#00FF00").black(
                        `   ⌬ Grup: ${groupName} \n` +
                        `   ⌬ GroupJid: ${m.chat}`
                    )
                );
            }
            console.log();
        }
        
        const reaction = async (jidss, emoji) => {
            client.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key 
                } 
            })
        };

async function getBuffer(url) {
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    return Buffer.from(res.data);
}

        
        async function loading() {
    return reply("Sedang memuat Wak...");
}
        
        async function reply(text) {
            client.sendMessage(m.chat, {
                text: text,
                contextInfo: {
                    mentionedJid: [sender],
                    externalAdReply: {
                        title: "Munchy",
                        body: "Munchy is your friendly WhatsApp bot — always ready to help, reply, and keep the chat going!",
                        thumbnailUrl: "https://unitedcamps.in/Images/IMG_1744220691.jpg",
                        sourceUrl: 'https://youtube.com/@baazteardvont?si=9b-yuiV-CK_H9K3t',
                        renderLargerThumbnail: false,
                    }
                }
            }, { quoted: m })
        }
        
        const pluginsLoader = async (directory) => {
            let plugins = [];
            const folders = fs.readdirSync(directory);
            folders.forEach(file => {
                const filePath = path.join(directory, file);
                if (filePath.endsWith(".js")) {
                    try {
                        const resolvedPath = require.resolve(filePath);
                        if (require.cache[resolvedPath]) {
                            delete require.cache[resolvedPath];
                        }
                        const plugin = require(filePath);
                        plugins.push(plugin);
                    } catch (error) {
                        console.log(`${filePath}:`, error);
                    }
                }
            });
            return plugins;
        };

        const pluginsDisable = true;
        const plugins = await pluginsLoader(path.resolve(__dirname, "../command"));
        const plug = { client, prefix, command, reply, text, Access, reaction, isGroup: m.isGroup, isPrivate: !m.isGroup, pushname, mime, quoted };

        for (let plugin of plugins) {
            if (plugin.command.find(e => e == command.toLowerCase())) {
                if (plugin.owner && !Access) {
                    return reply(mess.owner);
                }
                
                if (plugin.group && !plug.isGroup) {
                    return m.reply(mess.group);
                }
                
                if (plugin.private && !plug.isPrivate) {
                    return m.reply(mess.private);
                }

                if (typeof plugin !== "function") return;
                await plugin(m, plug);
            }
        }
        
        if (!pluginsDisable) return;  
        
if (global.antilink && global.antilink[m.chat]) {
    if (m.isGroup && !isAdmins && !Access) {
        const linkRegex = /(https?:\/\/[^\s]+)/g;
        const links = budy.match(linkRegex);
        if (links) {
            const isDangerousLink = links.some(url => 
                url.includes('whatsapp.com') ||
                url.includes('tiktok.com') ||
                url.includes('youtube.com') ||
                url.includes('youtu.be') ||
                url.includes('telegram.me') ||
                url.includes('t.me')
            );
            if (isDangerousLink) {
                await reply(`⚠️ Detected forbidden link!\nYou will be removed.`);
                await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').catch(() => reply('❌ Failed to kick.'));
            }
        }
    }
}

if (m.isGroup && global.antigroup[m.chat]) {
  let regex = /chat\.whatsapp\.com\/[A-Za-z0-9]{20,24}/i;
  if (regex.test(m.text)) {
    if (isGroupAdmins || m.key.fromMe) return; 

    reply(`⚠️ Link grup terdeteksi!\nPengguna: @${m.sender.split('@')[0]}`, [m.sender]);

    
    if (isBotGroupAdmins) {
      await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    }
  }
}
if (m.mtype === 'stickerMessage') {
  const banStickerHash = '111,225,157,31,156,135,70,2,157,164,240,100,181,115,181,181,239,204,222,206,88,7,64,38,80,174,94,129,51,100,91,123';
  const isBanSticker = m.msg?.fileSha256?.toString('base64') === banStickerHash;
  const quoted = m.quoted;

  if (isBanSticker && quoted) {
    const groupMetadata = isGroup ? await client.groupMetadata(m.chat) : {};
    const botNumber = client.user.id.split(':')[0] + '@s.whatsapp.net';
    const isBotAdmin = isGroup ? groupMetadata.participants.some(p => p.id === botNumber && p.admin) : false;
    const isAdmin = isGroup ? groupMetadata.participants.some(p => p.id === m.sender && p.admin) : false;

    const target = quoted.sender;

    if (!isGroup) return reply('❌ Harus digunakan di grup.');
    if (!isBotAdmin) return reply('❌ Bot bukan admin.');
    if (!isAdmin) return reply('❌ Fitur ini hanya untuk admin.');

    try {
      await client.groupParticipantsUpdate(m.chat, [target], 'remove');
      reply(` Done.`);
    } catch (err) {
      reply('⚠️ Gagal ban. Mungkin target sudah left atau bot tidak cukup izin.');
    }
  }
}
if (m.mtype === 'stickerMessage') {
  const banStickerHash = 'YiOenCNu9oAfwZWoyXsx0oOEos2ZRM+AGVBn2EYID3I=';
  const isBanSticker = m.msg?.fileSha256?.toString('base64') === banStickerHash;
  const quoted = m.quoted;

  if (isBanSticker && quoted) {
    const groupMetadata = isGroup ? await client.groupMetadata(m.chat) : {};
    const botNumber = client.user.id.split(':')[0] + '@s.whatsapp.net';
    const isBotAdmin = isGroup ? groupMetadata.participants.some(p => p.id === botNumber && p.admin) : false;
    const isAdmin = isGroup ? groupMetadata.participants.some(p => p.id === m.sender && p.admin) : false;

    const target = quoted.sender;

    if (!isGroup) return reply('❌ Harus digunakan di grup.');
    if (!isBotAdmin) return reply('❌ Bot bukan admin.');
    if (!isAdmin) return reply('❌ Fitur ini hanya untuk admin.');

    try {
      await client.groupParticipantsUpdate(m.chat, [target], 'remove');
      reply(`✅ ${target.split('@')[0]} telah dikirim ke neraka via stiker terkutuk.`);
    } catch (err) {
      reply('⚠️ Gagal ban. Mungkin target sudah left atau bot tidak cukup izin.');
    }
  }
}
// AUTO SAVE NOMOR
client.ev.on('messages.upsert', async chatUpdate => {
    try {
        if (!chatUpdate.messages || chatUpdate.type !== 'notify') return;

        const m = chatUpdate.messages[0];
        if (!m.key.fromMe && m.key.remoteJid.endsWith('@s.whatsapp.net')) {
            const nomor = m.key.remoteJid.split('@')[0];
            const filePath = './database/autosave.json';

            if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, '[]');
            const db = JSON.parse(fs.readFileSync(filePath));

            if (!db.includes(nomor)) {
                db.push(nomor);
                fs.writeFileSync(filePath, JSON.stringify(db, null, 2));
                console.log(`✅ Auto Save: ${nomor}`);
            }
        }
    } catch (e) {
        console.error('[ERROR] Auto Save Nomor:', e);
    }
});
// ANTI DELETE
client.ev.on('messages.update', async chatUpdate => {
    try {
        if (!chatUpdate.messages) return;

        for (const msg of chatUpdate.messages) {
            if (msg.message && msg.messageStubType === 68) { // 68 = Hapus Pesan
                const chat = msg.key.remoteJid;
                const id = msg.key.id;
                const oldMsg = store.messages[chat]?.[id];

                if (!oldMsg) return console.log('❌ Tidak menemukan pesan yang dihapus.');

                await client.sendMessage(chat, {
                    text: ` Pesan Dihapus:\n\n${oldMsg.message?.conversation || oldMsg.message?.extendedTextMessage?.text || '[Non-text]'}`,
                });
                console.log(`Anti delete: ${chat}`);
            }
        }
    } catch (e) {
        console.error('[ERROR] Anti Delete:', e);
    }
});
        switch (command) {
            
            case "allmenu": {
     if (global.fakeTyping) await client.sendPresenceUpdate('composing', m.chat);
if (global.fakeRecording) await client.sendPresenceUpdate('recording', m.chat);
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const formattedUsedMem = formatSize(usedMem);
    const formattedTotalMem = formatSize(totalMem);
    
    let mbut = `
╔═《 𝗗𝗘𝗠𝗢𝗡 𝗣𝗔𝗡𝗘𝗟 》═╗  
║ ɴᴀᴍᴇ   : ${pushname}  
║ ʙᴏᴛ    : ${global.namaBot}  
║ ᴍᴏᴅᴇ   : ${client.public ? 'Public' : 'Self'}  
║ ᴜsᴇʀ   : @${m.sender.split('@')[0]}  
║ ʀᴀᴍ    : ${formattedUsedMem} / ${formattedTotalMem}  
╚════════════╝  

┏━【 Downloader 】━┓  
┃ • ${prefix}tiktok  
┃ • ${prefix}igdl  
┃ • ${prefix}play  
┃ • ${prefix}facebook  
┃ • ${prefix}videy  
┃ • ${prefix}snackvideo  
┗━━━━━━━━━━┛  

┏━【 Group Tools 】━┓  
┃ • ${prefix}tagall  
┃ • ${prefix}hidetag  
┗━━━━━━━━━━┛  

┏━【 Voice Effects 】━┓  
┃ • ${prefix}fast  
┃ • ${prefix}tupai  
┃ • ${prefix}blown  
┃ • ${prefix}bass  
┃ • ${prefix}smooth  
┃ • ${prefix}deep  
┃ • ${prefix}earrape  
┃ • ${prefix}nightcore  
┃ • ${prefix}fat  
┃ • ${prefix}robot  
┃ • ${prefix}slow  
┃ • ${prefix}reverse  
┗━━━━━━━━━━━┛  

┏━【 Beta Features 】━┓  
┃ • ${prefix}jadibot  
┃ • ${prefix}listjadibot  
┃ • ${prefix}stopjadibot  
┃ • ${prefix}aiclaude
┗━━━━━━━━━━━┛  

┏━【 Fun Menu 】━┓  
┃ • ${prefix}roast  
┃ • ${prefix}roastme  
┃ • ${prefix}darkroast
┃ • ${prefix}sticker  
┃ • ${prefix}brat  
┃ • ${prefix}manhwa
┃ • ${prefix}aksarasunda  
┃ • ${prefix}confess
┃ • ${prefix}toimg
┃ • ${prefix}cosplay  
┃ • ${prefix}glitchtext  
┃ • ${prefix}findsong  
┃ • ${prefix}sspotify    
┃ • ${prefix}puji  
┃ • ${prefix}kenapaya  
┃ • ${prefix}curhat
┃ • ${prefix}meme  
┃ • ${prefix}ramalan  
┃ • ${prefix}chess
┃ • ${prefix}luckynumber  
┃ • ${prefix}time  
┃ • ${prefix}upch  
┃ • ${prefix}upsw  
┃ • ${prefix}robloxstalk  
┗━━━━━━━━━━┛  

┏━【 Anime Menu 】━┓  
┃ • ${prefix}waifu  
┃ • ${prefix}neko  
┃ • ${prefix}megumin
┃ • ${prefix}shinobu  
┃ • ${prefix}cry
┃ • ${prefix}bully
┃ • ${prefix}cuddle
┃ • ${prefix}hug
┃ • ${prefix}awoo 
┃ • ${prefix}kiss
┃ • ${prefix}lick 
┃ • ${prefix}pat
┃ • ${prefix}smug 
┃ • ${prefix}bonk 
┃ • ${prefix}yeet 
┃ • ${prefix}blush 
┃ • ${prefix}smile  
┃ • ${prefix}wave 
┃ • ${prefix}highfive 
┃ • ${prefix}handhold 
┃ • ${prefix}nom 
┃ • ${prefix}bite 
┃ • ${prefix}glomp
┃ • ${prefix}slap 
┃ • ${prefix}kill 
┃ • ${prefix}kicku
┃ • ${prefix}happy
┃ • ${prefix}wink 
┃ • ${prefix}poke
┃ • ${prefix}dance 
┃ • ${prefix}cringe
┃ • ${prefix}waifus 18+
┃ • ${prefix}nekos 18+
┃ • ${prefix}trap 18+
┃ • ${prefix}blowjob 18+
┗━━━━━━━━━━┛  

┏━━━【 Owner 】━━━┓  
┃ • ${prefix}cekidgc  
┃ • ${prefix}pushkontak  
┃ • ${prefix}pushkontakid  
┃ • ${prefix}done
┃ • ${prefix}getvo  
┃ • ${prefix}csesi  
┃ • ${prefix}addcase
┃ • ${prefix}getcase
┃ • ${prefix}editcase
┃ • ${prefix}delcase  
┃ • ${prefix}public  
┃ • ${prefix}self  
┃ • ${prefix}join
┃ • ${prefix}leave
┃ • ${prefix}rent  
┃ • ${prefix}antilink (group)
┃ • ${prefix}eval
┃ • ${prefix}log
┃ • ${prefix}del
┃ • >  
┃ • <  
┃ • $  
┗━━━━━━━━━━━━┛
   
   `;

    client.sendMessage(m.chat, {
        document: fs.readFileSync("./package.json"),
        fileName: "Lets kill it!!! - Munchy",
        mimetype: "application/pdf",
        fileLength: 999999999999,
        pageCount: 999,
        caption: mbut,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: "Munchy࿐ ",
                newsletterJid: `120363349621603815@newsletter`,
            },
            externalAdReply: {  
                title: "Munchy", 
                body: "Munchy is your friendly WhatsApp bot — always ready to help, reply, and keep the chat going!",
                thumbnailUrl: `https://unitedcamps.in/Images/IMG_1744220705.jpg`,
                sourceUrl: "https://youtube.com/@baazteardvont?si=9b-yuiV-CK_H9K3t", 
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
};
break;
case "menudownload": {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const formattedUsedMem = formatSize(usedMem);
    const formattedTotalMem = formatSize(totalMem);
    
    let mbut = `
╔═《 𝗗𝗘𝗠𝗢𝗡 𝗣𝗔𝗡𝗘𝗟 》═╗  
║ ɴᴀᴍᴇ   : ${pushname}  
║ ʙᴏᴛ    : ${global.namaBot}  
║ ᴍᴏᴅᴇ   : ${client.public ? 'Public' : 'Self'}  
║ ᴜsᴇʀ   : @${m.sender.split('@')[0]}  
║ ʀᴀᴍ    : ${formattedUsedMem} / ${formattedTotalMem}  
╚════════════╝  

┏━【 Downloader 】━┓  
┃ • ${prefix}tiktok  
┃ • ${prefix}igdl  
┃ • ${prefix}play  
┃ • ${prefix}facebook  
┃ • ${prefix}videy  
┃ • ${prefix}snackvideo  
┗━━━━━━━━━━┛  
   
   `;

    client.sendMessage(m.chat, {
        document: fs.readFileSync("./package.json"),
        fileName: "Lets kill it!!! - Munchy",
        mimetype: "application/pdf",
        fileLength: 999999999999,
        pageCount: 999,
        caption: mbut,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: "Munchy࿐ ",
                newsletterJid: `120363349621603815@newsletter`,
            },
            externalAdReply: {  
                title: "Munchy", 
                body: "Munchy is your friendly WhatsApp bot — always ready to help, reply, and keep the chat going!",
                thumbnailUrl: `https://unitedcamps.in/Images/IMG_1744220705.jpg`,
                sourceUrl: "https://youtube.com/@baazteardvont?si=9b-yuiV-CK_H9K3t", 
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
};
break;
case "menugroup": {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const formattedUsedMem = formatSize(usedMem);
    const formattedTotalMem = formatSize(totalMem);
    
    let mbut = `
╔═《 𝗗𝗘𝗠𝗢𝗡 𝗣𝗔𝗡𝗘𝗟 》═╗  
║ ɴᴀᴍᴇ   : ${pushname}  
║ ʙᴏᴛ    : ${global.namaBot}  
║ ᴍᴏᴅᴇ   : ${client.public ? 'Public' : 'Self'}  
║ ᴜsᴇʀ   : @${m.sender.split('@')[0]}  
║ ʀᴀᴍ    : ${formattedUsedMem} / ${formattedTotalMem}  
╚════════════╝  

┏━【 Group Tools 】━┓  
┃ • ${prefix}tagall  
┃ • ${prefix}antilink (group)
┃ • ${prefix}hidetag  
┗━━━━━━━━━━┛  

   `;

    client.sendMessage(m.chat, {
        document: fs.readFileSync("./package.json"),
        fileName: "Lets kill it!!! - Munchy",
        mimetype: "application/pdf",
        fileLength: 999999999999,
        pageCount: 999,
        caption: mbut,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: "Munchy࿐ ",
                newsletterJid: `120363349621603815@newsletter`,
            },
            externalAdReply: {  
                title: "Munchy", 
                body: "Munchy is your friendly WhatsApp bot — always ready to help, reply, and keep the chat going!",
                thumbnailUrl: `https://unitedcamps.in/Images/IMG_1744220705.jpg`,
                sourceUrl: "https://youtube.com/@baazteardvont?si=9b-yuiV-CK_H9K3t", 
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
};
break;
case "menuvoice": {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const formattedUsedMem = formatSize(usedMem);
    const formattedTotalMem = formatSize(totalMem);
    
    let mbut = `
╔═《 𝗗𝗘𝗠𝗢𝗡 𝗣𝗔𝗡𝗘𝗟 》═╗  
║ ɴᴀᴍᴇ   : ${pushname}  
║ ʙᴏᴛ    : ${global.namaBot}  
║ ᴍᴏᴅᴇ   : ${client.public ? 'Public' : 'Self'}  
║ ᴜsᴇʀ   : @${m.sender.split('@')[0]}  
║ ʀᴀᴍ    : ${formattedUsedMem} / ${formattedTotalMem}  
╚════════════╝  

┏━【 Voice Effects 】━┓  
┃ • ${prefix}fast  
┃ • ${prefix}tupai  
┃ • ${prefix}blown  
┃ • ${prefix}bass  
┃ • ${prefix}smooth  
┃ • ${prefix}deep  
┃ • ${prefix}earrape  
┃ • ${prefix}nightcore  
┃ • ${prefix}fat  
┃ • ${prefix}robot  
┃ • ${prefix}slow  
┃ • ${prefix}reverse  
┗━━━━━━━━━━━┛  

   `;

    client.sendMessage(m.chat, {
        document: fs.readFileSync("./package.json"),
        fileName: "Lets kill it!!! - Munchy",
        mimetype: "application/pdf",
        fileLength: 999999999999,
        pageCount: 999,
        caption: mbut,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: "Munchy࿐ ",
                newsletterJid: `120363349621603815@newsletter`,
            },
            externalAdReply: {  
                title: "Munchy", 
                body: "Munchy is your friendly WhatsApp bot — always ready to help, reply, and keep the chat going!",
                thumbnailUrl: `https://unitedcamps.in/Images/IMG_1744220705.jpg`,
                sourceUrl: "https://youtube.com/@baazteardvont?si=9b-yuiV-CK_H9K3t", 
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
};
break;
case "menubeta": {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const formattedUsedMem = formatSize(usedMem);
    const formattedTotalMem = formatSize(totalMem);
    
    let mbut = `
╔═《 𝗗𝗘𝗠𝗢𝗡 𝗣𝗔𝗡𝗘𝗟 》═╗  
║ ɴᴀᴍᴇ   : ${pushname}  
║ ʙᴏᴛ    : ${global.namaBot}  
║ ᴍᴏᴅᴇ   : ${client.public ? 'Public' : 'Self'}  
║ ᴜsᴇʀ   : @${m.sender.split('@')[0]}  
║ ʀᴀᴍ    : ${formattedUsedMem} / ${formattedTotalMem}  
╚════════════╝    

┏━【 Beta Features 】━┓  
┃ • ${prefix}jadibot  
┃ • ${prefix}listjadibot  
┃ • ${prefix}stopjadibot  
┃ • ${prefix}aiclaude  
┗━━━━━━━━━━━┛  
   `;

    client.sendMessage(m.chat, {
        document: fs.readFileSync("./package.json"),
        fileName: "Lets kill it!!! - Munchy",
        mimetype: "application/pdf",
        fileLength: 999999999999,
        pageCount: 999,
        caption: mbut,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: "Munchy࿐ ",
                newsletterJid: `120363349621603815@newsletter`,
            },
            externalAdReply: {  
                title: "Munchy", 
                body: "Munchy is your friendly WhatsApp bot — always ready to help, reply, and keep the chat going!",
                thumbnailUrl: `https://unitedcamps.in/Images/IMG_1744220705.jpg`,
                sourceUrl: "https://youtube.com/@baazteardvont?si=9b-yuiV-CK_H9K3t", 
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
};
break;
case "menufun": {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const formattedUsedMem = formatSize(usedMem);
    const formattedTotalMem = formatSize(totalMem);
    
    let mbut = `
╔═《 𝗗𝗘𝗠𝗢𝗡 𝗣𝗔𝗡𝗘𝗟 》═╗  
║ ɴᴀᴍᴇ   : ${pushname}  
║ ʙᴏᴛ    : ${global.namaBot}  
║ ᴍᴏᴅᴇ   : ${client.public ? 'Public' : 'Self'}  
║ ᴜsᴇʀ   : @${m.sender.split('@')[0]}  
║ ʀᴀᴍ    : ${formattedUsedMem} / ${formattedTotalMem}  
╚════════════╝  
  
┏━【 Fun Menu 】━┓  
┃ • ${prefix}roast  
┃ • ${prefix}roastme  
┃ • ${prefix}darkroast
┃ • ${prefix}sticker  
┃ • ${prefix}brat  
┃ • ${prefix}manhwa
┃ • ${prefix}aksarasunda  
┃ • ${prefix}confess  
┃ • ${prefix}toimg
┃ • ${prefix}cosplay  
┃ • ${prefix}glitchtext  
┃ • ${prefix}findsong  
┃ • ${prefix}sspotify    
┃ • ${prefix}puji  
┃ • ${prefix}kenapaya  
┃ • ${prefix}curhat
┃ • ${prefix}meme  
┃ • ${prefix}ramalan  
┃ • ${prefix}chess
┃ • ${prefix}luckynumber  
┃ • ${prefix}time  
┃ • ${prefix}upch  
┃ • ${prefix}upsw  
┃ • ${prefix}robloxstalk  
┗━━━━━━━━━━┛  
   `;

    client.sendMessage(m.chat, {
        document: fs.readFileSync("./package.json"),
        fileName: "Lets kill it!!! - Munchy",
        mimetype: "application/pdf",
        fileLength: 999999999999,
        pageCount: 999,
        caption: mbut,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: "Munchy࿐ ",
                newsletterJid: `120363349621603815@newsletter`,
            },
            externalAdReply: {  
                title: "Munchy", 
                body: "Munchy is your friendly WhatsApp bot — always ready to help, reply, and keep the chat going!",
                thumbnailUrl: `https://unitedcamps.in/Images/IMG_1744220705.jpg`,
                sourceUrl: "https://youtube.com/@baazteardvont?si=9b-yuiV-CK_H9K3t", 
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
};
break;
case "menuanime": {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const formattedUsedMem = formatSize(usedMem);
    const formattedTotalMem = formatSize(totalMem);
    
    let mbut = `
╔═《 𝗗𝗘𝗠𝗢𝗡 𝗣𝗔𝗡𝗘𝗟 》═╗  
║ ɴᴀᴍᴇ   : ${pushname}  
║ ʙᴏᴛ    : ${global.namaBot}  
║ ᴍᴏᴅᴇ   : ${client.public ? 'Public' : 'Self'}  
║ ᴜsᴇʀ   : @${m.sender.split('@')[0]}  
║ ʀᴀᴍ    : ${formattedUsedMem} / ${formattedTotalMem}  
╚════════════╝  
  
┏━【 Anime Menu 】━┓  
┃ • ${prefix}waifu  
┃ • ${prefix}neko  
┃ • ${prefix}megumin
┃ • ${prefix}shinobu  
┃ • ${prefix}cry
┃ • ${prefix}bully
┃ • ${prefix}cuddle
┃ • ${prefix}hug
┃ • ${prefix}awoo 
┃ • ${prefix}kiss
┃ • ${prefix}lick 
┃ • ${prefix}pat
┃ • ${prefix}smug 
┃ • ${prefix}bonk 
┃ • ${prefix}yeet 
┃ • ${prefix}blush 
┃ • ${prefix}smile  
┃ • ${prefix}wave 
┃ • ${prefix}highfive 
┃ • ${prefix}handhold 
┃ • ${prefix}nom 
┃ • ${prefix}bite 
┃ • ${prefix}glomp
┃ • ${prefix}slap 
┃ • ${prefix}kill 
┃ • ${prefix}kicku
┃ • ${prefix}happy
┃ • ${prefix}wink 
┃ • ${prefix}poke
┃ • ${prefix}dance 
┃ • ${prefix}cringe
┃ • ${prefix}waifus 18+
┃ • ${prefix}nekos 18+
┃ • ${prefix}trap 18+
┃ • ${prefix}blowjob 18+
┗━━━━━━━━━━┛  
   `;

    client.sendMessage(m.chat, {
        document: fs.readFileSync("./package.json"),
        fileName: "Lets kill it!!! - Munchy",
        mimetype: "application/pdf",
        fileLength: 999999999999,
        pageCount: 999,
        caption: mbut,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: "Munchy࿐ ",
                newsletterJid: `120363349621603815@newsletter`,
            },
            externalAdReply: {  
                title: "Munchy", 
                body: "Munchy is your friendly WhatsApp bot — always ready to help, reply, and keep the chat going!",
                thumbnailUrl: `https://unitedcamps.in/Images/IMG_1744220705.jpg`,
                sourceUrl: "https://youtube.com/@baazteardvont?si=9b-yuiV-CK_H9K3t", 
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
};
break;
case "menuowner": {
 const totalMem = os.totalmem();
 const freeMem = os.freemem();
 const usedMem = totalMem - freeMem;
 const formattedUsedMem = formatSize(usedMem);
 const formattedTotalMem = formatSize(totalMem);
 
 let mbut = `
╔═《 𝗗𝗘𝗠𝗢𝗡 𝗣𝗔𝗡𝗘𝗟 》═╗ 
║ ɴᴀᴍᴇ : ${pushname} 
║ ʙᴏᴛ : ${global.namaBot} 
║ ᴍᴏᴅᴇ : ${client.public ? 'Public' : 'Self'} 
║ ᴜsᴇʀ : @${m.sender.split('@')[0]} 
║ ʀᴀᴍ : ${formattedUsedMem} / ${formattedTotalMem} 
╚════════════╝ 

┏━━━【 Owner 】━━━┓ 
┃ • ${prefix}cekidgc 
┃ • ${prefix}pushkontak 
┃ • ${prefix}pushkontakid 
┃ • ${prefix}done 
┃ • ${prefix}getvo
┃ • ${prefix}csesi 
┃ • ${prefix}addcase
┃ • ${prefix}getcase
┃ • ${prefix}editcase
┃ • ${prefix}delcase
┃ • ${prefix}public 
┃ • ${prefix}self 
┃ • ${prefix}join
┃ • ${prefix}leave
┃ • ${prefix}rent 
┃ • ${prefix}antilink (group)
┃ • ${prefix}eval
┃ • ${prefix}log
┃ • ${prefix}del
┃ • > 
┃ • < 
┃ • $ 
┗━━━━━━━━━━━━┛
 `;

 client.sendMessage(m.chat, {
 document: fs.readFileSync("./package.json"),
 fileName: "Lets kill it!!! - Munchy",
 mimetype: "application/pdf",
 fileLength: 999999999999,
 pageCount: 999,
 caption: mbut,
 contextInfo: {
 forwardingScore: 999,
 isForwarded: true,
 mentionedJid: [sender],
 forwardedNewsletterMessageInfo: {
 newsletterName: "Munchy࿐ ",
 newsletterJid: `120363349621603815@newsletter`,
 },
 externalAdReply: { 
 title: "Munchy", 
 body: "Munchy is your friendly WhatsApp bot — always ready to help, reply, and keep the chat going!",
 thumbnailUrl: `https://unitedcamps.in/Images/IMG_1744220705.jpg`,
 sourceUrl: "https://youtube.com/@baazteardvont?si=9b-yuiV-CK_H9K3t", 
 mediaType: 1,
 renderLargerThumbnail: true
 }
 }
 }, { quoted: m });
};
break
break;
case 'start': { 
  
  await reaction(m.chat, '✅')
  await client.sendMessage(m.chat, {
    document: { url: 'https://unitedcamps.in/Images/IMG_1744220705.jpg' },
    mimetype: "application/msword",
    fileName: "Munchy - 1.0",
    fileLength: "999999999999",
    jpegThumbnail: fs.readFileSync("./start/lib/media/th.jpg"),
    caption: `Munchy - Beta Bot WhatsApp
Munchy adalah bot WhatsApp multifungsi yang masih dalam tahap beta development.

> Munchy versi beta masih terus dikembangkan.`,
    footer: '> Munchy © 2025 ',
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363349621603815@newsletter',
        newsletterName: ` Munchy࿐ `,
        serverMessageId: 2
      },
      externalAdReply: {
        title: "Munchy - 1.0",
        body: 'Beta',
        thumbnailUrl: "https://unitedcamps.in/Images/IMG_1744220691.jpg",
        sourceUrl: `https://youtube.com/@baazteardvont?si=9b-yuiV-CK_H9K3t`,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    },
    buttons: [
      { buttonId: `.jadibot`, buttonText: { displayText: `Jadibot 🖥️` }, type: 1 },
      { buttonId: `.owner`, buttonText: { displayText: `Owner 🦅` }, type: 1 },
      { buttonId: `.statusbot`, buttonText: { displayText: `Status Bot⚙` }, type: 1 },
      {
        buttonId: 'flow_button',
        buttonText: { displayText: 'Munchy - 1.0' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: "Follow: @munchyxsa",
            sections: [
              {
                title: "M E N U",
                highlight_label: "MENU",
                rows: [
                  {
                    title: "📖 Menu",
                    id: ".allmenu"
                  }
                ]
              },
              {
                title: "D O W N L O A D",
                highlight_label: "MENU",
                rows: [
                  {
                    title: "📥 Download",
                    id: ".menudownload"
                  }
                ]
              },
              {
                title: "G R O U P",
                highlight_label: "MENU",
                rows: [
                  {
                    title: "👥 Group",
                    id: ".menugroup"
                  }
                ]
              },
              {
                title: "V O I C E",
                highlight_label: "MENU",
                rows: [
                  {
                    title: "📢 Voice Effects",
                    id: ".menuvoice"
                  }
                ]
              },
              {
                title: "B E T A",
                highlight_label: "MENU",
                rows: [
                  {
                    title: "💻 Beta Features",
                    id: ".menubeta"
                  }
                ]
              },
              {
                title: "F U N",
                highlight_label: "MENU",
                rows: [
                  {
                    title: "🎭 Fun",
                    id: ".menufun"
                  }
                ]
              },
               {
                title: "A N I M E",
                highlight_label: "MENU",
                rows: [
                  {
                    title: "🍥 Anime",
                    id: ".menuanime"
                  }
                ]
              },
              {
                title: "O W N E R",
                highlight_label: "MENU",
                rows: [
                  {
                    title: "🔒 Owner Only",
                    id: ".menuowner"
                  }
                ]
              },
            ]
          })
        }
      }
    ],
    headerType: 6,
    viewOnce: true
  }, { quoted: m });

  
  const stickerPath = '/storage/emulated/0/Munch/menu.webp';
  if (fs.existsSync(stickerPath)) {
    const buffer = fs.readFileSync(stickerPath);
    await client.sendMessage(m.chat, {
      sticker: buffer
    });
  } else {
    reply("⚠️ Stiker menu tidak ditemukan, Tuanku.");
  }
}
break;
case 'owner': { 
    const kontak = {
        "displayName": 'Munchy',
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: ${global.nama}\nitem1.TEL;waid=${global.owner}:${global.owner}\nitem1.X-ABLabel:\n Don't Spam \nURL;Email Owner:Munchynes@gmail.com\nORG: This is the greatest king\nEND:VCARD`
    };

    await client.sendMessage(from, {
        contacts: { contacts: [kontak] },
        contextInfo: {
            forwardingScore: 999, 
            isForwarded: false, 
            mentionedJid: [sender],
            "externalAdReply": {
                "showAdAttribution": true,
                "renderLargerThumbnail": false,
                "title": "Wanna chit chat huh?", 
                "containsAutoReply": true,
                "mediaType": 1, 
                "jpegThumbnail": fs.readFileSync("./fixx.jpg"),
                "thumbnailUrl": "https://unitedcamps.in/Images/IMG_1744220705.jpg",
                "sourceUrl": "https://whatsapp.com/channel/0029ValLxIw9xVJewuwoqB1G"
            }
        }
    }, { quoted: m }); 
}
break;

case "cosplay": {
  const anu = `https://archive-ui.tanakadomp.biz.id/asupan/cosplay`;
  const response = await axios.get(anu, { responseType: 'arraybuffer' })
  try {
    client.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: 'Succes'
    }, { quoted: m })
  } catch (err) {
    console.log(err);
    m.reply('undefined')
  }
}
break
case 'upsw': { 
    const baileys = require("@whiskeysockets/baileys");

    async function fetchParticipants(...jids) {
        let results = [];
        for (const jid of jids) {
            let { participants } = await client.groupMetadata(jid);
            participants = participants.map(({ id }) => id);
            results = results.concat(participants);
        }
        return results;
    }

    async function mentionStatus(jids, content) {
        const msg = await baileys.generateWAMessage(baileys.STORIES_JID, content, {
            upload: client.waUploadToServer
        });

        let statusJidList = [];
        for (const _jid of jids) {
            if (_jid.endsWith("@g.us")) {
                for (const jid of await fetchParticipants(_jid)) {
                    statusJidList.push(jid);
                }
            } else {
                statusJidList.push(_jid);
            }
        }
        statusJidList = [...new Set(statusJidList)];

        await client.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
            statusJidList,
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: jids.map((jid) => ({
                                tag: "to",
                                attrs: { jid },
                                content: undefined
                            }))
                        }
                    ]
                }
            ]
        });

        for (const jid of jids) {
            let type = jid.endsWith("@g.us") ? "groupStatusMentionMessage" : "statusMentionMessage";
            await client.relayMessage(jid, {
                [type]: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            }, {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "true" },
                        content: undefined
                    }
                ]
            });
        }

        return msg;
    }

    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    let content = {};

    if (mime) {
        let media = await q.download();

        if (/image/.test(mime)) {
            content.image = media;
        } else if (/video/.test(mime)) {
            content.video = media;
        } else if (/audio/.test(mime)) {
            content.audio = media;
        } else {
            return m.reply("Jenis file tidak didukung!");
        }

        if (q.text) content.caption = q.text;
    } else if (args[0]) {
        let url = args[0];
        let type = args[1] || 'text';

        if (type === 'image') {
            content.image = { url };
        } else if (type === 'video') {
            content.video = { url };
        } else if (type === 'audio') {
            content.audio = { url };
        } else {
            content.text = args.slice(1).join(" ") || url;
        }
    } else {
        return m.reply("Reply media atau masukkan URL dengan format:\n.upsw <url> <image/video/audio/text>");
    }

    mentionStatus([m.chat], content).catch(console.error);
}
break;
case 'ban': { 
  if (!isCreator) return reply("Hanya Tuan yang boleh!");

  let target = m.mentionedJid?.[0] || m.quoted?.sender || null;
  if (!target || !text.includes('|')) return reply("Format:\n.ban @user 2d|alasan");

  let [dur, alasan] = text.split('|');
  let [_, jumlah, satuan] = dur.match(/(\d+)([dhwm])/i) || [];
  if (!jumlah) return reply("Format waktu salah. Gunakan 2d, 3h, dst.");

  let ms = {
    d: 86400000, h: 3600000, w: 604800000, m: 2592000000,
  }[satuan] * parseInt(jumlah);

  let hingga = Date.now() + ms;

  global.banList[target] = {
    until: hingga,
    reason: alasan.trim(),
    by: m.sender,
    notified: true 
  };

  reply(`@${target.split("@")[0]} telah dibanned selama ${jumlah}${satuan}`, { mentions: [target] });

  await client.sendMessage(target, {
  document: { url: 'https://unitedcamps.in/Images/IMG_1744220705.jpg' },
  mimetype: "application/msword",
  fileName: "Banned Notification",
  fileLength: "999999999999",
  jpegThumbnail: fs.readFileSync("./start/lib/media/th.jpg"),
  caption: ` *Kamu telah dibanned!*\n\n Hingga: *${moment(hingga).format("LLL")}*\n Alasan: *${alasan.trim()}*`,
  footer: 'Munchy © 2025',
  contextInfo: {
    isForwarded: true,
    externalAdReply: {
      title: "Anda Terbanned",
      body: "Chat Owner untuk unban",
      thumbnailUrl: "https://unitedcamps.in/Images/IMG_1744220691.jpg",
      sourceUrl: `https://wa.me/${m.sender.split("@")[0]}`,
      mediaType: 1,
      renderLargerThumbnail: true
    }
  },
  headerType: 6,
  viewOnce: true
});
}
break;

case 'baninfo': { 
  let target = m.mentionedJid?.[0] || m.quoted?.sender || m.sender;
  let data = global.banList[target];

  if (!data) return reply("User ini tidak dalam status ban.");

  if (Date.now() > data.until) {
    delete global.banList[target];
    return reply("User ini sudah tidak dibanned.");
  }

  let sisa = data.until - Date.now();
  let d = moment.duration(sisa);

  reply(`📋 *Info Ban:*
• Alasan: *${data.reason}*
• Oleh: @${data.by.split("@")[0]}
• Bebas dalam: *${d.days()}h ${d.hours()}j ${d.minutes()}m*
`, { mentions: [data.by] });
}
break;
case 'unban': { 
  if (!isCreator) return reply("Hanya untuk Tuan pemilik bot!");

  let target = m.mentionedJid?.[0] || m.quoted?.sender || args[0];
  if (!target) return reply("Gunakan: .unban @user");

  if (!global.banList[target]) return reply("User ini tidak dalam status ban.");

  delete global.banList[target];
  reply(`User @${target.split("@")[0]} telah di-unban.`, { mentions: [target] });

  client.sendMessage(target, {
    text: `✅ Kamu telah dibebaskan dari larangan penggunaan bot oleh sang Tuan.`,
  });
}
break;
case "luckynumber": {
 let luckyNumber = Math.floor(Math.random() * 100) + 1;
 m.reply(`🍀 *Angka Keberuntunganmu Hari Ini:* *${luckyNumber}* 🍀`);
};
break;

case "ramalan": {
 let fortunes = [
 "🔮 Hari ini keberuntungan ada di pihakmu!",
 "⚡ Waspada dengan keputusan besar hari ini.",
 "🌞 Kamu akan mendapatkan kejutan menyenangkan!",
 "💼 Kesempatan emas sedang mendekat, jangan lewatkan!"
 ];
 let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
 m.reply(`🔮 *Ramalan Hari Ini:* \n\n${randomFortune}`);
};
break;

case "glitchtext": {
 if (!args.length) return m.reply("Masukkan teks untuk diubah menjadi glitch!");
 
 let text = args.join(" ");
 let glitch = text.split("").map(char => char + "̖̫͟").join("");
 
 m.reply(`🌌 *Glitch Text:* \n\n${glitch}`);
};
break;

case 'getcase' : {
if (!isCreator) return reply("Khusus owner bre!");
 if (!text) return reply("Format:\n.getcase waifus");

 const fs = require('fs');
 const filePath = './start/system.js';
 const isi = fs.readFileSync(filePath, 'utf8');

 const regex = new RegExp(`case ['"\`]${text}['"\`]\\s*:\\s*{([\\s\\S]*?)break`, 'i');
 const match = isi.match(regex);

 if (!match) return reply("Case tidak ditemukan.");

 let output = match[1].trim(); 

 if (output.length > 4000) output = output.slice(0, 4000) + '\n... (terpotong)';

 reply(output); 
}
break

case 'editcase': { 
  if (!isCreator) return reply("Khusus owner bre!");
  if (!text.includes('|')) return reply("Format:\n.editcase command|kode_baru");

  const [target, newCode] = text.split('|');
  const fs = require('fs');
  const filePath = './start/system.js';
  const isi = fs.readFileSync(filePath, 'utf8');

  const regex = new RegExp(`\\s*case ['"\`]${target}['"\`]\\s*:\\s*{[\\s\\S]*?break`, 'i');
  if (!regex.test(isi)) return reply("Case tidak ditemukan.");

  
  const kodeBaru = `\ncase '${target}' : {\n${newCode.trim()}\nbreak`;

  const hasil = isi.replace(regex, kodeBaru);
  fs.writeFileSync(filePath, hasil, 'utf8');

  reply(`✅ Case "${target}" berhasil diedit.`);
}
break;

case 'delcase': { 
 if (!isCreator) return reply("Khusus owner bre!");
 if (!text) return reply("Format:\n.delcase waifus");

 const fs = require('fs');
 const filePath = './start/system.js';
 const isi = fs.readFileSync(filePath, 'utf8');

 const regex = new RegExp(`\\s*case ['"\`]${text}['"\`]\\s*:\\s*{[\\s\\S]*?break`, 'i');
 if (!regex.test(isi)) return reply("Case tidak ditemukan.");

 const hasil = isi.replace(regex, '');
 fs.writeFileSync(filePath, hasil, 'utf8');
 reply(` Case "${text}" dihapus.`);
}
break;

case 'log': { 
 if (!isCreator) return reply("Khusus owner!");
 try {
 const val = eval(text);
 reply("```js\n" + require('util').inspect(val) + "\n```");
 } catch (e) {
 reply("Gagal ngelog:\n" + e);
 }
}
break;

case 'eval': { 
 if (!isCreator) return reply("Khusus owner!");
 if (!text) return reply("Kirim kode JS untuk dijalankan.");

 try {
 let result = await eval(`(async () => { ${text} })()`);
 if (typeof result !== 'string') result = require('util').inspect(result);
 reply("```js\n" + result + "\n```");
 } catch (err) {
 reply("❌ Error:\n" + err);
 }
}
break;
case 'catatan' : {
if (!isCreator) return reply("Khusus owner bre!");
 if (!text) return reply("Ketik sesuatu dong bre, contoh:\n.catatan fix leveling bot");

 const fs = require('fs');
 const folderPath = './database';
 const filePath = folderPath + '/catatan.txt';

 
 if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);

 
 if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, '');

 fs.appendFileSync(filePath, `• ${text}\n`);
 reply("✅ Catatan disimpan.");
}
break;

case 'cekcatatan': { 
 if (!isCreator) return reply("Khusus owner bre!");
 const fs = require('fs');
 const filePath = './database/catatan.txt';

 if (!fs.existsSync(filePath)) return reply("Belum ada catatan.");

 const data = fs.readFileSync(filePath, 'utf8');
 reply(`🗒️ Catatan:\n\n${data}`);
}
break;

case 'hapuscatatan': { 
 if (!isCreator) return reply("Khusus owner bre!");
 const fs = require('fs');
 const filePath = './database/catatan.txt';

 if (!fs.existsSync(filePath)) return reply("Catatan sudah kosong.");

 fs.writeFileSync(filePath, '');
 reply("🗑️ Semua catatan berhasil dihapus.");
}
break;

case 'chess': { 
 if (!args[0]) return reply("Masukkan username Chess.com");
 let user = args[0].toLowerCase();

 try {
 const res = await fetch(`https://api.chess.com/pub/player/${user}`);
 if (!res.ok) return reply("User tidak ditemukan.");
 const data = await res.json();

 let teks = `♟️ *Profil Chess.com*
▢ Username : ${data.username}
▢ Nama Lengkap : ${data.name || "N/A"}
▢ Judul : ${data.title || "None"}
▢ Negara : ${data.country.split('/').pop()}
▢ Status : ${data.status}
▢ Followers : ${data.followers}
▢ Akun Dibuat : ${moment(data.joined * 1000).format('LL')}`;

 reply(teks);
 } catch (e) {
 console.error(e);
 reply("Gagal mengambil data.");
 }
}
break;

case 'avatar': { 
    if (!args[0]) return reply("Masukkan nama/avatar ID!\nContoh: .avatar Munchy bottts");

    let seed = encodeURIComponent(args[0]);
    let style = args[1] ? args[1].toLowerCase() : 'bottts';

    const validStyles = [
        "adventurer", "adventurer-neutral", "avataaars", "big-ears", "big-ears-neutral",
        "big-smile", "bottts", "croodles", "croodles-neutral", "identicon", 
        "initials", "lorelei", "micah", "miniavs", "notionists", 
        "open-peeps", "personas", "pixel-art", "pixel-art-neutral", "rings", 
        "shapes", "thumbs"
    ];

    if (!validStyles.includes(style)) {
        return reply(`❌ Style tidak dikenali.\nGunakan salah satu:\n${validStyles.join(', ')}`);
    }

    let url = `https://api.dicebear.com/7.x/${style}/png?seed=${seed}`;

    await client.sendMessage(m.chat, {
        image: { url },
        caption: `🎨 Avatar untuk: *${args[0]}*\nGaya: *${style}*`
    }, { quoted: m });
}
break;

case 'vote': { 
 if (!isGroup) return reply('Fitur hanya untuk grup!');
 if (!text.includes('|')) return reply('Format: .vote [pertanyaan]|[opsi1,opsi2,...]');

 let [question, optionString] = text.split('|');
 let options = optionString.split(',').map(v => v.trim()).filter(Boolean);

 if (options.length < 2) return reply('Minimal 2 opsi, maksimal 12.');
 if (options.length > 12) return reply('Maksimal 12 opsi sesuai batasan WA.');

 await client.sendMessage(m.chat, {
 poll: {
 name: question.trim(),
 values: options
 }
 });
}
break;



case 'roast': { 
  if (!m.mentionedJid[0]) return reply('Tag orangnya dulu, bre!\nContoh: .roast @user');
  let target = m.mentionedJid[0];
  const roast = [
  "Lo tuh bukan jelek, lo tuh kayak hasil sketch yang gak jadi.",
  "IQ lo kayak sinyal di gunung, kadang muncul tapi gak bisa dipake.",
  "Kalo lo jadi karakter game, pasti NPC yang diem doang.",
  "Bakat lo banyak... tapi gak ada yang berguna.",
  "Setiap lo ngomong, IQ gue ikut drop 3 poin.",
  "Lo tuh kayak meme tahun 2012... gak lucu tapi maksa muncul.",
  "Lo diem aja, itu udah kontribusi terbaik lo.",
  "Lo tuh bukan toxic, lo tuh spoiler hidup orang.",
  "Lo sekolah gak? Kok masih gagal jadi orang?",
  "Lo tuh kayak error 404... hilang arah dan fungsi."
];
  let hasil = roast[Math.floor(Math.random() * roast.length)];
  reply(`@${target.split('@')[0]}\n"${hasil}"`, [target]);
}
break;


case 'roastme': { 
  const selfRoast = [
    "Gue sadar kok, gue main bot doang padahal tugas belum kelar.",
    "Dikira edgy, padahal cuma ngambek.",
    "Bakat gue tuh banyak... tapi semua gak berguna.",
    "Gue tuh kayak sinyal, kadang ada kadang gak dipake.",
    "Ngoding-ngoding, hasilnya error juga.",
    "Bilangnya kuat, padahal login ke Minecraft aja pakai akun temen.",
    "Gue jago diem di tempat dan gak berkembang.",
    "Dibilang keren, tapi sama kaca pun malu ngaca.",
    "Kadang gue mikir... dan langsung nyerah.",
    "Gue tuh bukti bahwa evolusi bisa gagal."
  ];
  let hasil = selfRoast[Math.floor(Math.random() * selfRoast.length)];
  reply(`🪞 "${hasil}"`);
}
break;


case 'darkroast': { 
  if (!m.mentionedJid[0]) return reply('Tag korbannya bre.\nContoh: .darkroast @user');
  let target = m.mentionedJid[0];
  const dark = [
    "Muka lo kayak loading screen... bikin nunggu tapi gak penting.",
    "Orang tuamu ngasih lo ke dunia, dunia ngasih lo ke kita... dan kita nyesel.",
    "Lo tuh plot twist dari hidup orang lain, dan itu plotnya tragedi.",
    "Lo gak toxic, lo radioaktif.",
    "Lo tuh alasan kenapa tombol block diciptakan.",
    "Lo bukan beban keluarga... lo paket lengkap dengan cicilan.",
    "Senyum lo bisa nyembuhin stress, karena orang bakal langsung nyadar: hidup mereka gak separah itu.",
    "Lo tuh kayak notifikasi spam: muncul mulu, tapi gak ada yang mau buka.",
    "Tiap lo ngetik, kamus Oxford minta pensiun.",
    "Bahkan error 404 lebih berguna dari lo."
  ];
  let hasil = dark[Math.floor(Math.random() * dark.length)];
  reply(`@${target.split('@')[0]}\n"${hasil}"`, [target]);
}
break;

case 'puji': { 
 if (!m.mentionedJid[0]) return reply('Tag dulu bre.\nContoh: .puji @user');
 let target = m.mentionedJid[0];
 const pujian = [
  "Kamu tuh kayak WiFi gratis... dicari semua orang, walau kadang lemot.",
  "Senyum kamu bisa bikin orang lupa utang.",
  "Kamu itu kayak jam istirahat... dinanti semua orang.",
  "Kalo kamu jadi aplikasi, pasti versi premium tanpa iklan.",
  "Kamu tuh kayak es teh siang bolong, bikin adem walau lagi panas.",
  "Kamu gak perfect, tapi kehadiranmu kayak checklist yang paling penting.",
  "Kalo semua orang kayak kamu, dunia gak butuh filter lagi.",
  "Ngeliat kamu tuh kayak nemu charger pas baterai 1%.",
  "Kamu kayak playlist favorit... susah buat di-skip.",
  "Gak semua bintang ada di langit, beberapa nongol di chat kayak kamu."
];
 let hasil = pujian[Math.floor(Math.random() * pujian.length)];
 reply(`@${target.split('@')[0]}\n${hasil}`, [target]);
}
break;
case 'curhat': { 
  if (!text) return reply('Tulis curhatnya dong bre.\nContoh: .curhat Aku capek ditinggalin mulu.');

  global.listCurhat = global.listCurhat || [];

  global.listCurhat.push({
    user: m.sender,
    time: new Date().toLocaleString('id'),
    text: text
  });

  reply(`🗒️ Curhatan kamu udah tersimpan dengan aman.\nTetap semangat ya!`);
}
break;
case 'bacacurhat': { 
  if (!global.listCurhat || global.listCurhat.length === 0) return reply('Belum ada curhatan yang masuk.');

  let teks = `📩 *Daftar Curhatan:*\n\n`;
  global.listCurhat.forEach((c, i) => {
    teks += `${i + 1}. @${c.user.split('@')[0]} - ${c.time}\n${c.text}\n\n`;
  });

  reply(teks.trim(), global.listCurhat.map(c => c.user));
}
break;
case 'kenapaya': { 
 const alasan = [
  "Karena notifikasi kamu disangka tag dari bot lain.",
  "Karena dia pikir kamu ngechat cuma buat pinjam diamond.",
  "Karena kamu ngetik 'hai', dia kira kamu typo dari 'halo dunia'.",
  "Karena lo terlalu real buat dia yang hidup di filter.",
  "Karena dia sibuk... mikirin orang lain.",
  "Karena lo muncul cuma pas butuh, bukan pas butuh lo.",
  "Karena kamu ngetik jam 3 pagi, dikira horor.",
  "Karena dia pikir kamu udah move on. Kamu belum, dia udah.",
  "Karena kamu dianggep temen... yang gampang diabaikan.",
  "Karena vibes kamu kayak iklan skip 5 detik."
];
 let pick = alasan[Math.floor(Math.random() * alasan.length)];
 reply(`Kenapa kamu gak dibalas?\n${pick}`);
}
break;


case 'del': { 
 if (!m.quoted) return reply('Balas pesan yang mau dihapus, bre.');
 if (isGroup && !isBotGroupAdmins) return reply('Bot bukan admin, gak bisa hapus pesan.');
 if (isGroup && !isGroupAdmins && !Access) return reply('Lu bukan admin bre, gak bisa nyuruh bot hapus-hapus.');

 try {
 await client.sendMessage(m.chat, {
 delete: {
 remoteJid: m.chat,
 fromMe: false,
 id: m.quoted.id,
 participant: m.quoted.sender
 }
 });
 } catch (e) {
 console.log(e);
 reply('❌ Gagal menghapus pesan. Pastikan pesan masih bisa dihapus.');
 }
}
break;

case 'statusbot': { 
 const os = require('os');
 const used = process.memoryUsage();
 const format = (x) => (x / 1024 / 1024).toFixed(2) + ' MB';

 const uptimeSec = process.uptime();
 const h = Math.floor(uptimeSec / 3600);
 const m = Math.floor((uptimeSec % 3600) / 60);
 const s = Math.floor(uptimeSec % 60);

 const platform = os.platform();
 const arch = os.arch();

 const ramUsed = format(used.heapUsed);
 const ramTotal = format(os.totalmem());

 const old = Date.now();
 const ping = Date.now() - old;

 let teks = `📊 *Status Bot Munchy*\n\n` +
 `⏱️ Uptime: ${h} jam ${m} menit ${s} detik\n` +
 `🧠 RAM: ${ramUsed} / ${ramTotal}\n` +
 `⚙️ Platform: ${platform} ${arch}\n` +
 `⚡️ Speed: ${ping} ms`;

 reply(teks);
}
break;

case 'tourl': { 
 if (!m.quoted) return reply('Balas gambar atau dokumen yang mau di-upload!');
 let mime = m.quoted.mtype || '';
 if (!/image|video|document/.test(mime)) return reply('File tidak didukung.');

 try {
 let media = await client.downloadAndSaveMediaMessage(m.quoted);
 let { upload } = require('./lib/uploader'); 
 let link = await upload(media);
 fs.unlinkSync(media);
 reply(`📤 Sukses upload!\n\n🌐 URL:\n${link}`);
 } catch (err) {
 console.log(err);
 reply('❌ Gagal upload, pastikan file valid & tidak kadaluarsa.');
 }
}
break;

case 'sadboymode':
case 'ragemode':
case 'flirtmode': { 
 let mode = command.replace('mode', '');
 if (!['on', 'off'].includes(text)) return reply(`Contoh: .${command} on/off`);
 global.munchyMode[mode] = text === 'on';
 reply(`✅ ${mode} mode ${text === 'on' ? 'AKTIF' : 'NONAKTIF'}`);
}
break;

case 'setting': { 
	if(!isCreator) return reply(`U cant do that boy hehehe`)
 await reaction(m.chat, '✅');
 await client.sendMessage(m.chat, {
 document: { url: 'https://unitedcamps.in/Images/IMG_1744220705.jpg' },
 mimetype: 'application/msword',
 fileName: 'Munchy - 1.0',
 fileLength: '999999999999',
 jpegThumbnail: fs.readFileSync('./start/lib/media/th.jpg'),
 caption: `⚙️ Settings`,
 footer: '> Munchy © 2025',
 contextInfo: {
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363349621603815@newsletter',
 newsletterName: ' Munchy࿐ ',
 serverMessageId: 2
 },
 externalAdReply: {
 title: 'Munchy - 1.0',
 body: 'Beta',
 thumbnailUrl: 'https://unitedcamps.in/Images/IMG_1744220691.jpg',
 sourceUrl: 'https://youtube.com/@baazteardvont?si=9b-yuiV-CK_H9K3t',
 mediaType: 1,
 renderLargerThumbnail: true
 }
 },
 buttons: [
 {
 buttonId: 'flow_button',
 buttonText: { displayText: 'Atur Fitur 🔧' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'Pengaturan Fitur Munchy',
 sections: [
 {
 title: 'Fitur Proteksi',
 rows: [
 { title: 'Antilink ON', id: '.on antilink' },
 { title: 'Antilink OFF', id: '.off antilink' },
 { title: 'Antigroup ON', id: '.on antigroup' },
 { title: 'Antigroup OFF', id: '.off antigroup' },
 { title: 'NSFW ON', id: '.on nsfw' },
 { title: 'NSFW OFF', id: '.off nsfw' }
 ]
 }
 ]
 })
 }
 }
 ],
 headerType: 6,
 viewOnce: true
 }, { quoted: m });
}
break;

case 'on':
case 'off': { 
	if (!isCreator) return reply(`U cant do that boy hehehe`);
	
	const fitur = text.trim().toLowerCase();
	if (!fitur) return reply(`Contoh: .${command} antilink`);

	const fiturList = ['antilink', 'antigroup', 'nsfw','autoread','faketyping','fakerecording'];
	if (!fiturList.includes(fitur)) return reply(`❌ Fitur *${fitur}* tidak dikenal.`);

	const id = m.chat;
	const enable = command === 'on';

	switch (fitur) {
		case 'nsfw':
			global.nsfwMode[id] = enable;
			reply(`${enable ? '✅' : '❌'} *NSFW Mode* ${enable ? 'diaktifkan' : 'dimatikan'}.`);
			break;
		case 'antilink':
			global.antilink[id] = enable;
			reply(`${enable ? '✅' : '❌'} *Antilink* ${enable ? 'diaktifkan' : 'dimatikan'}.`);
			break;
		case 'antigroup':
			global.antigroup[id] = enable;
			reply(`${enable ? '✅' : '❌'} *Antigroup* ${enable ? 'diaktifkan' : 'dimatikan'}.`);
			break;
			case 'autoread':
    global.autoRead = enable;
    reply(`${enable ? '✅' : '❌'} *Auto Read* ${enable ? 'diaktifkan' : 'dimatikan'}.`);
    break;
  case 'typing':
    global.fakeTyping = enable;
    reply(`${enable ? '✅' : '❌'} *Fake Typing* ${enable ? 'diaktifkan' : 'dimatikan'}.`);
    break;
  case 'recording':
    global.fakeRecording = enable;
    reply(`${enable ? '✅' : '❌'} *Fake Recording* ${enable ? 'diaktifkan' : 'dimatikan'}.`);
    break;
	}
}
break;

case 'searchvid': { 
 if (!text) return reply('Ketik judul video yang mau dicari!\nContoh: .searchvid naruto');

 try {
 const res = await fetch(`https://yt-api.5ro4n.dev/search?query=${encodeURIComponent(text)}`);
 const json = await res.json();
 if (!json || !json.results || json.results.length === 0) return reply('❌ Video tidak ditemukan.');

 const vid = json.results.find(v => v.type === 'video');
 if (!vid) return reply('❌ Tidak ada hasil video yang cocok.');

 const ytlink = `https://youtube.com/watch?v=${vid.id}`;
 const caption = `📹 *${vid.title}*\n📺 Channel: ${vid.channel.name}\n⏱️ Durasi: ${vid.duration}\n🔗 Link: ${ytlink}`;

 await client.sendMessage(m.chat, {
 caption,
 footer: '> Munchy © 2025',
 document: { url: ytlink },
 mimetype: 'application/pdf',
 fileName: `Hasil Pencarian`,
 jpegThumbnail: fs.readFileSync('./start/lib/media/th.jpg'),
 buttons: [
 {
 buttonId: 'flow_button',
 buttonText: { displayText: 'Pilih Download 🔽' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'Download Pilihan',
 sections: [
 {
 title: 'Download via YouTube',
 rows: [
 { title: 'Download Video', id: `.ytmp4 ${ytlink}` },
 { title: 'Download Audio', id: `.ytmp3 ${ytlink}` }
 ]
 }
 ]
 })
 }
 }
 ],
 headerType: 6,
 viewOnce: true
 }, { quoted: m });

 } catch (e) {
 console.log(e);
 reply('❌ Gagal mencari video.');
 }
}
break;

case 'ytmp4': { 
 if (!text) return reply('Contoh: .ytmp4 https://youtube.com/watch?v=xxxx');

 try {
 const res = await fetch(`https://api.itsrose.site/youtube?url=${encodeURIComponent(text)}&apikey=rose`);
 const json = await res.json();

 if (!json.status) return reply('❌ Gagal ambil video.');
 let { title, result } = json;
 await client.sendMessage(m.chat, {
 video: { url: result.video.url },
 caption: `🎬 *${title}*\n📦 Ukuran: ${result.video.size}`,
 }, { quoted: m });
 } catch (e) {
 console.log(e);
 reply('❌ Gagal download video.');
 }
}
break;

case 'ytmp3': { 
 if (!text) return reply('Contoh: .ytmp3 https://youtube.com/watch?v=xxxx');

 try {
 const res = await fetch(`https://api.itsrose.site/youtube?url=${encodeURIComponent(text)}&apikey=rose`);
 const json = await res.json();

 if (!json.status) return reply('❌ Gagal ambil audio.');
 let { title, result } = json;
 await client.sendMessage(m.chat, {
 audio: { url: result.audio.url },
 mimetype: 'audio/mpeg',
 fileName: `${title}.mp3`,
 ptt: false
 }, { quoted: m });
 } catch (e) {
 console.log(e);
 reply('❌ Gagal download audio.');
 }
}
break;
case 'pin': {
  const query = text?.trim();
  if (!query) return reply('Contoh: .pin anime girl');

  await loading();

  try {
    const res = await axios.get(`https://api.lolhuman.xyz/api/pinterest?apikey=4b24da2ebc16151556e621d9&query=${encodeURIComponent(query)}`);
    const data = res.data.result;
    if (!data || !Array.isArray(data) || data.length === 0)
      return reply('❌ Tidak ditemukan hasilnya.');

    const randomImg = data[Math.floor(Math.random() * data.length)];

    client.sendMessage(from, {
      image: { url: randomImg },
      caption: `✨ Hasil Pinterest:\n*${query}*`
    }, { quoted: m });

  } catch (err) {
    console.log(err);
    reply('⚠️ Gagal mengambil data dari Pinterest.');
  }
  break;
}

case 'pint': {
  const query = text?.trim();
  if (!query) return reply('Contoh: .pint anime aesthetic');

  await loading();

  try {
    const res = await axios.get(`https://pint-api.vercel.app/images/${encodeURIComponent(query)}`);
    const results = res.data?.data;
    
    if (!results || !Array.isArray(results) || results.length === 0)
      return reply('❌ Tidak ditemukan hasilnya.');

    const image = results[Math.floor(Math.random() * results.length)];

    client.sendMessage(from, {
      image: { url: image.url },
      caption: `✨ Pinterest: *${query}*`
    }, { quoted: m });

  } catch (e) {
    console.log(e);
    reply('⚠️ Gagal ambil dari Pinterest.');
  }

  break;
}

case 'komikindo': {
    if (!text) return reply('Masukin judul yang mau dicari, bre.');
    
    reply('Tunggu bentar, lagi cari...');
    
    try {
        let res = await fetch(`https://api.siputzx.my.id/api/anime/komikindo-serach?query=${encodeURIComponent(text)}`);
        let json = await res.json();
        
        if (!json.status || !json.result || json.result.length === 0) {
            return reply('Gak ada yang ketemu bre. Coba judul lain.');
        }

        let hasil = json.result.map((v, i) => `${i + 1}. *${v.title}*\nLink: ${v.link}`).join('\n\n');
        reply(`*Hasil pencarian:*\n\n${hasil}`);
    } catch (e) {
        console.error(e);
        reply('Ada error bre, coba lagi nanti.');
    }
}
break;

case 'brave': {
 if (!text) return reply('Masukin yang mau dicari, bre.');

 reply('Sebentar, lagi cari jawaban di Brave...');
 
 try {
 let res = await fetch(`https://api.siputzx.my.id/api/s/brave?query=${encodeURIComponent(text)}`);
 let json = await res.json();

 if (!json.status || !json.result || json.result.length === 0) {
 return reply('Gak ketemu apa-apa bre.');
 }

 let hasil = json.result.map((v, i) => `${i + 1}. *${v.title}*\n${v.desc}\n🔗 ${v.url}`).join('\n\n');
 reply(`*Hasil pencarian dari Brave:*\n\n${hasil}`);
 } catch (e) {
 console.error(e);
 reply('Error bre, mungkin API nya ngelag.');
 }
}
break;


case 'getchat': {
    if (!isCreator) return reply("❌ Khusus Owner!");

    if (!text) return reply("Format: .getchat 628xxxxx");

    let target = text.replace(/\D/g, '') + '@s.whatsapp.net';
    let limit = 20;

    try {
        const chatData = store.messages[target];
        if (!chatData) {
            console.log(`[ERROR] Tidak ditemukan chat untuk ${target}`);
            return reply("❌ Tidak ada data chat dengan nomor ini.");
        }

        const messagesArray = Object.values(chatData).slice(-limit);
        if (messagesArray.length === 0) {
            console.log(`[INFO] Chat kosong untuk ${target}`);
            return reply("❌ Belum ada chat yang tersimpan.");
        }

        let hasil = `📜 *Chat Bot dengan ${text}:*\n\n`;

        for (let msg of messagesArray) {
            let timestamp = (msg.messageTimestamp || msg.messageTimestampLow || Date.now()) * 1000;
            let waktu = moment(timestamp).format('HH:mm:ss DD/MM/YY');

            if (!msg.message) continue; // skip kalau message kosong

            let konten = '';
            if (msg.message.conversation) konten = msg.message.conversation;
            else if (msg.message.extendedTextMessage?.text) konten = msg.message.extendedTextMessage.text;
            else if (msg.message.imageMessage?.caption) konten = '[Foto] ' + (msg.message.imageMessage.caption || '');
            else if (msg.message.videoMessage?.caption) konten = '[Video] ' + (msg.message.videoMessage.caption || '');
            else if (msg.message.stickerMessage) konten = '[Sticker]';
            else if (msg.message.audioMessage) konten = '[Audio]';
            else if (msg.message.documentMessage) konten = '[Dokumen]';
            else if (msg.message.contactMessage) konten = '[Kontak]';
            else if (msg.message.locationMessage) konten = '[Lokasi]';
            else continue; // skip semua unknown seperti reaction, protocol, dsb

            hasil += `• [${waktu}] ${konten}\n`;
        }

        if (!hasil.includes('•')) return reply("❌ Tidak ada pesan teks yang bisa ditampilkan.");

        if (!fs.existsSync('./database')) fs.mkdirSync('./database');
        const filePath = './database/getchat.txt';
        fs.writeFileSync(filePath, hasil);

        await client.sendMessage(m.chat, {
            document: fs.readFileSync(filePath),
            fileName: `Chat-${text}.txt`,
            mimetype: 'text/plain',
            caption: '📩 Ini hasil chatnya Tuanku.',
        }, { quoted: m });

        fs.unlinkSync(filePath);
        console.log(`[SUCCESS] Berhasil ambil chat dengan ${target}`);
    } catch (e) {
        console.error(`[ERROR] Gagal .getchat ${text}:`, e);
        reply("❌ Error mengambil chat. Lihat console untuk detail.");
    }
}
break;;;;

case 'pchat': {
 if (!isCreator) return reply('❌ Khusus Owner!');

 let [nomor, ...pesan] = text.split(' ');
 if (!nomor || pesan.length == 0) return reply(`Format salah!\nContoh: .pchat 6281234567890 Halo apa kabar`);

 nomor = nomor.replace(/\D/g, '') + '@s.whatsapp.net';
 let isiPesan = pesan.join(' ');

 try {
 await client.sendMessage(nomor, { text: isiPesan });
 reply(`✅ Berhasil kirim private chat ke ${nomor.replace('@s.whatsapp.net', '')}`);
 console.log(`[SUCCESS] Private chat ke ${nomor}: ${isiPesan}`);
 } catch (e) {
 console.error(`[ERROR] .pchat:`, e);
 reply('❌ Gagal kirim private chat.');
 }
}
break;;

// 3. Kirim STIKER privat;

// 4. Kirim FILE DOKUMEN privat;

case 'ai': {
 if (!text) return reply('Tulis pertanyaan buat AI!\nContoh: .ai Apa itu bintang?');

 try {
 const axios = require('axios');

 
 const apiurl = 'https://api.meta.ai/v1/chat'; // <- endpoint API AI lu

 const res = await axios.post(apiurl, {
 pertanyaan: text
 }, {
 headers: {
 'Content-Type': 'application/json'
 }
 });

 const jawaban = res.data.jawaban || 'Maaf, saya tidak mengerti.';

 await client.sendMessage(m.chat, { text: jawaban }, { quoted: m });
 } catch (e) {
 console.error(`[ERROR] .ai:`, e);
 reply('❌ Error mengambil jawaban AI.');
 }
}
break;
case 'addcase': { 

 if (!isCreator) return reply('ngapain wkwk?')

 if (!text) return reply('Mana case nya');
    const fs = require('fs');
const namaFile = './start/system.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
case 'toimg': { 
    if (!m.quoted) return reply('❌ Reply ke sticker yang mau diubah jadi gambar.');
    if (!/sticker/.test(m.quoted.mtype)) return reply('❌ Itu bukan sticker.');

    const media = await m.quoted.download();
    if (!media) return reply('❌ Gagal download sticker.');

    await client.sendMessage(m.chat, {
        image: media,
        caption: `✅ Berhasil mengubah sticker jadi gambar!`
    }, { quoted: m });
}
break;
case 'upch': { 
    if (!isCreator) return reply(mess.owner)

    const channel = "120363349621603815@newsletter" 
    let defaultCaption = "✨ This media is sent via an automated system ✨"

    try {
        let ppuser
        try {
            ppuser = await client.profilePictureUrl(m.sender, 'image')
        } catch {
            ppuser = 'https://unitedcamps.in/Images/IMG_1744220705.jpg'
        }
        let fotoProfil = await getBuffer(ppuser)
        let pelers = `Message from ${m.pushName}`

        const isQuoted = m.quoted
        const mime = isQuoted ? (m.quoted.msg || m.quoted).mimetype || '' : ''
        const media = mime ? await m.quoted.download() : null
        const teks = text || m.quoted?.text || defaultCaption

        if (!mime && !text) return reply(`⚠️ Kirim teks atau reply media terlebih dahulu.`)

        const contextInfo = {
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: pelers,
                    mediaType: 1,
                    previewType: 1,
                    body: 'Massage to channel',
                    thumbnail: fotoProfil,
                    renderLargerThumbnail: false,
                    mediaUrl: '',
                    sourceUrl: ''
                }
            }
        }

        if (/image/.test(mime)) {
            await client.sendMessage(channel, {
                image: media,
                caption: teks,
                ...contextInfo
            })
            reply(`📸 Gambar berhasil dikirim ke channel.`)
        } else if (/video/.test(mime)) {
            await client.sendMessage(channel, {
                video: media,
                caption: teks,
                ...contextInfo
            })
            reply(`🎥 Video berhasil dikirim ke channel.`)
        } else if (/audio/.test(mime)) {
            await client.sendMessage(channel, {
                audio: media,
                mimetype: mime,
                ptt: true,
                ...contextInfo
            })
            reply(`🎵 Audio berhasil dikirim ke channel.`)
        } else {
            await client.sendMessage(channel, {
                text: teks,
                ...contextInfo
            })
            reply(`💬 Teks berhasil dikirim ke channel.`)
        }
    } catch (err) {
        console.error("Error upch:", err)
        reply("❌ Gagal mengirim ke channel. Coba lagi nanti.")
    }
}
break
  case 'robloxstalk': { 
    const userId = "user_id_yang_diberikan"; 

    async function ui(userId) {
        const url = `https://users.roblox.com/v1/users/${userId}`;
        try {
            const response = await cloudscraper.get(url);
            return JSON.parse(response);
        } catch {
            return null;
        }
    }

    async function us(userId) {
        const url = `https://users.roblox.com/v1/users/${userId}/social`;
        try {
            const response = await cloudscraper.get(url);
            return JSON.parse(response);
        } catch {
            return null;
        }
    }

    async function uin(userId) {
        const url = `https://inventory.roblox.com/v1/users/${userId}/inventory`;
        try {
            const response = await cloudscraper.get(url);
            return JSON.parse(response);
        } catch {
            return null;
        }
    }

    async function up(userId) {
        const url = "https://presence.roblox.com/v1/presence/users";
        const payload = {
            userIds: [userId]
        };
        try {
            const response = await cloudscraper.post(url, {
                json: payload
            });
            return JSON.parse(response);
        } catch {
            return null;
        }
    }

    async function ugp(userId) {
        const url = `https://groups.roblox.com/v1/users/${userId}/groups/roles`;
        try {
            const response = await cloudscraper.get(url);
            return JSON.parse(response);
        } catch {
            return null;
        }
    }

    async function robloxStalk(userId) {
        const userInfo = await ui(userId);
        const userSocials = await us(userId);
        const userInventory = await uin(userId);
        const userPresence = await up(userId);
        const userGroups = await ugp(userId);

        return {
            userInfo,
            userSocials,
            userInventory,
            userPresence,
            userGroups,
        };
    }
    const result = await robloxStalk(userId);
    if (result) {
        m.reply(`User  Info: ${JSON.stringify(result.userInfo)}\nSocials: ${JSON.stringify(result.userSocials)}\nInventory: ${JSON.stringify(result.userInventory)}\nPresence: ${JSON.stringify(result.userPresence)}\nGroups: ${JSON.stringify(result.userGroups)}`);
    } else {
        m.reply("Gagal mendapatkan data pengguna.");
    }
}
break;

  case "cekgempa":
case "infogempa": {
    m.reply(mess.wait); 
    try {
        const anu = `https://api.agatz.xyz/api/gempa`;
        const res = await fetch(anu);
        const response = await res.json();
        if (!response || !response.data) {
            throw new Error("Tidak dapat mengambil data gempa.");
        }

        let iclik = `
Wilayah: ${response.data.wilayah || "Tidak diketahui"}
Tanggal: ${response.data.tanggal || "Tidak diketahui"}
Kedalaman: ${response.data.kedalaman || "Tidak diketahui"}
Waktu: ${response.data.waktu || "Tidak diketahui"}
Potensi: ${response.data.potensi || "Tidak diketahui"}
Dirasakan: ${response.data.dirasakan || "Tidak diketahui"}
Magnitudo: ${response.data.magnitune || "Tidak diketahui"}`;

        await client.sendMessage(m.chat, { text: iclik }, { quoted: m });
    } catch (e) {
        console.error(e); 
        m.reply("Ups, terjadi kesalahan saat mengambil informasi gempa. Coba lagi nanti!");
    }
}
break;
case "menu": {
    let teks = `Halo kak, untuk memulai bot ketik .start ya hehe`;

    setTimeout(() => { m.reply(teks); }, 2000);
};
break;
case 'aksarasunda': { 
   if (!text) return m.reply("Example: .aksarasunda Rian")

const latinToSundanese = {
  'a': 'ᮅ',
  'b': 'ᮘ',
  'c': 'ᮎ',
  'd': 'ᮓ',
  'e': 'ᮌ',
  'f': 'ᮕ',
  'g': 'ᮎ',
  'h': 'ᮠ',
  'i': 'ᮄ',
  'j': 'ᮏ',
  'k': 'ᮊ',
  'l': 'ᮜ',
  'm': 'ᮙ',
  'n': 'ᮔ',
  'o': 'ᮇ',
  'p': 'ᮕ',
  'q': 'ᮃ',
  'r': 'ᮛ',
  's': 'ᮞ',
  't': 'ᮒ',
  'u': 'ᮅ',
  'v': 'ᮗ',
  'w': 'ᮝ',
  'x': 'ᮞ',
  'y': 'ᮌ',
  'z': 'ᮚ',
  ' ': ' '
};

async function convertToSundanese(text) {
  return [...text.toLowerCase()]
    .map(char => latinToSundanese[char] || char) 
    .join('');
}

const kntlsundaa = await convertToSundanese(text)
await client.sendMessage(m.chat, {text: `${kntlsundaa}` }, {quoted: m})
}
break
case 'findsong': { 
    const fetch = require('node-fetch');
    if (!args[0]) return reply('Masukkan beberapa kata dari lirik lagu.');

    const query = args.join(' '); 
    const apiKey = 'P3QcawG2xePU7sIxOD-4KeVMU-2mti77t6RHbo93q84Xon8hvKniFYDpphcA1kjckDXBnhdnh5spgGzpB_EQgw'; 
    const url = `https://api.genius.com/search?q=${encodeURIComponent(query)}&access_token=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.response.hits.length) return reply('Lagu tidak ditemukan berdasarkan lirik tersebut.');

        const song = data.response.hits[0].result; 
        const caption = `
🎵 *Lagu Ditemukan!*
▢ *Judul*: ${song.title}
▢ *Artis*: ${song.primary_artist.name}
▢ *URL*: ${song.url}
        `.trim();
        if (song.song_art_image_url) {
            await kyy.sendMessage(m.chat, { image: { url: song.song_art_image_url }, caption }, { quoted: m });
        } else {
            reply(caption);
        }
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan saat mencari lagu. Coba lagi nanti.');
    }
}
break;


case 'setpp': { 
  if (!isCreator) return reply("Ngapain broo?.");
  if (!quoted || !/image/.test(mime)) return reply("Balas gambar untuk dijadikan profil.");

  let media = await quoted.download();
  await client.updateProfilePicture(botNumber, media)
    .then(() => reply("Foto profil bot berhasil diganti."))
    .catch(() => reply("Gagal mengganti profil."));
}
break;

case 'add':
case 'addmember': { 
  if (!isGroup) return reply("Hanya bisa digunakan dalam grup.");
  if (!isBotGroupAdmins) return reply("Bot harus admin untuk menambahkan orang.");
  if (!isGroupAdmins) return reply("Hanya admin grup yang bisa memakai ini.");

  let user = text.replace(/\D/g, '');
  if (!user) return reply("Format salah. Contoh: .add 628xxxx");

  await client.groupParticipantsUpdate(m.chat, [`${user}@s.whatsapp.net`], 'add')
    .then(() => reply("Done."))
    .catch(() => reply("Gagal menambahkan. Mungkin pengaturan privasi target menolak."));
}
break;

case 'kickmem':
case 'kickmember': { 
  if (!isGroup) return reply("Khusus di grup.");
  if (!isBotGroupAdmins) return reply("Bot bukan admin.");
  if (!isGroupAdmins) return reply("Kamu bukan admin grup.");

  let target = m.mentionedJid?.[0] || m.quoted?.sender;
  if (!target) return reply("Tag atau reply user yang ingin dikick.");

  if (target === botNumber) return reply("Aku tidak bisa mengusir diriku sendiri.");
  await client.groupParticipantsUpdate(m.chat, [target], 'remove')
    .then(() => reply(`Sukses mengusir @${target.split('@')[0]}`, { mentions: [target] }))
    .catch(() => reply("Gagal kick user."));
}
break;

case 'promote': { 
  if (!isGroup) return reply("Gunakan di grup.");
  if (!isBotGroupAdmins) return reply("Bot bukan admin.");
  if (!isGroupAdmins) return reply("Hanya admin yang bisa promote.");

  let target = m.mentionedJid?.[0] || m.quoted?.sender;
  if (!target) return reply("Tag atau reply user yang ingin dipromote.");

  await client.groupParticipantsUpdate(m.chat, [target], 'promote')
    .then(() => reply(`@${target.split('@')[0]} kini seorang admin.`, { mentions: [target] }))
    .catch(() => reply("Gagal promote."));
}
break;

case 'demote': { 
  if (!isGroup) return reply("Gunakan di grup.");
  if (!isBotGroupAdmins) return reply("Bot bukan admin.");
  if (!isGroupAdmins) return reply("Hanya admin yang bisa demote.");

  let target = m.mentionedJid?.[0] || m.quoted?.sender;
  if (!target) return reply("Tag atau reply user yang ingin didemote.");

  await client.groupParticipantsUpdate(m.chat, [target], 'demote')
    .then(() => reply(`@${target.split('@')[0]} diturunkan dari admin.`, { mentions: [target] }))
    .catch(() => reply("Gagal demote."));
}
break;

case 'waifus': {
  if (!global.nsfwMode[m.chat]) return reply('❌ NSFW belum diaktifkan oleh owner.');
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Astaga... waifu lo ya ini?`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'blowjob': {
  if (!global.nsfwMode[m.chat]) return reply('❌ NSFW belum diaktifkan oleh owner.');
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/nsfw/blowjob`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Buset... vakumnya turbo ya?`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'nekos': {
  if (!global.nsfwMode[m.chat]) return reply('❌ NSFW belum diaktifkan oleh owner.');
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Meong~ anime edition.`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'trap': {
  if (!global.nsfwMode[m.chat]) return reply('❌ NSFW belum diaktifkan oleh owner.');
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/nsfw/trap`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Kok keliatannya cowok...?`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'cry': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Nangis? Gak papa, peluk sini...`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'waifu': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/waifu`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Waifu halal detected.`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'neko': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Kucing anime detected, nyan~`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'shinobu': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Wibu akut, penggemar Shinobu.`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'megumin': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `LET'S EXPLOSIONNN!!`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'bully': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Hajarrr bully-nya!`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'cuddle': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/cuddle`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Dipeluk sama karakter 2D, enak gak?`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'hug': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/hug`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Pelukan virtual dari waifu!`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'awoo': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `*Awooo~* serigala moe!`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'kiss': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/kiss`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Kiss kiss fall in love~`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'lick': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Eh... dijilat dong`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'pat': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/pat`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Kepala lu dipet pet`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'smug': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Liat nih muka ngeselin`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'bonk': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `BONK! Pergi kau, horny jail!`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'yeet': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `YEET! Dilempar ke isekai!`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'blush': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Malu-malu wibu...`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'smile': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Senyum manis kaya waifu~`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'wave': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Dadah... jangan lupa balik lagi`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'highfive': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Toss dulu dong!`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'handhold': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Nge-hold tangan karakter 2D...`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'nom': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `NOM NOM NOM, enak sih`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'bite': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Gigit manja dulu ya...`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'glomp': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Diseruduk penuh cinta!`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'slap': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/slap`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `SLEP! Kena tampar waifu!`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'kill': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Dibunuh waifu, rela gak?`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'kicku': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/kick`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Tendangan waifu sakti!`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'happy': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Bahagia ngeliat dia senyum~`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'wink': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Wink wink... wibunya pingsan`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'poke': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Dicolek... kyaa!`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'dance': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Waifu nari buat lu nih`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'cringe': {
  
  await loading();
  let waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`);
  client.sendMessage(from, {
    image: { url: waifudd.data.url },
    caption: `Cringe? Justru itu seninya`
  }, { quoted: m }).catch(err => {
    return reply('Error!');
  });
  break;
}

case 'sspotify': { 
    if (!text) return m.reply(`Masukkan judul lagu yang ingin Anda cari, Contoh: ${prefix + command} gala bunga mataharia`);
    
    m.reply('tunggu sebentar..'); 
    
    try {
        let response = await axios.get(`https://fgsi-spotify.hf.space/query=${encodeURIComponent(text)}`);
        let data = response.data;

        if (!data.status) return m.reply(`Error: ${data.msg}`);

        let { title, artist, duration, popularity, preview, thumbnail: thumbnailUrl, url } = data.result;
        let audioUrl = data.audio.url;

        const thumbnails = await axios.get(thumbnailUrl, { responseType: 'arraybuffer' });
        const thumbnail = Buffer.from(thumbnails.data, 'binary');

        await client.sendMessage(m.chat, {
            image: thumbnail,
            caption: `🎵 *${title}*\n👤 *Artist:* ${artist}\n⏳ *Duration:* ${duration}\n✨ *Rate Song:* ${popularity}\n📌 *Preview:* ${preview || "No preview available"}\n🔗 *Spotify Link:* ${url}`,
        }, { quoted: m });

        await client.sendMessage(m.chat, {
            audio: { url: audioUrl },
            mimetype: 'audio/mp4',
            fileName: `${title}.mp3`,
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        m.reply("Terjadi kesalahan saat mengambil lagu dari spotify.");
    }
}
break
case "videy":
case "videyvid": {
  if(!text) return m.reply('Woi Jangan Begitu lah tobat²,btw kalau mau make mana link nya?');
  let anu = `https://vapis.my.id/api/videy?url=${encodeURIComponent(text)}`;
  const res = await fetch(anu);
  const response = await res.json();
  try {
    client.sendMessage(m.chat, {
      video: { url: response.data },
      mimeType: 'video/mp4',
      caption: 'Succes Icikbos.'
    }, { quoted: null }) 
  } catch (e) {
    console.log(e);
    m.reply('Gatot\nGagal Ngentot :v')
  }
}
break
case 'snackvideo':{
 const cheerio = require('cheerio');
if (!text) return m.reply(`Linknya mana??`)
async function downloadSnackVideo(url) {
 return new Promise(async (resolve, reject) => {
 try {
 const response = await axios.get(url);
 const $ = cheerio.load(response.data);
 let result = {
 metadata: {},
 download: null
 };
 const json = JSON.parse($("#VideoObject").text().trim());
 result.metadata.title = json.name;
 result.metadata.thumbnail = json.thumbnailUrl[0];
 result.metadata.uploaded = new Date(json.uploadDate).toLocaleString();
 result.metadata.comment = json.commentCount;
 result.metadata.watch = json.interactionStatistic[0].userInteractionCount;
 result.metadata.likes = json.interactionStatistic[1].userInteractionCount;
 result.metadata.share = json.interactionStatistic[2].userInteractionCount;
 result.metadata.author = json.creator.mainEntity.name;
 result.download = json.contentUrl;
 resolve(result);
 } catch (error) {
 reject({ msg: error.message });
 }
 });
}
try {
const result = await downloadSnackVideo(text);
let message = `🎥 Nihh hasil download darii SnackVideo kamuu !! 🎉

✨ Judul Video : ${result.metadata.title} ✨
👀 Jumlah Tonton : ${result.metadata.watch} 👀
👤 Darii : ${result.metadata.author} 👤`

client.sendMessage(m.chat,{
video : { url : result.download },
caption : message
 })
} catch (err) {
console.error(err);
m.reply("Error :(")}
}
break 
            case "play":{
                if (!text) return reply(`\n*ex:* ${prefix + command} impossible\n`)
                await reaction(m.chat, '⚡')
                let mbut = await fetchJson(`https://ochinpo-helper.hf.space/yt?query=${text}`)
                let ahh = mbut.result
                let crot = ahh.download.audio

                client.sendMessage(m.chat, {
                    audio: { url: crot },
                    mimetype: "audio/mpeg", 
                    ptt: true
                }, { quoted:m })
            }
            break
                
            case "public":{
                if (!Access) return reply(mess.owner) 
                client.public = true
                reply(`successfully changed to ${command}`)
            }
            break
            case 'done': { 

    let t = text.split(',');

    if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal,sistem`);
    
    let barang = t[0];
    let nominal = t[1];
    let sistem = t[2];
    
    reply(`╔════════════════════╗
     *TRANSAKSI BERHASIL*  
          BY *${global.nama}*
╚════════════════════╝

📦 *Barang:* ${barang}  
💵 *Nominal:* Rp${nominal}  
🔧 *Sistem:* ${sistem}  
🏢 *Nama Store:* ${global.owner}

━━━━━━━━━━━━

🙏 *TERIMA KASIH TELAH ORDER DI ${global.nama}*  
🔁 *JANGAN LUPA ORDER LAGI YA!*  


*🪷TESTIMONI SALURAN :* ${global.ch}

━━━━━━━━━━━━`);
}
break;
case "cekidgc": {

    

    if (!isCreator) return reply("Fitur ini hanya bisa digunakan oleh Creator bot!");

    try {
        let getGroups = await client.groupFetchAllParticipating();
        let groups = Object.entries(getGroups).map((entry) => entry[1]);
        let anu = groups.map((v) => v.id);

        let teks = `⬣ *LIST GROUP BY MUNCHY*\n\nTotal Group: ${anu.length} Group\n\n`;

        for (let x of anu) {
            try {
                let metadata2 = await client.groupMetadata(x);
                teks += `◉ Nama: ${metadata2.subject}\n◉ ID: ${metadata2.id}\n◉ Member: ${metadata2.participants.length}\n\n────────────────────────\n\n`;
            } catch (e) {
                teks += `◉ [Gagal mengambil data group ID: ${x}]\n\n`;
            }
        }

        reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`);
    } catch (error) {
        console.error(error);
        reply("Terjadi kesalahan saat mengambil data group. Silahkan coba lagi nanti.");
    }
}
break;

            case 'pushkontak': { 

    if (!isGroup) return reply('Fitur ini hanya dapat digunakan di grup.');

    if (!isCreator) return reply('Hanya owner yang dapat menggunakan fitur ini.');

    const groupMetadata = await client.groupMetadata(from);
    const participants = groupMetadata.participants;

    if (!text) return reply('Silakan masukkan pesan yang ingin dikirim.');

    const pesan = text.trim(); 
    let success = 0;
    let failed = 0;

    for (let member of participants) {
        const memberId = member.id; 
        try {
            
            await client.sendMessage(memberId, { text: pesan });
            console.log(`Pesan berhasil dikirim ke: ${memberId}`);
            success++;
        } catch (error) {
            console.error(`Gagal mengirim pesan ke: ${memberId}`, error);
            failed++;
        }
        await sleep(1000); 
    }

    reply(`Push pesan selesai.\nBerhasil: ${success}\nGagal: ${failed}`);
    break;
}
case 'pushkontakid': { 

    if (!isCreator) return reply('Fitur ini hanya dapat digunakan oleh owner.');


    const args = text.split('|');
    if (args.length < 2) return reply(`Gunakan format:\n${prefix}pushkontakid <id_grup>|<pesan>\n\nContoh:\n${prefix}pushkontakid 1234567890-123456789@g.us|Woi Jawir`);

    const groupId = args[0].trim(); 
    const pesan = args[1].trim(); 
    try {
        const groupMetadata = await client.groupMetadata(groupId);
        const participants = groupMetadata.participants;

        let success = 0;
        let failed = 0;

        for (let member of participants) {
            const memberId = member.id; 
            try {
                await client.sendMessage(memberId, { text: pesan });
                console.log(`Pesan berhasil dikirim ke: ${memberId}`);
                success++;
            } catch (error) {
                console.error(`Gagal mengirim pesan ke: ${memberId}`, error);
                failed++;
            }
            await sleep(1000); 
        }

        reply(`Push pesan selesai.\nBerhasil: ${success}\nGagal: ${failed}`);
    } catch (error) {
        console.error(error);
        reply('Gagal mendapatkan metadata grup. Pastikan ID grup benar dan bot ada di dalam grup tersebut.');
    }
    break;
}
            case "self":{
                if (!Access) return reply(mess.owner) 
                client.public = false
                reply(`successfully changed to ${command}`)
            }
            break
                
  case 'tagall': { 
    if (!m.isGroup) return reply(mess.group);
    if (!isAdmins && !Access) return reply(mess.admin);
    
    const textMessage = args.join(" ") || "No Message";
    let teks = `*──「 TAG ALL 」──*\n\n*Message:* ${textMessage}\n\n`;

    const groupMetadata = await client.groupMetadata(m.chat);
    const participants = groupMetadata.participants || [];

    for (let mem of participants) {
        teks += `- @${mem.id.split('@')[0]}\n`;
    }

    await client.sendMessage(m.chat, {
        text: teks,
        mentions: participants.map((p) => p.id)
    });
}
break;         
            
            case "h":
case "hidetag": {
    if (!m.isGroup) return reply(mess.group);
    if (!isAdmins && !Access) return reply(mess.admin);

    const teks = q || (m.quoted && (m.quoted.text || m.quoted.caption)) || false;
    if (!teks) return reply("⚠️ Tidak ada pesan untuk ditag.\n\nKirim `.hidetag pesan` atau reply pesan.");

    try {
        await client.sendMessage(m.chat, {
            text: teks,
            mentions: participants.map(p => p.id)
        });
    } catch (err) {
        console.error("Hidetag Error:", err);
        reply("❌ Gagal mengirim pesan dengan tag. Coba lagi nanti.");
    }
}
break;

case 'join': { 
    if (!isCreator) return reply('Only Owner can make me join.');
    if (!text) return reply('Where is the group link?');
    
    if (!text.includes('whatsapp.com')) return reply('Invalid link.');
    
    const result = text.split('https://chat.whatsapp.com/')[1];
    await client.groupAcceptInvite(result)
        .then(() => reply('✅ Successfully joined the group!'))
        .catch(() => reply('❌ Failed to join. Link invalid or expired.'));
}
break;

case 'leave': { 
    if (!isCreator) return reply('Only Owner can make me leave.');
    if (!m.isGroup) return reply('Use this command inside a group.');

    await client.groupLeave(m.chat)
        .then(() => console.log('Left group.'))
        .catch(() => console.error('Error leaving group.'));
}
break;
case 'ewallet': { 
  await reaction(m.chat, '✅')
  await client.sendMessage(m.chat, {
    document: { url: 'https://unitedcamps.in/Images/IMG_1744220705.jpg' },
    mimetype: "application/msword",
    fileName: "Munchy - 1.0",
    fileLength: "999999999999",
    jpegThumbnail: fs.readFileSync("./start/lib/media/th.jpg"),
    caption: `Ewallet`,
    footer: '> Munchy © 2025 ',
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363349621603815@newsletter',
        newsletterName: ` Munchy࿐ `,
        serverMessageId: 2
      },
      externalAdReply: {
        title: "Munchy - 1.0",
        body: 'Beta',
        thumbnailUrl: "https://unitedcamps.in/Images/IMG_1744220691.jpg",
        sourceUrl: `https://youtube.com/@baazteardvont?si=9b-yuiV-CK_H9K3t`,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    },
    buttons: [
      {
        buttonId: 'flow_button',
        buttonText: { displayText: 'Munchy - 1.0' },
        type: 3,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: "Follow: @munchyxsa",
            sections: [
              {
                title: "D A N A",
                highlight_label: "EWALLET",
                rows: [
                  {
                    title: "081931488608",
                    id: "."
                  }
                ]
              },
              {
                title: "G O P A Y",
                highlight_label: "EWALLET",
                rows: [
                  {
                    title: "081931488608",
                    id: "."
                  }
                ]
              },
              {
                title: "S H O P E E P A Y",
                highlight_label: "EWALLET",
                rows: [
                  {
                    title: "081931488608",
                    id: "."
                  }
                ]
              },
              {
                title: "O V O",
                highlight_label: "EWALLET",
                rows: [
                  {
                    title: "081931488608",
                    id: "."
                  }
                ]
              },
              {
                title: "P U L S A",
                highlight_label: "PULSA",
                rows: [
                  {
                    title: "🧾 Pulsa",
                    id: ".pulsa"
                  }
                ]
              },
            ]
          })
        }
      }
    ],
    headerType: 6,
    viewOnce: true
  }, { quoted: m });
}
break;
case 'rent': { 
    if (!isCreator) return reply('Only Owner can rent the bot.');
    if (args.length < 2) return reply('Format: .rent 2d https://chat.whatsapp.com/xxxx');

    const duration = args[0];
    const link = args[1];
    if (!link.includes('whatsapp.com')) return reply('Invalid group link.');

    let timeMs;
    if (duration.endsWith('d')) {
        timeMs = parseInt(duration) * 86400000;
    } else if (duration.endsWith('h')) {
        timeMs = parseInt(duration) * 3600000;
    } else {
        return reply('Use "d" for days or "h" for hours.');
    }

    const code = link.split('https://chat.whatsapp.com/')[1];
    await client.groupAcceptInvite(code);

    reply(`✅ Bot successfully rented!\nDuration: ${duration}\nLink: ${link}`);

    setTimeout(async () => {
        const groupMetadata = await client.groupMetadata(code);
        await client.groupLeave(groupMetadata.id);
        console.log(`Auto-leave group ${groupMetadata.subject} after rent expired.`);
    }, timeMs);
}
break;

case 'getvo': { 
    if (!m.quoted) return reply('❌ Reply ke foto/video yang mau diambil.');

    const type = m.quoted.mtype || '';
    if (type !== 'imageMessage' && type !== 'videoMessage') {
        return reply('❌ Yang kamu reply bukan foto/video.');
    }

    const buffer = await m.quoted.download();
    if (!buffer) return reply('❌ Gagal download media.');

    
    await client.sendMessage(m.sender, {
        [type.replace('Message', '')]: buffer,
        caption: `✅ Ini file kamu.`,
    }, { quoted: m });
}
break;
case 'confess': { 
    if (m.isGroup) return reply('Gunakan perintah ini di private chat.');

    if (!text.includes('|')) return reply('Format: .confess 62xxxx|[anon/nama kamu]|pesan kamu');

    const [number, nameOrAnon, ...messageParts] = text.split('|');
    const confession = messageParts.join('|').trim();
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const now = Date.now();

    if (!number || !nameOrAnon || !confession) return reply('Format salah. Contoh: .confess 62xxxx|anon|pesan kamu');

    if (rateLimit[m.sender] && now - rateLimit[m.sender] < 60000) { 
        return reply('⏳ Tunggu 1 menit sebelum confess lagi.');
    }
    rateLimit[m.sender] = now; 

    const target = number.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    const isRegistered = await client.onWhatsApp(number);
    if (!isRegistered || isRegistered.length === 0) return reply('❌ Nomor tidak terdaftar di WhatsApp.');

    const id = generateID();

    
    await client.sendPresenceUpdate('composing', target);
    await sleep(2000); 

    await client.sendMessage(target, { 
        text: `${emoji} *Pesan confess anonim baru (ID: #${id}):*\n\n"${confession}"\n\n_Balas dengan .reply ${id} balasan kamu_`
    });

    confessSessions[target] = {
        from: m.sender,
        id: id,
        expire: now + 300000 
    };

    confessHistory.push({
        from: m.sender,
        to: target,
        message: confession,
        time: new Date().toLocaleString()
    });

    reply('✅ Pesanmu sudah dikirim secara anonim.');

}
break;

case 'replyconfess': { 

    if (m.isGroup) return reply('Gunakan perintah ini di private chat.');
    const [id, ...messageParts] = text.trim().split(' ');
    const replyMessage = messageParts.join(' ').trim();

    if (!id || !replyMessage) return reply('Format salah. Contoh: .replyconfess 1234 pesan kamu');

    const session = confessSessions[m.sender];

    if (!session) return reply('❌ Tidak ada confess yang bisa kamu balas.');
    if (parseInt(id) !== session.id) return reply('❌ ID confess tidak cocok.');
    if (Date.now() > session.expire) {
        delete confessSessions[m.sender];
        return reply('❌ Confess ini sudah expired.');
    }

    await client.sendMessage(session.from, {
        text: `📩 *Balasan dari orang yang kamu confess (ID: #${id}):*\n\n"${replyMessage}"`
    });

    delete confessSessions[m.sender];

    reply('✅ Balasanmu sudah dikirim.');
}
break;
              
            case "jadibot": {
                await reaction(m.chat, '✅')
                try {
                    await jadibot(client, m, m.sender)
                } catch (error) {
                    await reply(util.format(error), command)
                }
            }
            break
                
            case "stopjadibot": {
                await reaction(m.chat, '✅')
                if (m.key.fromMe) return
                try {
                    await stopjadibot(client, m, m.sender)
                } catch (error) {
                    await reply(util.format(error), command)
                }
            }
            break
			
            case "listjadibot": {
                if (m.key.fromMe) return
                try {
                    listjadibot(client, m)
                } catch (error) {
                    await reply(util.format(error), command)
                }
            }
            break           
                
            default:
                if (budy.startsWith('$')) {
                    if (!Access) return;
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout);
                    });
                }
                
                if (budy.startsWith('>')) {
                    if (!Access) return;
                    try {
                        let evaled = await eval(budy.slice(2));
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                        await m.reply(evaled);
                    } catch (err) {
                        m.reply(String(err));
                    }
                }
        
                if (budy.startsWith('<')) {
                    if (!Access) return
                    let kode = budy.trim().split(/ +/)[0]
                    let teks
                    try {
                        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
                    } catch (e) {
                        teks = e
                    } finally {
                        await m.reply(require('util').format(teks))
                    }
                }
        
        }
    } catch (err) {
        console.log(require("util").format(err));
    }
};
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})