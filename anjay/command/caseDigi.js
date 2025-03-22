const { diDetail, saldoDigi, allPriceList, getCategory, simplelist, processTopupRequest} = require('../controller/digiController')
require('../setting/config')
const fs = require('fs')
const chalk = require('chalk')
function caseDigi(dica, from, command, reply, text, level, blnc, balanceDB, m, pushname, riwayatPath, topupPath, validasiStalk){
require('../command/listPrepaid').listPrepaid(command, level, reply , m);
    switch(command){
        case 'detail': case 'code':{
            if (!text) {
              return reply('CODE ID nya mana?');
            }
          
            diDetail(text, reply, level, blnc, balanceDB, m, pushname)
          }            
          break;

          case "ceksaldo": {
            if (!level.itsMeDica) return reply(mess.owner)
           saldoDigi(reply)
          }
          break;

          case 'order': {
              if (!text) return reply('Mau order apa?');
              const lower = text.toLowerCase(); 
              allPriceList(lower, reply)
          }
          break;
           
case "simpellist":
    case 'simplelist':
    case 'listall': {
        simplelist(reply)
    }
    break;
          case 'topup': {
              getCategory(reply)
          }
          break;
          case 'depodigi': {
            if (!level.itsMeDica) return reply(mess.owner);
              if (!fs.existsSync(riwayatPath + m.sender.split("@")[0] + "digi.json")) {
                var objek_gesek = {
                  session: "amount",
                  jumlah: "",
                  nama: "",
                  tujuan: ""
                }
                fs.writeFileSync(riwayatPath + m.sender.split("@")[0] + "digi.json", JSON.stringify(objek_gesek, null, 2));
              } 
              reply('Okey kak, langsung masukan jumlahnya mao berapa?')
        }
        break;

        case 'stun':{
          const y = text.split(' ');
          if (y.length < 2) return reply('Format yang benar adalah: stun code target\n\ncontoh\nstun ml5 123456 4545');
          const layanan = y[0];
          processTopupRequest(layanan, y[1], y[2], m, from, reply, dica, topupPath, validasiStalk, pushname, level, blnc, balanceDB )
              }
              break

    }
}

module.exports = {caseDigi}
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});