
require('./config')
const {downloadContentFromMessage, getContentType } = require("@whiskeysockets/baileys");
const { checkVIPUser} = require('../controller/roleCekController')
const { upDeposit, letsgo} = require("../lib/dataDigi");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
// new module
const axios = require('axios');
const os = require('os');
const { exec } = require("child_process");
const speed = require('performance-now');
const { sizeFormatter } = require('human-readable');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
const moment = require('moment-timezone');
const crypto = require("crypto");
const archiver = require('archiver');
const qrcode = require('qrcode')
const cron = require('node-cron');
//code
let signup = JSON.parse(fs.readFileSync('./src/user.json'))
let ban = JSON.parse(fs.readFileSync('./src/banned.json'))
let isBanned = JSON.parse(fs.readFileSync('./src/banned.json'))
let balanceDB = JSON.parse(fs.readFileSync('./src/balance.json' , 'utf8'));
let db_respon_list = JSON.parse(fs.readFileSync('./src/db_list.json'))
let sewa = JSON.parse(fs.readFileSync('./src/sewa.json'));
let uvvip = JSON.parse(fs.readFileSync('./src/role/vvip.json'));
let uvip = JSON.parse(fs.readFileSync('./src/role/vip.json', 'utf8'));
let uprem = JSON.parse(fs.readFileSync('./src/role/premium.json'));
let upatner = JSON.parse(fs.readFileSync('./src/role/patner.json'));
let limit = JSON.parse(fs.readFileSync('./src/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./src/glimit.json'));
let set_bot = JSON.parse(fs.readFileSync('./src/set_bot.json'));
const dataProfit = JSON.parse(fs.readFileSync("./src/profit.json"));

const {
       isAlreadyResponList, 
       sendResponList, 
       getDataResponList
 } = require('../src/function_list')
const blnc = require("../lib/balance");
const calc = require("../lib/calcml")
const toRupiah = require('../lib/toRupiah')
const {
  smsg,
  fetchJson,
  getBuffer,
  getGroupAdmins,
  TelegraPh,
  msToDate,
  isUrl,
  hitungmundur,
  checkBandwidth,
  runtime,
  getRandom,
  sleep
} = require('../lib/simple')

const {
  notify,
  receipt2,
} = require('../lib/validasi')
const { 
isLimit, 
limitAdd, 
getLimit, 
 } = require("../lib/limit");
 const { getTextSetBot } = require('../lib/setbot');
const _prem = require("../lib/premium")
const _sewa = require("../lib/sewa");
const { simpanRiwayatOrder } = require("../lib/riwayat")
const { 
UploadFileUgu, 
webp2mp4File, 
 } = require('./uploader');
const { resolve } = require('path');
require('./menu')
const depositPath = "./db/deposit/";
const topupPath = "./db/topup/";
const riwayatPath = "./db/riwayat/";
// is function
const formatp = sizeFormatter({
  std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})


const jsonformat = (string) => {
  return JSON.stringify(string, null, 2)
}

module.exports = vler = async (dica, m, chatUpdate, store, set_open, set_close, antilink, antiwame, antilink2, antiwame2, simisimi, _left, _welcome, set_welcome_db, set_left_db) => {
  try {
    var body =
    m.mtype === "conversation"
    ? m.message.conversation
    : m.mtype == "imageMessage"
    ? m.message.imageMessage.caption
    : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text
        : "";
  
        var budy = (typeof m.text == 'string' ? m.text : '')
    // var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/"
    var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";
    var prefix2 = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "";
    const isCmd2 = body.startsWith(prefix);
    const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await dica.decodeJid(dica.user.id);
    const itsMeDica = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const isBanned = ban.includes(m.sender)    
    const itsMe = m.sender == botNumber ? true : false;
    let text = (q = args.join(" "));
    const fatkuns = (m.quoted || m)
    const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const qmsg = (quoted.msg || quoted)
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
    const tanggal = moment().tz("Asia/Jakarta").format("ll")
    const tanggal2 = moment().tz("Asia/Jakarta").locale("id").format('DD/MM/YYYY')
    const wayah = moment.tz('asia/jakarta').format('HH:mm:ss z')
    const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
    const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
	if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang️'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam'
}
    var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
	var date = new Date();
	var thisDay = date.getDay(),
    thisDay = myDays[thisDay];  
    const today = new Date();
    today.setDate(today.getDate() + 30); 
    const tanggall = today.toLocaleDateString("ID", { timeZone: "Asia/Jakarta" });
    
    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];  
    const limitCount = limite.limitCount
	const type = getContentType(m.message)
    const quotedType = getContentType(m.message?.extendedTextMessage?.contextInfo?.quotedMessage) || null
    if (type == 'ephemeralMessage') {
        m.message = m.message.ephemeralMessage.message
        m.message = m.message.ephemeralMessage.message.viewOnceMessage
    }
    if (type == 'viewOnceMessage') {
        m.message = m.message.viewOnceMessage.message
    }

    const mentionByTag = type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
    const mentionByReply = type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
    const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
    mention != undefined ? mention.push(mentionByReply) : []
    const mentionUser = mention != undefined ? mention.filter(n => n) : []
    let mentioned = m.message?.extendedTextMessage?.contextInfo?.mentionedJid || []
      
    const isImage = type == 'imageMessage'
    const isVideo = type == 'videoMessage'
    const isAudio = type == 'audioMessage'
    const isSticker = type == 'stickerMessage'
    const isContact = type == 'contactMessage'
    const isLocation = type == 'locationMessage'

    const isQuoted = type == 'extendedTextMessage'
    const isQuotedImage = isQuoted && quotedType == 'imageMessage'
    const isQuotedVideo = isQuoted && quotedType == 'videoMessage'
    const isQuotedAudio = isQuoted && quotedType == 'audioMessage'
    const isQuotedSticker = isQuoted && quotedType == 'stickerMessage'
    const isQuotedContact = isQuoted && quotedType == 'contactMessage'
    const isQuotedLocation = isQuoted && quotedType == 'locationMessage'
    const isAntiLink = antilink.includes(m.chat) ? true : false
    const isSimi = simisimi.includes(m.chat) ? true : false
    const isAntiWame = antiwame.includes(m.chat) ? true : false
    const isAntiLink2 = antilink2.includes(m.chat) ? true : false
    const isAntiWame2 = antiwame2.includes(m.chat) ? true : false
    const isWelcome = _welcome.includes(m.chat) ? true : false
    const isLeft = _left.includes(m.chat) ? true : false
    const isSewa = _sewa.checkSewaGroup(from, sewa) ? true : false
const Input = mentionUser[0] ? mentionUser[0] : Number(args[0]) + '@s.whatsapp.net';
    

async function getGcName(groupID) {
    try {
        let data_name = await dica.groupMetadata(groupID);
        return data_name.subject;
    } catch (err) {
        return '*Group Tidak Ada*';
    }
}

if (m.message) {
    try {
        await dica.readMessages([m.key]); 
        const jakartaTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
        const groupName = m.isGroup ? await getGcName(m.chat) : m.chat.split('@')[0]; 
        console.log(
            chalk.black(chalk.bgWhite('[ CMD ]')),
            chalk.black(chalk.bgGreen(jakartaTime)),
            chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' +
            chalk.magenta('=> From'), chalk.green(pushname),
            chalk.yellow(sender.split('@')[0]) + '\n' +
            chalk.blueBright('=> In'), chalk.green(m.isGroup ? 'Groups ' + groupName : 'Chat Pribadi ' + groupName)
        );
    } catch (error) {
        console.error(chalk.red('Error:', error));
    }
}

const isVIP = checkVIPUser(sender, uvip);
const isPATNER = checkVIPUser(sender, upatner);
const isVVIP = checkVIPUser(sender, uvvip);
const isPremium = checkVIPUser(sender, uprem);

  function validasiStalk() {
    try {
        const validasiData = JSON.parse(fs.readFileSync('./src/validasi.json', 'utf-8'));
        return validasiData.stalk;
    } catch (error) {
        console.error('Terjadi kesalahan dalam membaca file validasi:', error.message);
        return false;
    }
}

