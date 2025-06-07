const fs = require('fs')

global.owner = "254798570132"
global.nama = "supreme"
global.namaBot = "JUNE-MD"
global.ch = 'https://whatsapp.com/channel/0029Vawpn61BvvsfC2Dfxk20'
global.status = true


global.mess = {
    owner: "no, this is for owners only",
    group: "this is for groups only",
    private: "this is specifically for private chat"
}

global.packname = 'JuneX'
global.author = 'supreme'

global.pairing = "MUNCHYXS"

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
