
require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "254798570132"
global.namaowner = "supreme"
global.namaowner2 = "TKM-mods"

//======== Setting Bot & Link ========//
global.namabot = "JUNE MD" 
global.namabot2 = "JUNE MD"
global.version = "v1"
global.foother = "Created By Mr SUPREM"
global.linkgc = 'https://youtube.com/@TKM-mods'
global.linksaluran = "https://youtube.com/@TKM-mods"
global.linkyt = 'https://youtube.com/@TKM-mods'
global.linktele = "https://t.me/tkm_mods"
global.packname = "Created By TKM-mods"
global.author = "TKM"

//========== Setting Event ==========//
global.welcome = true
global.autoread = true
global.anticall = true
global.autoreadsw = true
global.owneroff = false
global.antibug = true

global.dev = { tag: "SUPREME" }
//========= Setting Message =========//
global.msg = {
    "error": "An error has occurred",
    "done": "Done, Boss ✅", 
    "wait": "The bot is processing, please wait a moment . . .", 
    "group": "*• Group Only* This feature is only for groups!", 
    "private": "*• Private Chat* This feature is only for private chats!", 
    "admin": "*• Admin Only* This feature is only for group admins!", 
    "adminbot": "*• Bot Admin* This feature can be used when the bot is an admin", 
    "owner": "*• Owner Only* This feature is only for the bot owner!", 
    "developer": "*• Developer Only* This feature is only for developers"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