function validasiReceipt() {
  try {
      const validasiData = JSON.parse(fs.readFileSync('./src/validasi.json', 'utf-8'));
      return validasiData.receipt;
  } catch (error) {
      console.error('Terjadi kesalahan dalam membaca file validasi:', error.message);
      return false;
  }
}

 
function createZipArchive() {
  const output = fs.createWriteStream('backup.zip');
  const archive = archiver('zip', { zlib: { level: 9 } });

  output.on('close', () => {
    console.log(`Berhasil mengompres ${archive.pointer()} total byte`);
   dica.sendFile(`${global.ownerr}@s.whatsapp.net`, 'backup.zip', 'backup', `Backup: ${tanggal}`);
  });

  archive.on('error', (err) => {
    throw err;
  });

  archive.pipe(output);
  const foldersToArchive = ['src', 'db', 'session', 'setting', 'lib', 'image','controller','command'];

  foldersToArchive.forEach((folder) => {
    archive.directory(folder, folder);
  });

  archive.finalize();
}

    async function downloadAndSaveMediaMessage (type_file, path_file) {
        	if (type_file === 'image') {
                var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	} else if (type_file === 'video') {
                var stream = await downloadContentFromMessage(m.message.videoMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	} else if (type_file === 'sticker') {
                var stream = await downloadContentFromMessage(m.message.stickerMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	} else if (type_file === 'audio') {
                var stream = await downloadContentFromMessage(m.message.audioMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	}
        }
        function mentions(teks, mems = [], id) {
          if (id == null || id == undefined || id == false) {
          let res = dica.sendMessage(from, { text: teks, mentions: mems })
          return res } else { let res = dica.sendMessage(from, { text: teks, mentions: mems }, { quoted: m })
          return res}}
          
    
    // Group
    const groupMetadata = m.isGroup ? await dica.groupMetadata(m.chat).catch((e) => {}) : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    const isGroup = m.isGroup
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const isUser = signup.includes(sender)
    
//━━━━━━━━━━━━━━━[ ANTILINK ]━━━━━━━━━━━━━━━━━//
const konf = userme === 'kosong' && production === 'kosong'
        if (isGroup && isAntiLink){
            if (chath.includes(`https://chat.whatsapp.com`)) {
              if (!isBotAdmins) return reply(`Upsss... gajadi, bot bukan admin`)
              let gclink = (`https://chat.whatsapp.com/` + await dica.groupInviteCode(m.chat))
              let isLinkThisGc = new RegExp(gclink, 'i')
              let isgclink = isLinkThisGc.test(m.text)
              if (isgclink) return reply(`Upsss... gak jadi, untung link gc sendiri`)
              if (isAdmins) return reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
              if (itsMeDica) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
              if (m.key.fromMe) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
                await dica.sendMessage(from, { delete: m.key })
                reply(`🛡 *GROUP LINK DETECTOR* 🛡\n\nBudayakan baca Deskribsi mas, mari saling menghargai`)
                
                let number = sender
      await dica.groupParticipantsUpdate(from, [number], "remove")
            }
        }    
        if (isAntiLink2) {
          if (budy.match(`chat.whatsapp.com`)) {
              if (!isBotAdmins) return //reply(`Upsss... gajadi, bot bukan admin`)
              let gclink = (`https://chat.whatsapp.com/` + await dica.groupInviteCode(m.chat))
              let isLinkThisGc = new RegExp(gclink, 'i')
              let isgclink = isLinkThisGc.test(m.text)
              if (isgclink) return //reply(`Upsss... gak jadi, untung link gc sendiri`)
              if (isAdmins) return //reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
              if (itsMeDica) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
              if (m.key.fromMe) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
              await dica.sendMessage(m.chat, {
                  delete: {
                      remoteJid: m.chat,

                      fromMe: false,
                      id: m.key.id,
                      participant: m.key.participant
                  }
              })
          }
      }
      if (isAntiWame) {
          if (budy.match(`wa.me/`)) {
              reply(`*「 ANTI WA ME 」*\n\nWa Me detected, maaf kamu akan di kick !`)
              if (!isBotAdmins) return reply(`Upsss... gajadi, bot bukan admin`)
          
              if (m.key.fromMe) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
              await dica.sendMessage(m.chat, {
                  delete: {
                      remoteJid: m.chat,

                      fromMe: false,
                      id: m.key.id,
                      participant: m.key.participant
                  }
              })
              dica.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
          }
      }
      if (isAntiWame2) {
          if (budy.match(`wa.me/`)) {
              if (!isBotAdmins) return //reply(`Upsss... gajadi, bot bukan admin`)
              if (isAdmins) return //reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
              if (itsMeDica) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
              if (m.key.fromMe) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
              await dica.sendMessage(m.chat, {
                  delete: {
                      remoteJid: m.chat,

                      fromMe: false,
                      id: m.key.id,
                      participant: m.key.participant
                  }
              })
          }
      }
      
    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;
    if ((budy) && ["bot", "Bot", "Bit"].includes(budy) && !isCmd2) {
if (!isGroup) return 
const getTextBot = getTextSetBot(from, set_bot);
if (getTextBot !== undefined) {
dica.sendMessage(from, { text: getTextBot })
} else {
dica.sendMessage(from, { text: `Bot suda aktif buna sayang🫶🏻` })
}
}
if (budy.toLowerCase() === 'p') {
if (!isAdmins || !m.quoted || !isGroup) return
  let proses = `O━• Transaksi Pending •━O\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${wayah}\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan : ${m.quoted.text}\n\nPesanan @${m.quoted.sender.split("@")[0]} sedang di proses!\n\n━O━O━••••••••••••━O━O━`
  mentions(proses, [m.quoted.sender], true)
} 
if (budy.toLowerCase() === 'd'){
if (!isAdmins || !m.quoted || !isGroup) return
let sukses = `O━• Transaksi Sukses •━O\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${wayah}\n✨ STATUS  : Berhasil\`\`\`\n\nTerimakasih atas orderannya @${m.quoted.sender.split("@")[0]}🙏\n\n━O━O━••••••••••••━O━O━`
mentions(sukses, [m.quoted.sender], true)
}
    // Jika ada user
    if (isCmd2 && !isUser) {
      signup.push(sender)
      fs.writeFileSync('./src/user.json', JSON.stringify(signup, null, 2))
    }
  


const files = fs.readdirSync(depositPath);
if (files.length > 0) {
  if (budy.toLowerCase() === "ye") {
    if(!itsMeDica) return;
    let data_deposit = JSON.parse(fs.readFileSync(depositPath + files[0]));
    let depositnya = data_deposit.data.amount_deposit;
    blnc.addBalance(data_deposit.number, depositnya, balanceDB);
    var text_sukses = `*DEPOSIT-SUKSES*
*ID:* ${data_deposit.ID}
*Nomer:* wa.me/${data_deposit.number.split('@')[0]}
*Payment:* ${data_deposit.payment}
*Tanggal:* ${data_deposit.date.split(' ')[0]}
*Jumlah Depo:* Rp ${toRupiah(data_deposit.data.amount_deposit)}`;
    reply(text_sukses);
    dica.sendMessage(
      data_deposit.number,
     {text: `${text_sukses}\n\n_Depositmu telah dikonfirmasi oleh admin, silahkan cek saldo dengan cara *#me*_`}
    );
    fs.unlinkSync(depositPath + files[0]);
  } else if (budy.toLowerCase() === "ge") {
  	if(!itsMeDica) return;
    let data_deposit = JSON.parse(fs.readFileSync(depositPath + files[0]));
    reply(`Sukses Reject Deposit dengan ID : ${data_deposit.ID}`);
    dica.sendMessage(
      data_deposit.number,
      {text: `Maaf Deposit Dengan ID : ${data_deposit.ID} DiReject, Silahkan Hubungin Owner\n\nwa.me/${owner}`}
    );
    fs.unlinkSync(depositPath + files[0]);
  }
}
if (!isCmd2 && m.isGroup && isAlreadyResponList(from, budy, db_respon_list)) {
  const budyLower = budy;

  var get_data_respon = getDataResponList(from, budyLower, db_respon_list);

  if (get_data_respon.isImage === false) {
      dica.sendMessage(from, { text: sendResponList(from, budyLower, db_respon_list) }, {
          quoted: m
      });
  } else {
      dica.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
          quoted: m
      });
  }
}

//cornsjob role
   

//batas cornsjob role
  if (fs.existsSync(riwayatPath + m.sender.split("@")[0] + "digi.json")) {
    if (budy.startsWith(prefix2) && !m.key.fromMe) {
      let data_topup = JSON.parse(fs.readFileSync(riwayatPath + m.sender.split("@")[0] + "digi.json"));

      if (data_topup.session === "amount") {
        if (isNaN(budy)) {
          reply("Masukan hanya angka yah");
          return;
        }
        data_topup.jumlah = Number(budy);
        if (data_topup.jumlah < 200000) return reply(`Jumlah Rp${toRupiah(budy)} Gabisa kak\nMinimal Rp200.000`);
        reply("Oke kak\nAtas nama pengirimnya?");
        data_topup.session = "konfirmasi_jumlah";
        fs.writeFileSync(riwayatPath + m.sender.split("@")[0] + "digi.json", JSON.stringify(data_topup, null, 3));
      } else if (data_topup.session === "konfirmasi_jumlah") {
        data_topup.session = "konfirmasi_deposit";
        data_topup.nama = budy.toUpperCase();
        fs.writeFileSync(riwayatPath + m.sender.split("@")[0] + "digi.json", JSON.stringify(data_topup, null, 3));
        var text2 = `📝 *INPUT-DEPOSIT-DIGI* 📝\n\n
*Atas nama pengirim:* ${data_topup.nama} 
*Nominal Transfer:* ${toRupiah(data_topup.jumlah)}

Apakah data tersebut sudah benar?
Ketik salah apabila data tidak benar`;
        var buttonMessage_dep = {
          text: `${text2}\nSelanjutnya pilih salah satu opsi bank tujuan\nBCA, MANDIRI, BRI`,
          headerType: 1
        }
        dica.sendMessage(from, buttonMessage_dep);
      } else if (data_topup.session === "konfirmasi_deposit") {
        if (budy.toLowerCase() === "bri" || budy.toLowerCase() === "bca" || budy.toLowerCase() === "mandiri") {
          data_topup.tujuan = budy.toUpperCase();
          fs.writeFileSync(riwayatPath + m.sender.split("@")[0] + "digi.json", JSON.stringify(data_topup, null, 3));
          upDeposit(data_topup.jumlah, data_topup.tujuan, data_topup.nama)
            .then(response => {
              console.log(response)
              let data_topup = JSON.parse(fs.readFileSync(riwayatPath + m.sender.split("@")[0] + "digi.json"));
              const deposit = response;
              if (data_topup.tujuan === "BCA") {
                reply(`*Tujuan:* ${data_topup.tujuan}\n*Jumlah Transfer:* Rp${toRupiah(deposit.data.amount)}\n*Berita Transfer:* ${deposit.data.notes}\n*Nomor Rekening Transfer:* 6042888890\n*Nama Rekening:* PT DIGIFLAZZ INTERKONEKSI INDONESIA`);
              } else if (data_topup.tujuan === "MANDIRI") {
                reply(`*Tujuan:* ${data_topup.tujuan}\n*Jumlah Transfer:* Rp${toRupiah(deposit.data.amount)}\n*Berita Transfer:* ${deposit.data.notes}\n*Nomor Rekening Transfer:* 1550009910111\n*Nama Rekening:* PT DIGIFLAZZ INTERKONEKSI INDONESIA`);
              } else if (data_topup.tujuan === "BRI") {
                reply(`*Tujuan:* ${data_topup.tujuan}\n*Jumlah Transfer:* Rp${toRupiah(deposit.data.amount)}\n*Berita Transfer:* ${deposit.data.notes}\n*Nomor Rekening Transfer:* 213501000291307\n*Nama Rekening:* PT DIGIFLAZZ INTERKONEKSI`);
              } else {
                reply(`Lu mah gaada tujuan 🗿\n*Jumlah Transfer:* Rp${toRupiah(deposit.data.amount)}\n*Berita Transfer:* ${deposit.data.notes}`);
              }
              fs.unlinkSync(riwayatPath + m.sender.split("@")[0] + "digi.json");
              console.log(response.data);
            })
            .catch(function (error) {
              const message = error.response.data.data.message;
              console.error(error);
              reply(`Gagal\n${message}`);
              fs.unlinkSync(riwayatPath + m.sender.split('@')[0] + 'digi.json');
            });
        } else if (budy.toLowerCase() === "salah" || budy.toLowerCase() === "n" || budy.toLowerCase() === "gajadi" ) {
          reply(`Baik kak, Deposit dibatalkan`);
          fs.unlinkSync(riwayatPath + m.sender.split('@')[0] + 'digi.json');
          return;
        } else {
          reply("Pilihannya Hanya `BRI` `BCA` atau `MANDIRI`.");
        }
      }
    }
  }
  
  if (fs.existsSync(topupPath + m.sender.split('@')[0] + '.json')) {
    if (budy.startsWith(prefix2) && !m.key.fromMe) {
      let data_topup = JSON.parse(fs.readFileSync(topupPath + m.sender.split('@')[0] + '.json'));
      if (data_topup.session === 'konfirmasi_order') {
        if (budy.toLowerCase() === 'benar' || budy.toLowerCase() === 'y') {
          let saldolu = blnc.checkBalance(data_topup.number, balanceDB);
          if (saldolu === 0) {
            fs.unlinkSync(topupPath + m.sender.split('@')[0] + '.json');
            reply(`Maaf sepertinya saldo kamu Rp 0, Silahkan melakukan ${prefix}deposit sebelum order`);
            return;
          }
          if (saldolu < Number(data_topup.data.price)) {
            fs.unlinkSync(topupPath + m.sender.split('@')[0] + '.json');
            reply('Maaf saldo anda kurang\nKetik #deposit untuk isi ulang saldo');
            return;
          }
  
          const buyerSkuCode = data_topup.ID;
          const customerNo = data_topup.data.nomer;
          const refId = data_topup.ref_id;
          
          reply('*「 TRANSAKSI PENDING 」*\n\n_Mohon Tunggu Pesanan Anda Sedang Diproses_');
          blnc.lessBalance(data_topup.number, Number(data_topup.data.price), balanceDB);
  
          async function checkTransactionStatus() {
            try {
              console.log('Pending')
              const ress = await letsgo(buyerSkuCode, customerNo, refId);
              let status = ress.status;
              let sn = ress.sn;
              let Mess = ress.message;
              let jual = data_topup.data.price
              let modal = ress.price
              let saldo = ress.buyer_last_saldo
              let sisanya = `Rp${toRupiah(blnc.checkBalance(m.sender, balanceDB))}`
              let level = `${itsMeDica ? 'Dev': isPATNER ? 'Patner' : isVVIP ? 'VVIP' : isVIP ? 'VIP' : 'User'}`
  data_topup.session = "finish";
      fs.writeFileSync(topupPath + m.sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3));
              if (status === 'Gagal') {
                blnc.addBalance(data_topup.number, parseInt(data_topup.data.price), balanceDB);
                fs.unlinkSync(topupPath + m.sender.split('@')[0] + '.json');
                
                if ( Mess === 'Saldo tidak cukup') {
                reply(
`*「 TRANSAKSI GAGAL 」*\n
*ID Order:* ${data_topup.ref_id}
*Tujuan:* ${data_topup.data.nomer}
*Note:* *Mungkin anda belum mandi*`
                );
                let teks = `Woi ngab\nada yg order nih, saldo digi lu ga cukup. depo lah gblk`
                dica.sendMessage(ownerr+"@s.whatsapp.net",{ 
text: `${teks}`
}, {quoted: m})
                
              } else {
                reply(
`*「 TRANSAKSI GAGAL 」*\n
*ID Order:* ${data_topup.ref_id}
*Tujuan:* ${data_topup.data.nomer}
*Note:* *${Mess}*`
                );
                }
                return simpanRiwayatOrder(data_topup, pushname, status, sn, m.sender.split("@")[0] + ".json");
              } else if (status === 'Sukses') {
                let targ = '';
                let nickname = '';
                let nomer = '';
                if (validasiStalk()) {
                  targ = `${
                    data_topup.data.brand === 'MOBILE LEGENDS'
                      ? `*Nick:* ${data_topup.data.stalk.nickname}\n*›› ID:* ${data_topup.data.stalk.id}(${data_topup.data.stalk.zoneId})`
                      : data_topup.data.brand === 'FREE FIRE'
                      ? `${data_topup.data.stalk.nickname}`
                      : `${data_topup.data.nomer}`
                  }`;
                  nickname = `${
                    data_topup.data.brand === 'MOBILE LEGENDS'
                      ? `${data_topup.data.stalk.nickname}`
                      : data_topup.data.brand === 'FREE FIRE'
                      ? `${data_topup.data.stalk.nickname}`
                      : `${pushname}`
                  }`;
                  nomer = `${
                    data_topup.data.brand === 'MOBILE LEGENDS'
                      ? `${data_topup.data.stalk.id}(${data_topup.data.stalk.zoneId})`
                      : data_topup.data.brand === 'FREE FIRE'
                      ? `${data_topup.data.stalk.id}`
                      : `${data_topup.data.nomer}`
                  }`;
                } else {
                  targ = `${data_topup.data.nomer}`;
                  nomer = `${data_topup.data.nomer}`
                  nickname = `${pushname}`
                }

                notify(dica, m, status, data_topup.data.product_name, pushname, level, sisanya, targ, refId, sn, jual, modal, saldo, jam, tanggal )
const capt = `*「 SUCCESS. BOSSKU 」*
*›› Ref ID :* ${refId}
*›› Status :* ${status}
*›› Item :* ${data_topup.data.product_name}
*›› Target:* ${targ}

*›› Pesan :* ${Mess} 
*›› Harga :* Rp ${toRupiah(data_topup.data.price)}
*›› Saldo sisa* ${sisanya}
*›› Tanggal :* ${new Date().toLocaleDateString('ID', { timeZone: 'Asia/Jakarta' })}
*›› Jam :* ${new Date().toLocaleTimeString('ID', { timeZone: 'Asia/Jakarta' })}
══════✪〘 *SN* 〙✪══════
${sn.split('/').join('\n')}
✪═════════════════✪`
console.log(capt)
                if (validasiReceipt()) {
                (async () => {
                  const product = data_topup.data.product_name;
                  const time = `${new Date().toLocaleDateString('ID', { timeZone: 'Asia/Jakarta' })}\n${new Date().toLocaleTimeString('ID', { timeZone: 'Asia/Jakarta' })}`;
                  const status_color = 'green';
                  const imagePath = await receipt2(dica, m, from, capt, encodeURIComponent(nickname), encodeURIComponent(product), refId, encodeURIComponent(sn), encodeURIComponent(nomer), status, encodeURIComponent(time), status_color);
                  fs.unlinkSync(imagePath);
              })();
            } else {

                reply(capt);
            }
                fs.unlinkSync(topupPath + m.sender.split('@')[0] + '.json');
                return simpanRiwayatOrder(data_topup, pushname, status, sn, m.sender.split("@")[0] + ".json");
              }
              await sleep(7000);
              await checkTransactionStatus();
            } catch (error) {
              console.error(error, '\n');
              reply('Terjadi kesalahan saat memeriksa status transaksi.');
            }
          }
          checkTransactionStatus();
        } else if (budy.toLowerCase() === 'salah' || budy.toLowerCase() === 'n') {
          reply('Orderan Dibatalkan');
          if (fs.existsSync(topupPath + m.sender.split('@')[0] + '.json')) {
            fs.unlinkSync(topupPath + m.sender.split('@')[0] + '.json');
          }
          return;
        } else {
          reply('Mohon masukan `Benar` atau `Salah`.');
        }
      }
    }
  }
  

  function cekPay(uniqueCode, mnyet) {
    let data_deposits;
          try {
            data_deposits = JSON.parse(fs.readFileSync(depositPath + "depo.json"));
            if (!Array.isArray(data_deposits)) {
              throw new Error("Data deposits bukan array.");
            }
          } catch (error) {
            console.error("Gagal membaca atau parse depo.json:", error);
            return;
          }
      
          let indexToUpdate = data_deposits.findIndex(deposit => deposit.val === 1 && deposit.number === mnyet);
      
          if (indexToUpdate !== -1) {
            let data_deposit = data_deposits[indexToUpdate];
      
        let status = 'Pending';
      
        function checkStatus() {
          paydisini.checkTransactionStatus(uniqueCode)
            .then(result => {
                const transactionData = result;
                status = transactionData.status;
                if (status === 'Success') {
                  console.log(`Depo ${mnyet.split('@')[0]}\nPembayaran Berhasil`);
    
                  blnc.addBalance(mnyet, data_deposit.data.amount_deposit, balanceDB);
    
              const textSukses = `DEPOSIT SUKSES\nID: ${data_deposit.ID}\nProfil: ${data_deposit.buyer}\nPayment: Qris Otomatis\nTanggal: ${data_deposit.date}\nJumlah Depo: Rp ${toRupiah(data_deposit.data.amount_deposit)}\n\nDepositmu telah dikonfirmasi oleh admin, silahkan cek saldo dengan cara /me`;
              var buttonMessage_dep = {
                text: `${textSukses}`,
                headerType: 1
              }
              dica.sendMessage(`${mnyet}`, buttonMessage_dep);
              data_deposit.val = 2;
              data_deposit.status = 'Success';
            data_deposits[indexToUpdate] = data_deposit;
            fs.writeFileSync(depositPath + "depo.json", JSON.stringify(data_deposits, null, 3));
                } else if (status === 'Canceled') {
                  console.log(`Depo ${mnyet.split('@')[0]}\nPembayaran Dibatalkan`);
                  const textGagal = `DEPOSIT GAGAL\nID: ${data_deposit.ID}\nProfil: ${data_deposit.username}\nPayment: Qris Otomatis\nTanggal: ${data_deposit.date}\nJumlah Depo: Rp ${toRupiah(data_deposit.data.amount_deposit)}\n\nMelewati waktu batas
    Depositmu otomatis di batalkan`;
              var buttonMessage_dep = {
                text: `${textGagal}`,
                headerType: 1
              }
              dica.sendMessage(`${mnyet}`, buttonMessage_dep);
              data_deposit.val = 2;
              data_deposit.status = 'Canceled';
            data_deposits[indexToUpdate] = data_deposit;
            fs.writeFileSync(depositPath + "depo.json", JSON.stringify(data_deposits, null, 3));
                } else {
                  console.log(`Depo ${mnyet.split('@')[0]}\nStatus saat ini: ${status}. Menunggu pembayaran...`);
                  return sleep(5000).then(checkStatus); 
                }
            })
            .catch(error => {
              console.error('Terjadi kesalahan:', error.message);
            });
        }
        checkStatus();
      }
    }
  
  if (fs.existsSync(depositPath + "depo.json")) {
    if (!budy.startsWith(isCmd2) && !m.key.fromMe) {
      let data_deposits;
      
      try {
        data_deposits = JSON.parse(fs.readFileSync(depositPath + "depo.json"));
        if (!Array.isArray(data_deposits)) {
          throw new Error("Data deposits bukan array.");
        }
      } catch (error) {
        console.error("Gagal membaca atau parse depo.json:", error);
        return;
      }
  
      let indexToUpdate = data_deposits.findIndex(deposit => deposit.val === 1 && deposit.number === m.sender);
  
      if (indexToUpdate !== -1) {
        let data_deposit = data_deposits[indexToUpdate];
  
        if (data_deposit.session === "payment") {
          if (!["gopay", "dana", "bca", "qris"].includes(budy.toLowerCase())) {
            return reply("Pilihannya Hanya `GOPAY` `DANA` `BCA` atau `QRIS`.");
          }
  
          let minim;
          if (budy.toLowerCase() === 'bca') {
            minim = minimal.bca;
          } else if (budy.toLowerCase() === 'gopay') {
            minim = minimal.gopay;
          } else if (budy.toLowerCase() === 'dana') {
            minim = minimal.dana;
          } else if (budy.toLowerCase() === 'qris') {
            minim = minimal.qris;
          }
  
          data_deposit.minimal = minim;
          data_deposit.payment = budy.toUpperCase();
          data_deposit.session = "amount";
  
          data_deposits[indexToUpdate] = data_deposit;
          fs.writeFileSync(depositPath + "depo.json", JSON.stringify(data_deposits, null, 3));
  
          reply(`Oke kak, mau deposit berapa?\n\nMinimal: ${toRupiah(data_deposit.minimal)}.`);
        } else if (data_deposit.session === "amount") {
          if (isNaN(budy)) return reply("Masukan hanya angka ya");
          data_deposit.data.amount_deposit = Number(budy);
          if (data_deposit.data.amount_deposit < data_deposit.minimal) return reply(`Minimal Rp ${toRupiah(data_deposit.minimal)}`);
          data_deposit.session = "konfirmasi_deposit";
  
          data_deposits[indexToUpdate] = data_deposit;
          fs.writeFileSync(depositPath + "depo.json", JSON.stringify(data_deposits, null, 3));
  
          reply(`*DEPOSIT USER - ${pushname}*
*ID:* ${data_deposit.ID}
*Payment:* ${data_deposit.payment}
*Jumlah Deposit:* Rp ${toRupiah(data_deposit.data.amount_deposit)}
${data_deposit.payment === 'QRIS' ? `*Qris Admin:* 0.7%\n*Total Pembayaran:* Rp ${toRupiah(data_deposit.data.amount_deposit * 1.007)}` : `*Total Pembayaran:* Rp ${toRupiah(data_deposit.data.amount_deposit)}`}
  
Apakah data tersebut sudah benar? Akan gagal apabila terdapat kesalahan input.
  
_Ketik Y untuk melanjutkan, N untuk membatalkan_`);
        } else if (data_deposit.session === "konfirmasi_deposit") {
          if (budy.toLowerCase() === "y") {
            data_deposit.session = "konfirmasi";
  
            data_deposits[indexToUpdate] = data_deposit;
            fs.writeFileSync(depositPath + "depo.json", JSON.stringify(data_deposits, null, 3));
  
            if (data_deposit.payment === "GOPAY") {
              reply(`*PAYMENT-GOPAY*
*Nomer:* ${tujuan.gopay}
*AN:* ${atasnama.gopay}
  
Silahkan transfer dengan no yang sudah tertera. Jika sudah, harap kirim bukti foto dengan caption *#bukti* untuk diacc oleh admin`);
            } else if (data_deposit.payment === "BCA") {
              reply(`*PAYMENT-BCA*
*Nomer:* ${tujuan.bca}
*AN:* ${atasnama.bca}
  
Silahkan transfer dengan no yang sudah tertera. Jika sudah, harap kirim bukti foto dengan caption *#bukti* untuk diacc oleh admin`);
            } else if (data_deposit.payment === "SHOPEPAY") {
              reply(`*PAYMENT-Shopee Pay*
*Nomer:* ${tujuan.shopeepay}
*AN:* ${atasnama.shopeepay}
  
Silahkan transfer dengan no yang sudah tertera. Jika sudah, harap kirim bukti foto dengan caption *#bukti* untuk diacc oleh admin`);
            } else if (data_deposit.payment === "QRIS") {

  const amount = data_deposit.data.amount_deposit;
  const servicePay = 11;

paydisini.createNewTransaction(data_deposit.ID, servicePay, amount)
.then(async (result) => {
if (result) {
// console.log('Berhasil membuat transaksi:', result);
await qrcode.toFile('image/qris.jpg', result.qr_content);
//console.log('QR Code berhasil disimpan sebagai gambar');
let capt = `Silakan lakukan scan QRIS ini untuk melakukan pembayaran.
Segera melakukan pembayaran sebelum 30 menit
jika melewati akan otomatis cancel`;

let bukti_bayar = {
image: fs.readFileSync(`./image/qris.jpg`),
caption: capt,
headerType: 5
}
dica.sendMessage(from, bukti_bayar, { quoted: m });

await fs.unlinkSync('image/qris.jpg');
cekPay(data_deposit.ID, data_deposit.number);
} else {
console.log('Gagal membuat transaksi.');
}
});
            } else if (data_deposit.payment === "DANA") {
              reply(`*PAYMENT-DANA*
*Nomer:* ${tujuan.dana}
*AN:* ${atasnama.dana}
  
Silahkan transfer dengan no yang sudah tertera. Jika sudah, harap kirim bukti foto dengan caption *#bukti* untuk diacc oleh admin`);
            }
          } else if (budy.toLowerCase() === "n") {
    reply(`Baik kak, Deposit dengan ID : ${data_deposit.ID} dibatalkan 💩`);
  
    // Mengubah nilai val menjadi 2
    data_deposit.val = 2;
    data_deposits[indexToUpdate] = data_deposit;
    fs.writeFileSync(depositPath + "depo.json", JSON.stringify(data_deposits, null, 3));
  }
        }
      } 
    }
  }


const level = {
  isPATNER,
  isVVIP,
  isVIP,
  itsMeDica
}
//━━━━━━━━━━━━━━━[ FITUR DIGIFLAZZ ]━━━━━━━━━━━━━━━━━// 
require('../command/caseDigi').caseDigi(dica, from, command, reply, text, level, blnc, balanceDB, m, pushname, riwayatPath, topupPath, validasiStalk);
//✄┈┈┈⟬ *FITUR RATE BAHAN* ⟭ •
require('../command/caseRateBahan')(command, reply, m, text, itsMeDica, isAdmins)
//✄┈┈┈⟬ *FITUR STALK* ⟭ •
require('../command/caseStalkUsername')(command, reply, m, text, level)
//✄┈┈┈⟬ *FITUR OWNER* ⟭ •
require('../command/caseOwner')(prefix, command, reply, text, level, sleep, dica, m, from, isUrl, args, signup, mentions, Input, blnc, balanceDB, riwayatPath, upatner, uvip, uvvip, uprem, dataProfit, sewa, getGcName, _sewa, isSewa)
//✄┈┈┈⟬ *FITUR PREMIUM* ⟭ •
require('../command/casePremium')(command, dica, reply, m, sender, prefix, itsMeDica, args, isImage, isQuotedImage, quoted, text, isQuotedSticker, calc, pushname, from)
//✄┈┈┈⟬ *FITUR GROUP* ⟭ •
require('../command/caseGroup')(prefix, command, m, from, sender, text, dica, pushname, groupMetadata, participants, isBotAdmins, isAdmins, itsMeDica, reply, args, store, botNumber, db_respon_list, isImage, isQuotedImage, groupName, tanggal, time2, Input, mentions, mentionUser, sleep, quoted, _welcome, _left, isWelcome, isLeft, isAntiLink, antilink, isAntiLink2, antilink2, set_welcome_db, set_left_db, antiwame, isAntiWame, isAntiWame2, antiwame2, set_open, set_close, set_bot, isSewa, _sewa, sewa)
    switch (command) {
      //━━━━━━━━━━━━━━━[ CASE NYA ]━━━━━━━━━━━━━━━━━//      

        case 'owner':
          case 'creator': {
              dica.sendContact(m.chat, global.owner, m)
          }
          break
  case 'listprem':{
    let sortedPrem = uprem.sort((a, b) => {
      if (a.expired === 'PERMANENT') return -1;
      if (b.expired === 'PERMANENT') return 1;
      if (a.expired === b.expired) return 0;
      return a.expired > b.expired ? 1 : -1;
    }).sort((a, b) => {
      if (a.expired === 'PERMANENT' || b.expired === 'PERMANENT') return 0;
      if (a.expired < b.expired) return 1;
      if (a.expired > b.expired) return -1;
      return 0;
    });
    let txt = `List Premium Jumlah: ${uprem.length}\n\n`;
    let men = [];
    for (let i of sortedPrem) {
      men.push(i.id);
      txt += `*ID:* @${i.id.split("@")[0]}\n`;
      if (i.expired === 'PERMANENT') {
        txt += `*Kedaluwarsa:* PERMANENT\n\n`;
      } else {
        let remainingTime = i.expired - Date.now();
        if (isNaN(remainingTime)) {
          txt += `*Kedaluwarsa:* PERMANENT\n\n`;
        } else if (remainingTime <= 0) {
          txt += `*Kedaluwarsa:* Sudah habis\n\n`;
        } else {
          let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
          let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
          txt += `*Kedaluwarsa:* ${days} hari, ${hours} jam, ${minutes} menit lagi\n\n`;
        }
      }
    }
    mentions(txt, men, true);
  }
    break;
    case 'listpatner':{
    let sortedPatner = upatner.sort((a, b) => {
      if (a.expired === 'PERMANENT') return -1;
      if (b.expired === 'PERMANENT') return 1;
      if (a.expired === b.expired) return 0;
      return a.expired > b.expired ? 1 : -1;
    }).sort((a, b) => {
      if (a.expired === 'PERMANENT' || b.expired === 'PERMANENT') return 0;
      if (a.expired < b.expired) return 1;
      if (a.expired > b.expired) return -1;
      return 0;
    });
    let txt = `List Patner Jumlah: ${upatner.length}\n\n`;
    let men = [];
    for (let i of sortedPatner) {
      men.push(i.id);
      txt += `*ID:* @${i.id.split("@")[0]}\n`;
      if (i.expired === 'PERMANENT') {
        txt += `*Kedaluwarsa:* PERMANENT\n\n`;
      } else {
        let remainingTime = i.expired - Date.now();
        if (isNaN(remainingTime)) {
          txt += `*Kedaluwarsa:* PERMANENT\n\n`;
        } else if (remainingTime <= 0) {
          txt += `*Kedaluwarsa:* Sudah habis\n\n`;
        } else {
          let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
          let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
          txt += `*Kedaluwarsa:* ${days} hari, ${hours} jam, ${minutes} menit lagi\n\n`;
        }
      }
    }
    mentions(txt, men, true);
  }
    break;
    

          
          case 'ping': case 'botstatus': case 'statusbot': {
            if (!itsMeDica) throw mess.owner
            const used = process.memoryUsage()
            const cpus = os.cpus().map(cpu => {
                cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
          return cpu
            })
            const cpu = cpus.reduce((last, cpu, _, { length }) => {
                last.total += cpu.total
                last.speed += cpu.speed / length
                last.times.user += cpu.times.user
                last.times.nice += cpu.times.nice
                last.times.sys += cpu.times.sys
                last.times.idle += cpu.times.idle
                last.times.irq += cpu.times.irq
                return last
            }, {
                speed: 0,
                total: 0,
                times: {
              user: 0,
              nice: 0,
              sys: 0,
              idle: 0,
              irq: 0
            }
            })
            let timestamp = speed()
            let latensi = speed() - timestamp
            neww = performance.now()
            oldd = performance.now()
            respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
            `.trim()
            m.reply(respon)
        }
        break;
        
       
            
//✄┈┈┈⟬ *DOWNLOADER* ⟭ •
            case 'igdl': {
            	if (isBanned) return m.reply(`*You Have Been Banned*`)
        if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link Instagram video/reels\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/reel/Clclas0jHHD/?igshid=MzRlODBiNWFlZA==`);
if (!isUrl(args[0])) return reply(`Kirim perintah:\n${prefix+command} link Instagram video/reels\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/reel/Clclas0jHHD/?igshid=MzRlODBiNWFlZA==`);
reply(mess.wait);
if (isLimit(m.sender, isPremium, itsMeDica, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan ketik ${prefix}limit untuk mengecek limit`);
const instagramURL = args[0];

axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=${global.lolkey}&url=${encodeURIComponent(instagramURL)}`)
  .then(response => {
    const result = response.data.result;
    const videoURL = result[0];
    const imageURL = result[1];

    let buttonMessage = {
      video: {
        url: videoURL
      },
      caption: "NIH HASILNYA!\n" + text,
    };

    dica.sendMessage(from, buttonMessage, { quoted: m });
  })
  .catch(error => {
    console.log(error);
    reply("Terjadi kesalahan saat mengambil hasil dari link Instagram tersebut.");
  });
  
                    limitAdd(m.sender, limit)
            }
            break
case 'ttdl':{
	if (isBanned) return m.reply(`*You Have Been Banned*`)
	if (!text) return reply('Link nya mana?')
const apiUrl = `https://api.lolhuman.xyz/api/tiktok?apikey=${global.lolkey}&url=${encodeURIComponent(args[0])}`;
reply(mess.wait)
axios.get(apiUrl)
  .then((response) => {
    if (response.status === 200) {
      const data = response.data;
     const NIH =  `*Judul:* ${data.result.title}
*Durasi:* ${data.result.duration} detik
*Penulis:* ${data.result.author.username}
*Putar:* ${data.result.statistic.play_count}
*Suka:* ${data.result.statistic.like_count}
*Bagikan:* ${data.result.statistic.share_count}
*Komentar:* ${data.result.statistic.comment_count}`

let buttonMessage = {
      video: {
        url: data.result.link
      },
      caption: NIH,
    };
    dica.sendMessage(from, buttonMessage, { quoted: m });
    } else {
      reply(`Gagal mengambil data:\n ${response.status}, \n${response.statusText}`);
    }
  })
  .catch((error) => {
    console.error('Terjadi kesalahan:', error);
    reply(`*Terjadi kesalahan:* Video tidak di temukan `);
  });
	}
	break
case 'ttvn': {
      if (isBanned) return m.reply(`*You Have Been Banned*`)
      if (!text) throw `Example : ${prefix + command} + url`
const apiUrl = `https://api.lolhuman.xyz/api/tiktokmusic?apikey=${global.lolkey}&url=${encodeURIComponent(args[0])}`;
axios.get(apiUrl)
  .then((response) => {
    if (response.status === 200) {
      const data = response.data;
      if (data.result) {
        const musicUrl = data.result;
        dica.sendMessage(m.chat, {audio: { url: `${musicUrl}` }, mimetype: 'audio/mpeg', ptt: true}, { quoted : m })
      } else {
        reply('Musik TikTok tidak ditemukan.');
      }
    } else {
      console.log('Gagal mengambil data:', response.status, response.statusText);
      reply('Gagal mengambil data:')
    }
  })
  .catch((error) => {
    console.error('Terjadi kesalahan:', error);
  });
     }
    break;
case 'ttmp3': {
      if (isBanned) return m.reply(`*You Have Been Banned*`)
      if (!text) throw `Example : ${prefix + command} + url`
const apiUrl = `https://api.lolhuman.xyz/api/tiktokmusic?apikey=${global.lolkey}&url=${encodeURIComponent(args[0])}`;
reply(mess.wait)
axios.get(apiUrl)
  .then((response) => {
    if (response.status === 200) {
      const data = response.data;
      if (data.result) {
        const musicUrl = data.result;
        dica.sendMessage(m.chat, {audio: { url: `${musicUrl}` }, mimetype: 'audio/mpeg'}, { quoted : m })
      } else {
        reply('Musik TikTok tidak ditemukan.');
      }
    } else {
      console.log('Gagal mengambil data:', response.status, response.statusText);
      reply('Gagal mengambil data:')
    }
  })
  .catch((error) => {
    console.error('Terjadi kesalahan:', error);
  });
     }
    break;
    
    case 'ytdl': case 'ytmp4': {
  if (isBanned) return m.reply(`*You Have Been Banned*`)
  if (!text) throw `Example : ${prefix + command} + url`
  const apiUrl = `https://api.lolhuman.xyz/api/ytvideo2?apikey=${global.lolkey}&url=${encodeURIComponent(text)}`;
  reply(mess.wait)
  axios.get(apiUrl)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        if (data.result) {
          const videoInfo = data.result;
          const teks = `*Judul Video:* ${videoInfo.title}

_*Mohon bersabar Video sedang di kirim*_`
reply(teks)
          if (videoInfo.link) {
            let buttonMessage = {
              video: {
                url: videoInfo.link
              },
              caption: 'Done',
            };
            dica.sendMessage(from, buttonMessage, { quoted: m });
          } else {
            reply('Tidak ada tautan video.');
          }
        } else {
          reply('Video YouTube tidak ditemukan.');
        }
      } else {
        console.log('Gagal mengambil data:', response.status, response.statusText);
        reply('Gagal mengambil data:')
      }
    })
    .catch((error) => {
      console.error('Terjadi kesalahan:', error);
    });
}
break;
case 'ytmp3': {
  if (isBanned) return reply('*You Have Been Banned*');
  if (!text) throw `Example : ${prefix + command} + url`;
  if (!isUrl(text)) return reply('text harus berupa url')
  const apiUrl = `https://api.lolhuman.xyz/api/ytaudio2?apikey=${global.lolkey}&url=${encodeURIComponent(text)}`;
  reply(mess.wait);
  axios.get(apiUrl)
      .then((response) => {
          if (response.status === 200) {
              const data = response.data;
              if (data.result) {
                  const audioInfo = data.result;
                  dica.sendMessage(m.chat, { audio: { url: `${audioInfo.link}` }, mimetype: 'audio/mpeg' }, { quoted: m });
              } else {
                  reply('Audio YouTube tidak ditemukan.');
              }
          } else {
              console.log('Gagal mengambil data:', response.status, response.statusText);
              reply('Gagal mengambil data');
          }
      })
      .catch((error) => {
          console.error('Terjadi kesalahan:', error);
          reply('Terjadi kesalahan saat memproses permintaan.');
      });
}
break;

    
//✄┈┈┈⟬ *CONVERT* ⟭ • 
case 'sticker': case 's': case 'stickergif': 
        if (isBanned) return m.reply(`*You Have Been Banned*`)
        {
          if (/image/.test(mime)) {
          m.reply(mess.wait)
               let media = await dica.downloadMediaMessage(qmsg)
               let encmedia = await dica.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
               await fs.unlinkSync(encmedia)
           } else if (/video/.test(mime)) {
           m.reply(mess.wait)
               if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
               let media = await dica.downloadMediaMessage(qmsg)
               let encmedia = await dica.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
               await fs.unlinkSync(encmedia)
           } else {
               m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
               }
           }
           break;
           case 'smeme': case 'stikermeme':
                case 'stickermeme': case 'memestiker':
                if (isBanned) return reply(`*You Have Been Banned*`)
                   if (isLimit(m.sender, isPremium, itsMeDica, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan ketik ${prefix}limit untuk mengecek limit`)
                   var atas = text.includes('|') ? text.split('|')[0] ? text.split('|')[0] : text : '-'
                   var bawah = text.includes('|') ? text.split('|')[1] ? text.split('|')[1] : '' : text
                   if (isImage || isQuotedImage) {
                    try {
                     if (args.length < 0) return reply(`Kirim perintah ${command} teks atas|teks bawah`)
               
                     reply(mess.wait)
                     var media = await dica.downloadMediaMessage(qmsg)
                     var media_url = await TelegraPh(media)
                     var meme_url = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${media_url}`
                     await dica.sendImageAsSticker(m.chat, meme_url, m, {
                  packname: global.packname,
                  author: global.author
               })
                     limitAdd(m.sender, limit)
                     fs.unlinkSync(media)
                    } catch (e) {
                     reply(mess.error)
                    }
                   } else if (isQuotedSticker) {
                    try {
                     if (args.length < 0) return reply(`Kirim perintah ${command} teks atas|teks bawah`)
                     
                     reply(mess.wait)
                     var media = await dica.downloadMediaMessage(qmsg)
                     var media_url = await TelegraPh(media)
                     var meme_url = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${media_url}`
                     dica.sendImageAsSticker(m.chat, meme_url, m, {
                  packname: global.packname,
                  author: global.author
               })
                     limitAdd(m.sender, limit)
                     fs.unlinkSync(media)
                    } catch (err) {
                     reply(mess.error)
                    }
                   } else {
                     reply(`Kirim Gambar atau balas Sticker dengan caption ${command} teks atas|teks bawah`)
                   }
                   break
           case 'ttp':
        if (isBanned) return m.reply(`*You Have Been Banned*`)
            if (isLimit(sender, isPremium, itsMeDica, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!q) return reply(`Gunakan dengan cara ${command} text\n\nContoh : ${command} lucu abis`)
            if (q.length > 75) return reply(`Teksnya terlalu panjang`)
            
            //var data = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
            var data = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=${global.lolkey}&text=${encodeURIComponent(q)}`)
            var rand2 = 'image/'+getRandom('.webp')
            fs.writeFileSync(`./${rand2}`, data)
            exec(`webpmux -set exif ./image/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
                dica.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: m })
                limitAdd(sender, limit)
                fs.unlinkSync(`./${rand2}`)
            })
            break
        case 'attp':
        if (isBanned) return m.reply(`*You Have Been Banned*`)
            if (isLimit(sender, isPremium, itsMeDica, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!q) return reply(`Gunakan dengan cara ${command} text\n\nContoh : ${command} lucu abiss`)
            if (q.length > 75) return reply(`Teksnya terlalu panjang`)
            
            //var data = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
            var data = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=${global.lolkey}&text=${encodeURIComponent(q)}`)
            var rand2 = 'image/'+getRandom('.webp')
            fs.writeFileSync(`./${rand2}`, data)
            exec(`webpmux -set exif ./image/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
                dica.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: m })
                limitAdd(sender, limit)
                fs.unlinkSync(`./${rand2}`)
            })
            break
           case 'tourl': {
        if (isBanned) return m.reply(`*You Have Been Banned*`)
        m.reply(mess.wait)
        let media = await dica.downloadAndSaveMediaMessage(qmsg)
        if (/image/.test(mime)) {
            let anu = await TelegraPh(media)
            m.reply(util.format(anu))
        } else if (!/image/.test(mime)) {
            let anu = await UploadFileUgu(media)
            m.reply(util.format(anu))
        }
        await fs.
        unlinkSync(media)
    }
    break;
    case 'toaudio': {
      if (isBanned) return m.reply(`*You Have Been Banned*`)
      if (!text) throw `Example : ${prefix + command} Hallo semua`
      m.reply(mess.wait)
        dica.sendMessage(m.chat, {audio: { url: `https://api.lolhuman.xyz/api/gtts/id?apikey=${lolkey}&text=${text}` }, mimetype: 'audio/mpeg'}, { quoted : m })

    }
    break;
case 'tomp3':
        if (isLimit(sender, isPremium, itsMeDica, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (isVideo || isQuotedVideo) {
                let media = await downloadAndSaveMediaMessage('video', `./image/${sender}.mp4`)
                reply(mess.wait)
                
                let ran = './image/'+getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
                    if (err) return reply('Gagal :V')
                    dica.sendMessage(from, { audio: fs.readFileSync(ran),  mimetype: 'audio/mp4', fileName: `${sender.split("@")[0]}ToMp3` }, { quoted: m })
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                })
            } else {
                reply(`Kirim/reply video dengan caption ${command}`)
            }
            break
case 'toimg': case 'toimage': case 'tovid': case 'tovideo':
if (isBanned) return m.reply(`*You Have Been Banned*`)
            if (isLimit(sender, isPremium, itsMeDica, limitCount, limit)) return reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!isQuotedSticker) return reply(`Reply stikernya!`)
            var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
            var buffer = Buffer.from([])
            for await(const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk])
            }
            var rand1 = 'image/'+getRandom('.webp')
            var rand2 = 'image/'+getRandom('.png')
            fs.writeFileSync(`./${rand1}`, buffer)
            if (isQuotedSticker && m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) {
                exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
                    fs.unlinkSync(`./${rand1}`)
                    if (err) return reply('Error')
                    dica.sendMessage(from, { image: fs.readFileSync(`./${rand2}`) }, { quoted: m })
                    limitAdd(sender, limit)
                    fs.unlinkSync(`./${rand2}`)
                })
            } else {
                reply(mess.wait)
                webp2mp4File(`./${rand1}`).then(async(data) => {
                    fs.unlinkSync(`./${rand1}`)
                    dica.sendMessage(from, { video: await getBuffer(data.data) }, { quoted: m })
                    limitAdd(sender, limit)
                })
            }
            break



//✄┈┈┈⟬ *STORE MENU* ⟭ •
case 'daftarvip': case 'daftarpremium': case 'buyprem': case 'buyvip':
                   var teks = `

Keuntungan Menjadi Member VIP:
- Limit Fitur menjadi Unlimited
- Mendapat potongan harga sebesar 30%
- Bisa mengundang Bot untuk menjaga Grup

Jika berminat,
Cukup bayar Rp100.000 untuk Member VIP Permanen.
Pembayaran bisa melalui Gopay/Pulsa/Dana.
Untuk info lebih lanjut, silahkan bertanya ke kontak admin 👇`
                   reply(teks)
                   await new Promise(resolve => setTimeout(resolve, 200));
                  await dica.sendContact(m.chat, global.owner)
                   break
case 'tambah': {
  if (!q) {
    return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`);
  }
  if (!Number(args[0])) return
  var num_one = text.split(' ')[0];
  var num_two = text.split(' ')[1];
  if (!num_one) {
    return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
  }
  if (!num_two) {
    return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
  }
  var nilai_one = Number(num_one);
  var nilai_two = Number(num_two);
  reply(`Hasilnya adalah *${nilai_one + nilai_two}*`);
}
break;
case 'kurang': {
  if (!q) {
    return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`);
  }
  if (!Number(args[0])) return
  var num_one = text.split(' ')[0];
  var num_two = text.split(' ')[1];
  if (!num_one) {
    return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
  }
  if (!num_two) {
    return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
  }
  var nilai_one = Number(num_one);
  var nilai_two = Number(num_two);
  reply(`Hasilnya adalah *${nilai_one - nilai_two}*`);
}
break;
case 'kali': {
  if (!q) {
    return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`);
  }
  if (!Number(args[0])) return
  var num_one = text.split(' ')[0];
  var num_two = text.split(' ')[1];
  if (!num_one) {
    return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
  }
  if (!num_two) {
    return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
  }
  var nilai_one = Number(num_one);
  var nilai_two = Number(num_two);
  reply(`Hasilnya adalah *${nilai_one * nilai_two}*`);
}
break;
case 'bagi': {
  if (!q) {
    return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`);
  }
	if (!Number(args[0])) return
  var num_one = text.split(' ')[0];
  var num_two = text.split(' ')[1];
  if (!num_one) {
    return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
  }
  if (!num_two) {
    return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
  }
  var nilai_one = Number(num_one);
  var nilai_two = Number(num_two);
  reply(`Hasilnya adalah *${nilai_one / nilai_two}*`);
}
break;


case 'depo':
case 'deposit': {
    if (isBanned) return m.reply('*You Have Been Banned*');
    if (isGroup) throw mess.private;

    const userDepositFilePath = depositPath + 'depo.json';
    const randomRef = crypto.randomBytes(6).toString('hex').toUpperCase();

    let depositData = [];

    if (fs.existsSync(userDepositFilePath)) {
        depositData = JSON.parse(fs.readFileSync(userDepositFilePath));
        if (!Array.isArray(depositData)) {
            depositData = [];
        }
    }

    const newData = {
        ID: randomRef,
        session: 'amount',
        date: new Date().toLocaleDateString('ID', { timeZone: 'Asia/Jakarta' }),
        number: m.sender,
        buyer: pushname,
        payment: 'QRIS',
        minimal: minimal.qris,
        status: 'Pending',
        val: 1,
        data: {
            amount_deposit: ''
        }
    };

    depositData.unshift(newData);

    fs.writeFileSync(userDepositFilePath, JSON.stringify(depositData, null, 2));

    reply(`Oke kak, mau deposit berapa?\n\nMinimal: ${toRupiah(minimal.qris)}.`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    dica.sendMessage(from, { text: 'langsung ketik sajah' });
}
break;

case "caradepo"  : {
      if (isBanned) return m.reply(`*You Have Been Banned*`)
    if (isGroup) throw mess.private
      let caradeponya = `*Berikut Adalah Cara Deposit!.*
Mudah Sajah, Hanya Mengetik .Deposit
kemudian ikuti langkah selanjutnya`
      m.reply(caradeponya)
    }
    break;

case "bukti" : {
  if (isGroup) throw mess.private
  if (isBanned) return m.reply(`You Have Been Banned`)
  
  if (!fs.existsSync(depositPath + m.sender.split("@")[0] + ".json")) return reply("Sepertinya kamu belum melakukan deposit")
  if (!isImage && !isQuotedImage) return reply(`Kirim gambar dengan caption *#bukti* atau tag gambar yang sudah dikirim dengan caption *#bukti*`)
  
  await dica.downloadAndSaveMediaMessage(quoted, `./db/bukti/${m.sender.split('@')[0]}`)
  
  let data_depo = JSON.parse(fs.readFileSync(depositPath + m.sender.split("@")[0] + ".json"))
  let caption_bukti =`*INFO-DEPOSIT*
  
*ID:* ${data_depo.ID}
*Nomer:* ${data_depo.number.split('@')[0]}
*Payment:* ${data_depo.payment}
*Tanggal:* ${data_depo.date.split(' ')[0]}
*Jumlah Deposit:* Rp${toRupiah(data_depo.data.amount_deposit)}

${data_depo.payment === 'QRIS' ? `*Qris Admin:* Rp 100\n*Total Pembayaran:* Rp ${toRupiah(data_depo.data.amount_deposit+100)}` : `*Total Pembayaran:* Rp ${toRupiah(data_depo.data.amount_deposit)}`}
  
_Ada yang deposit nih kak, coba dicek, jika sudah masuk konfirmasi_

langsung ketik ye untuk acc
ketik g untuk reject`

  let bukti_bayar = {
  image: fs.readFileSync(`./db/bukti/${m.sender.split('@')[0]}.jpg`),
  caption: caption_bukti,
  headerType: 5 
  }
  dica.sendMessage(ownerr+"@s.whatsapp.net", bukti_bayar, { quoted: m })
  reply(`Mohon tunggu 5-30menit ya kak\n
Jika lebih dari 30menit saldo tidak masuk\nSegera lapor cs^^`)
  if (fs.existsSync(`./db/bukti/${m.sender.split('@')[0]}.jpg`)) fs.unlinkSync(`./db/bukti/${m.sender.split('@')[0]}.jpg`)
}
break;

  //✄┈┈┈⟬ *LEADERBOARD* ⟭ •
  case 'toplayanan': {
  const fs = require('fs');
  fs.readFile('db/riwayat/orderdigi.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const riwayat = JSON.parse(data);
    const skuCount = {};
    riwayat.forEach((riwayatItem) => {
      const buyerSkuCode = riwayatItem.buyer_sku_code;

      if (!skuCount[buyerSkuCode]) {
        skuCount[buyerSkuCode] = 1;
      } else {
        skuCount[buyerSkuCode]++;
      }
    });
    const sortedSkus = Object.entries(skuCount).sort((a, b) => b[1] - a[1]);
    let top = '*10 DATA*\n╔━━━━『 *TOP LAYANAN* 』━━━•◇\n';

    for (let i = 0; i < 10 && i < sortedSkus.length; i++) {
      const [buyerSkuCode, count] = sortedSkus[i];
      const riwayatItem = riwayat.find((item) => item.buyer_sku_code === buyerSkuCode);
      const productName = riwayatItem.product_name;
      top += `┃${i + 1}• ${productName}\n┃Jumlah Pesanan: ${count} Pesanan\n┃\n`;
    }

    top += '╚━━━━━━━━•◇';
    reply(top);
  });
}
break;
  case 'toporder': case 'topbelanja': {
    const balanceData = JSON.parse(fs.readFileSync("./src/balance.json"));
    balanceData.sort((a, b) => (a.total_lessblnc < b.total_lessblnc) ? 1 : -1);
    let top = "*TOP ORDER *\n\n";
    let arrTop = [];
    var total = 10;
    if (balanceData.length < 10) total = balanceData.length;
    for (let i = 0; i < total; i++) {
      top += `${i + 1}. @${balanceData[i].id.split("@")[0]}\n=> Total Order : Rp${toRupiah(balanceData[i].total_lessblnc)}\n\n`;
      arrTop.push(balanceData[i].id);
    }
    mentions(top.trim(), arrTop, true);
  }
  break;
  case 'topdeposit': case 'topdepo': {
    const balanceData = JSON.parse(fs.readFileSync("./src/balance.json"));
    balanceData.sort((a, b) => (a.total_addblnc < b.total_addblnc) ? 1 : -1);
    let top = "*TOP DEPOSIT *\n\n";
    let arrTop = [];
    var total = 10;
    if (balanceData.length < 10) total = balanceData.length;
    for (let i = 0; i < total; i++) {
      top += `${i + 1}. @${balanceData[i].id.split("@")[0]}\n=> Total Deposit : Rp${toRupiah(balanceData[i].total_addblnc)}\n\n`;
      arrTop.push(balanceData[i].id);
    }
    mentions(top.trim(), arrTop, true);
  }
  break;
  case 'topbalance': case 'topsaldo':{
    const balanceData = JSON.parse(fs.readFileSync("./src/balance.json"));
    balanceData.sort((a, b) => (a.balance < b.balance) ? 1 : -1);
    let top = "*TOP BALANCE *\n\n";
    let arrTop = [];
    var total = 10;
    if (balanceData.length < 10) total = balanceData.length;
    for (let i = 0; i < total; i++) {
      top += `${i + 1}. @${balanceData[i].id.split("@")[0]}\n=> Saldo : Rp${toRupiah(balanceData[i].balance)}\n\n`;
      arrTop.push(balanceData[i].id);
    }
    mentions(top.trim(), arrTop, true);
  }
  break;              
  
  
  //✄┈┈┈⟬ *OWNER MENU* ⟭ •
   
    
	//━━━━━━━━━━━━━━━[ MAIN MENU ]━━━━━━━━━━━━━━━━━//              
  case 'saldo':
case 'me': 
case 'infome': {
  let riwayatData = [];
  const riwayatFilePath = riwayatPath + `buyer/${sender.split('@')[0]}.json`;

  if (fs.existsSync(riwayatFilePath)) {
    riwayatData = JSON.parse(fs.readFileSync(riwayatFilePath));
  }

  const number = '6281238996370@s.whatsapp.net';
  const dicaa = m.sender === number;
  const userBalance = balanceDB.find(data => data.id === `${m.sender.split('@')[0]}@s.whatsapp.net`);
  let paan;

  if (userBalance) {
    paan = `「 *USER-INFO* 」
*Nama:* @${m.sender.split('@')[0]}
*Nomer :* ${m.sender.split('@')[0]}
*Level :* ${itsMeDica ? 'Dev' : dicaa ? 'Co Design' : isPATNER ? 'Patner' : isVVIP ? 'VVIP' : isVIP ? 'VIP' : 'User'}
*Limit Harian :* ${itsMeDica ? 'Infinity' : isPremium ? 'Unlimited' : getLimit(m.sender, limitCount, limit)}

*Saldo :* Rp${toRupiah(blnc.checkBalance(m.sender, balanceDB))}
*Total Order:* Rp${toRupiah(userBalance.total_lessblnc)}
*Total Deposit:* Rp${toRupiah(userBalance.total_addblnc)}
*Total Pesanan:* ${riwayatData.length}`;
  } else {
    paan = `「 *USER-INFO* 」
*Nama:* @${m.sender.split('@')[0]}
*Nomer :* ${m.sender.split('@')[0]}
*Level :* ${itsMeDica ? 'Dev' : isVVIP ? 'VVIP' : isVIP ? 'VIP' : 'User'}
*Limit Harian :* ${itsMeDica ? 'Infinity' : isPremium ? 'Unlimited' : getLimit(m.sender, limitCount, limit)}

*Saldo :* Rp${toRupiah(blnc.checkBalance(m.sender, balanceDB))}
*Total Order:* Rp0
*Total Deposit:* Rp0
*Total Pesanan:* 0`;
  }

  dica.sendMessage(from, { text: paan, mentions: [m.sender] });
}
break;

  case 'infouser': {
  	if (!Input) return reply('Tag usernya')
  const number = '6281238996370@s.whatsapp.net';
  const isVvip = checkVIPUser(Input, uvvip)
  const isVip = checkVIPUser(Input, uvip)
  const isPATNER = checkVIPUser(Input, upatner)
  const isPrem = checkVIPUser(Input, uprem)
  const dicaa = Input === number;
  const userBalance = balanceDB.find(data => data.id === `${Input}`);
  let paan;
  
  if (userBalance) {
    paan = `「 *USER-INFO* 」
*Nama:* @${Input.split('@')[0]}
*Nomer :* ${Input.split('@')[0]}
*Level :* ${dicaa ? 'Co Design' : isPATNER ? 'Patner' : isVvip ? 'VVIP' : isVip ? 'VIP' : 'User'}
*Limit Harian :* ${dicaa ? 'Infinity' : isPrem ? 'Unlimited' : getLimit(m.sender, limitCount, limit)}

*Saldo :* Rp${toRupiah(blnc.checkBalance(Input, balanceDB))}
*Total Order:* Rp${toRupiah(userBalance.total_lessblnc)}
*Total Deposit:* Rp${toRupiah(userBalance.total_addblnc)}`;
  } else {
    paan = `「 *USER-INFO* 」
*Nama:* @${Input.split('@')[0]}
*Nomer :* ${Input.split('@')[0]}
*Level :* ${isPATNER ? 'Patner' : isVvip ? 'VVIP' : isVip ? 'VIP' : 'User'}
*Limit Harian :* ${dicaa ? 'Infinity' : isPrem ? 'Unlimited' : getLimit(Input, limitCount, limit)}

*Saldo :* Rp${toRupiah(blnc.checkBalance(Input, balanceDB))}
*Total Order:* Rp0
*Total Deposit:* Rp0`;
  }
  
  dica.sendMessage(from, { text: paan, mentions: [Input] });
  }
  break;
      case 'simi': case 'kilaa': case 'kila':{
if (!text) return reply(`Apa?`)
  if (isLimit(m.sender, isPremium, itsMeDica, limitCount, limit)) return reply(`Limit kamu sudah habis. Silakan ketik ${prefix}limit untuk mengecek limit.`)
  
  limitAdd(m.sender, limit)
  const modifiedText = text.replace(/simi/gi, 'kilaa')
  fetch(`https://api.lolhuman.xyz/api/simi?apikey=${global.lolkey}&text=${encodeURIComponent(modifiedText)}&badword=true`)
    .then(res => res.json())
    .then(data => {
      const result = data.result
      const modifiedResult = result.replace(/simi/gi, 'kilaa')
      reply(modifiedResult)
    })
    .catch(err => {
      console.error(err)
      reply(`Terjadi kesalahan saat meminta respon simi. Silakan coba lagi nanti.`)
    })
  }
  break
  case 'sewa': case 'sewabot':
                   var teks = `Jika kamu ingin memasukkan Bot ke dalam Grup, kamu cukup membayar Rp5.000 untuk 1 Minggu, Rp10.000 untuk 1 Bulan. Untuk Sewa tidak ada yang Permanent. Jika berminat silahkan chat Owner Bot, ketik ${prefix}owner\n\nPembayaran bisa melalui Gopay/Pulsa/Dana`
                   reply(teks)
                   break
case 'rules': 
reply('Gaada 😋')
break;
case 'runtime':
let respon_nya = `Runtime : 8bulan, ${runtime(process.uptime())}`
reply(respon_nya)
break 
  //━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━━━//      
  case "help" : {
	let anu = `Fitur ${command} tidak tersedia. Mungkin maksud Anda ${prefix}menu`
reply(anu);          
}              
break;              

case "req": {
  reply('_Request Anda telah diteruskan ke owner. Terima kasih atas Sarannya!_')
  const teks = `Ada Permintaan Request nih kak Dari ${pushname}
  
  ${text}`
  dica.sendMessage(ownerr+"@s.whatsapp.net",{text: `${teks}`}, {quoted: m})
}
break;
 

  case "ownermenu": {
  if (isBanned) return m.reply(`*You Have Been Banned*`);
  reply(global.mowner)
  }
  break        
  case "convert": {
  if (isBanned) return m.reply(`*You Have Been Banned*`);
  reply(global.convert)
  }
  break        
  case "downloader": {
  if (isBanned) return m.reply(`*You Have Been Banned*`);
  reply(global.mdownl)
  }
  break        
  case "menugroup": {
  if (isBanned) return m.reply(`*You Have Been Banned*`);
  reply(global.mgroup)
  }
  break        
  case "menupremium": {
  if (isBanned) return m.reply(`*You Have Been Banned*`);
  reply(global.mprem)
  }
  break        
  case "menustalk": {
  if (isBanned) return m.reply(`*You Have Been Banned*`);
  reply(global.mstalk)
  }
  break        
  case "calcml": {
  if (isBanned) return m.reply(`*You Have Been Banned*`);
  reply(global.mcalc)
  }
  break        
  case "rate": {
  if (isBanned) return m.reply(`*You Have Been Banned*`);
  reply(global.mrate)
  }
  break        
  case "storemenu": {
  if (isBanned) return m.reply(`*You Have Been Banned*`);
  reply(global.mstore)
  }
  break        
case "mainmenu": {
  if (isBanned) return m.reply(`*You Have Been Banned*`);
  reply(global.mmain)
  }
  break        
  case "leaderboard": {
  if (isBanned) return m.reply(`*You Have Been Banned*`);
  reply(global.leader)
  }
  break
  case "allmenu": {
  if (isBanned) return m.reply(`*You Have Been Banned*`);
  reply(global.mfun)
  }
  break
case "menu": {
  if (isBanned) return m.reply(`*You Have Been Banned*`);
  // if (!itsMeDica) throw mess.owner
  //if (isGroup) return m.reply('Untuk akses Fitur Topup Mandiri, silahkan gunakan di Private Chat Bot!')
  
  const saldo = toRupiah(blnc.checkBalance(sender, balanceDB));

  const menuText = `*${ucapanWaktu} Kak ${pushname ? pushname : "Anon"}.*
Berikut adalah daftar menu yang tersedia.


===============================
*DETAIL INFORMASI AKUN*

*Nama :* ${m.pushName} 
*Level :* ${itsMeDica ? 'Dev': isPATNER ? 'Patner' : isVVIP ? 'VVIP' : isVIP ? 'VIP' : 'User'}
*Saldo :* Rp ${saldo}
*UID     :* ${sender.replace("@s.whatsapp.net", "")}
===============================
${global.msimple}


_*${packname} ${Corporat}`;

dica.sendText(m.chat, menuText, m);
}
break;
 case 'listvip': {
  
  let sortedsilver = uvip.sort((a, b) => {
    if (a.expired === 'PERMANENT') return -1;
    if (b.expired === 'PERMANENT') return 1;
    if (a.expired === b.expired) return 0;
    return a.expired > b.expired ? 1 : -1;
  }).sort((a, b) => {
    if (a.expired === 'PERMANENT' || b.expired === 'PERMANENT') return 0;
    if (a.expired < b.expired) return 1;
    if (a.expired > b.expired) return -1;
    return 0;
  });
  let txt = `List VIP Jumlah: ${uvip.length}\n\n`;
  let men = [];
  for (let i of sortedsilver) {
    men.push(i.id);
    txt += `*ID:* @${i.id.split("@")[0]}\n`;
    if (i.expired === 'PERMANENT') {
      txt += `*Kedaluwarsa:* PERMANENT\n\n`;
    } else {
      let remainingTime = i.expired - Date.now();
      if (isNaN(remainingTime)) {
        txt += `*Kedaluwarsa:* PERMANENT\n\n`;
      } else if (remainingTime <= 0) {
        txt += `*Kedaluwarsa:* Sudah habis\n\n`;
      } else {
        let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        txt += `*Kedaluwarsa:* ${days} hari, ${hours} jam, ${minutes} menit lagi\n\n`;
      }
    }
  }
  mentions(txt, men, true);
}
  break;
  case 'listvvip':{
  
  let sortedGold = uvvip.sort((a, b) => {
    if (a.expired === 'PERMANENT') return -1;
    if (b.expired === 'PERMANENT') return 1;
    if (a.expired === b.expired) return 0;
    return a.expired > b.expired ? 1 : -1;
  }).sort((a, b) => {
    if (a.expired === 'PERMANENT' || b.expired === 'PERMANENT') return 0;
    if (a.expired < b.expired) return 1;
    if (a.expired > b.expired) return -1;
    return 0;
  });
  let txt = `List VVIP Jumlah: ${uvvip.length}\n\n`;
  let men = [];
  for (let i of sortedGold) {
    men.push(i.id);
    txt += `*ID:* @${i.id.split("@")[0]}\n`;
    if (i.expired === 'PERMANENT') {
      txt += `*Kedaluwarsa:* PERMANENT\n\n`;
    } else {
      let remainingTime = i.expired - Date.now();
      if (isNaN(remainingTime)) {
        txt += `*Kedaluwarsa:* PERMANENT\n\n`;
      } else if (remainingTime <= 0) {
        txt += `*Kedaluwarsa:* Sudah habis\n\n`;
      } else {
        let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        txt += `*Kedaluwarsa:* ${days} hari, ${hours} jam, ${minutes} menit lagi\n\n`;
      }
    }
  }
  mentions(txt, men, true);
}
  break;
 
  case 'cektransaksi':
  if (fs.existsSync(riwayatPath + `buyer/${sender.split('@')[0]}.json`)) {
    const riwayatData = JSON.parse(fs.readFileSync(riwayatPath + `buyer/${sender.split('@')[0]}.json`));

    if (text) {
      const filteredData = riwayatData.filter(item => item.ref_id === text);
      if (filteredData.length === 0) return reply(`Data dengan ref_id ${text} tidak ditemukan 🥲`);

      reply(`╔━━━━[ ID TRX: ${text} ]━━━•
┃• Buyer: ${filteredData[0].buyer}
┃• ID Layanan: ${filteredData[0].buyer_sku_code}
┃• Target: ${filteredData[0].customer_no}
┃• Kategori: ${filteredData[0].kategori}
┃• Brand: ${filteredData[0].brand}
┃• Layanan: ${filteredData[0].product_name}
┃• Harga: Rp${toRupiah(filteredData[0].biaya)}   
┃• Status: ${filteredData[0].status}
┃• Waktu Pemesanan: ${filteredData[0].date} | ${filteredData[0].date}
${filteredData[0].sn ? `╚══════✪[ SN ]✪══════\n${filteredData[0].sn.split('/').join('\n')}\n✪═════════════════✪`  : '╚━━━━━━━━━━━━━•◇'}`);
    } else {
      var arr_rows = [];
      for (let x of riwayatData) {
        arr_rows.push({
          refid: x.ref_id,
          buyer: x.buyer_sku_code
        });
      }
      arr_rows.reverse();

      var infoMsg = `*Riwayat order 20 data terbaru*\nTotal Order: ${riwayatData.length}\n\n╔━━━━『 _*${m.pushName}:* ${itsMeDica ? 'Dev': isPATNER ? 'Patner' : isVVIP ? 'VVIP' : isVIP ? 'VIP' : 'User'}_ 』━━━•◇\n`;
      var startIndex = Math.max(0, arr_rows.length - 20);
      for (let i = arr_rows.length - 1; i >= startIndex; i--) {
        infoMsg += `┃• ${arr_rows.length - i}. ${arr_rows[i].refid}: - (${arr_rows[i].buyer}) \n`;
      }
      infoMsg += `╚━━━━━━━━•◇`;

      dica.sendMessage(from, { text: infoMsg });
    }
  } else {
    reply(`Belum ada Riwayat yang terdaftar 🥲`);
  }
  break;
  
case 'sendsesi':{
createZipArchive();
}
break

// END
              
}
} catch (err) {
m.reply(util.format(err));
}
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
