const fs = require('fs');
const chalk = require('chalk');
const toMs = require("ms");
const ms = require('parse-ms')
const moment = require('moment-timezone')
let opengc = JSON.parse(fs.readFileSync('./src/opengc.json'));
let afks = JSON.parse(fs.readFileSync('./src/afg.json'));
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
require('../setting/config')
const afkg = require("../lib/afk");
const { addResponList, 
  delResponList, 
  isAlreadyResponList, 
  isAlreadyResponListGroup, 
  sendResponList, 
  updateResponList, 
  getDataResponList
} = require('../src/function_list')
const {
  isSetClose,
  addSetClose,
  removeSetClose,
  changeSetClose,
  getTextSetClose,
  isSetLeft,
  addSetLeft,
  removeSetLeft,
  changeSetLeft,
  getTextSetLeft,
  isSetOpen,
  addSetOpen,
  removeSetOpen,
  changeSetOpen,
  getTextSetOpen,
  isSetWelcome,
  addSetWelcome,
  removeSetWelcome,
  changeSetWelcome,
  getTextSetWelcome
} = require("../lib/store")
const { 
  isSetBot, 
  addSetBot, 
  removeSetBot, 
  changeSetBot, 
   } = require('../lib/setbot');
   const {
    getBuffer,
    TelegraPh,
  } = require('../lib/simple')
const fiturGoup = async (prefix, command, m, from, sender, text, dica, pushname, groupMetadata, participants, isBotAdmins, isAdmins, itsMeDica, reply, args, store, botNumber, db_respon_list, isImage, isQuotedImage, groupName, tanggal, time2, Input, mentions, mentionUser, sleep, quoted, _welcome, _left, isWelcome, isLeft, isAntiLink, antilink, isAntiLink2, antilink2, set_welcome_db, set_left_db, antiwame, isAntiWame, isAntiWame2, antiwame2, set_open, set_close, set_bot, isSewa, _sewa, sewa ) => {
  const isAfkOn = afkg.checkAfkUser(sender, afks)
  _sewa.expiredCheck(dica, sewa)   
  //MULAI AFK
if (m.isGroup) {
  for (let x of mentionUser) {
  if (afkg.checkAfkUser(x, afks)) {
  const getId = afkg.getAfkId(x, afks)
  const getReason = afkg.getAfkReason(getId, afks)
  const getTime = afkg.getAfkTime(getId, afks)
  //if (dica.message.extendedTextMessage != undefined){ 
  try {
  var afpk = await dica.profilePictureUrl(mentionUser[0], 'image')
  } catch {
  var afpk = 'https://i.ibb.co/Twkhgy9/images-4.jpg'
  }
  var thumeb = await getBuffer(afpk)
  const cptl = `*ꞌꞋ ࣪𓂃 ִֶָ Admin Afk ִֶָ 𓂃 ࣪ꞌꞋ*
  
O  Saat Ini @${mentionUser[0].split("@")[0]} Sedang Offline/Afk
O *Alasan*  : ${getReason}
O *Afk Sejak* : ${getTime}`
    mentions(cptl, [mentionUser], true)
    //sendMess(x, `Assalamualaikum\n\n_Ada Yg Mencari Kamu Saat Kamu Offline/Afk_\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nDi Group : ${groupName}\nPesan : ${chata}`)
    }}
    
    //KEMBALI DARI AFK
    if (afkg.checkAfkUser(sender, afks)) {
    const getTime = afkg.getAfkTime(sender, afks)
    const getReason = afkg.getAfkReason(sender, afks)
    const ittung = ms(await Date.now() - getTime)
    try {
    var afpkk = await dica.profilePictureUrl(mentionUser[0], 'image')
    } catch {
    var afpkk = 'https://i.ibb.co/Twkhgy9/images-4.jpg'
    }
    var thumbw = await getBuffer(afpkk)
    const pep = `*${pushname}* Telah Kembali Dari Afknya!`
    reply(pep)
    afks.splice(afkg.getAfkPosition(sender, afks), 1)
    fs.writeFileSync('./src/afkg.json', JSON.stringify(afks))
    }
    }
  setInterval(() => {
    for (let i of Object.values(opengc)) {
        if (Date.now() >= i.time) {
            dica.groupSettingUpdate(i.id, "not_announcement")
            .then((res) =>
            dica.sendMessage(i.id, { text: `Waktu Jeda Telah Selesai` }))
            .catch((err) =>
            dica.sendMessage(i.id, { text: 'Error' }))
            delete opengc[i.id]
            fs.writeFileSync('./src/opengc.json', JSON.stringify(opengc))
        }
    }
}, 1000)
            
            switch(command){
              
              case 'checksewa':
case 'ceksewa':
  if (!m.isGroup) return reply(mess.group)
  if (!isSewa) return reply(`Bot tidak disewa pada grup ini!`)
  var expire = _sewa.getSewaExpired(from, sewa)
  var remainingTime = expire - Date.now()
  var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
  var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
  var remainingTimeString = `Sewa grup ini akan berakhir dalam 
*${days}* hari, *${hours}* jam, *${minutes}* menit lagi.`
  reply(remainingTimeString)
  break;
              case 'jeda': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                      if (!args[0]) return reply(`kirim ${command} waktu\nContoh: ${command} 30m\n\nlist waktu:\ns = detik\nm = menit\nh = jam\nd = hari`)
                      opengc[from] = { id: from, time: Date.now() + toMs(args[0]) };
                      fs.writeFileSync('./src/opengc.json', JSON.stringify(opengc))
                      dica.groupSettingUpdate(from, "announcement")
                      .then((res) => reply(`Jeda Dulu Ya Group Akan Di Buka Dalam ${args[0]} Lagi`))
                      .catch((err) => reply('Error'))
                      }
                      break
          case 'setbot':
            if (!m.isGroup) return reply(mess.group)
      if (!isAdmins) return reply(mess.admin)
      if (!isBotAdmins) return reply(mess.botAdmin)
            if (!text) return reply(`*Ini Hanya Contoh*\n${prefix}setbot Halo Silahkan Ketik #menu Untuk Melihat List Di Group Ini`)
            if (isSetBot(from, set_bot)) return reply(`Sudah Ada Setbot Sebelumnya`)
            //addCountCmd(`${prefix}setbot`, sender, _cmd)
            addSetBot(text, from, set_bot)
            reply(`Sukses Respon Bot!`)
            break
        case 'changebot': case 'updatesetbot': case 'upsetbot':
          if (!m.isGroup) return reply(mess.group)
      if (!isAdmins) return reply(mess.admin)
      if (!isBotAdmins) return reply(mess.botAdmin)
            if (!text) return reply(`*Ini Hanya Contoh*\n${prefix}updatesetbot Hai Kak Silahkan Ketik #menu Untuk Melihat List`)
            
            if (isSetBot(from, set_bot)) {
                changeSetBot(text, from, set_bot)
                reply(`Sukses Update Respon Bot`)
            } else {
                addSetBot(text, from, set_bot)
                reply(`Sukses Update Respon Bot`)
            }
            break
        case 'delsetbot': case 'delsetb':
          if (!m.isGroup) return reply(mess.group)
      if (!isAdmins) return reply(mess.admin)
      if (!isBotAdmins) return reply(mess.botAdmin)
            if (!isSetBot(from, set_bot)) return reply(`Belum ada setbot di sini..`)
            
            removeSetBot(from, set_bot)
            reply(`Sukses Delete Respon Bot`)
            break
              case "hidetag": case "h": {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply(mess.admin)
                dica.sendMessage(m.chat, { text : m.quoted ? m.quoted.text :text ? text : '' , mentions: participants.map(a => a.id)}, { quoted: m })
                }
                break; 
            case 'afk': 
            if (!m.isGroup) return reply(mess.group)
  if (isAfkOn) return reply('Kalo Mau Afk Jangan Nimbrung di sini')
  const reason = text ? text : '*No Pesan*'
  afkg.addAfkUser(sender, jam, reason, afks)
  const aluty = `*ꞌꞋ ࣪𓂃 ִֶָ User Afk ִֶָ 𓂃 ࣪ꞌꞋ*

${pushname} Sekarang Offline/Afk
O *Alasan*  : ${reason}
O *Mulay Afk* : ${jam}`
  //dica.sendMessage(from, aluty, text)
  dica.sendMessage(from, { text: aluty, contextInfo:{ externalAdReply:{ title: `MODE AFK ON`, body: "Saat Ini Kamu Afk", thumbnail: fs.readFileSync('./image/afk.jpg'), sourceUrl: `https://wa.me/${sender}`, mediaUrl: '', renderLargerThumbnail: true, showAdAttribution: false, mediaType: 1 }}}, { quoted: m });
  break
            case 'open': case 'buka':
              if (!m.isGroup) return reply(mess.group)
     if (!isAdmins) return reply(mess.admin)
     if (!isBotAdmins) return reply(mess.botAdmin)
           dica.groupSettingUpdate(from, 'not_announcement')
           
           if (isSetOpen(from, set_open)) {
             var get_teks_open = await getTextSetOpen(from, set_open)
             var replace_pesan = (get_teks_open.replace(/@user/gi, `@${sender.split("@")[0]}`))

           mentions(replace_pesan, [sender], true)
         } else {
           let opengc = `O━• *Group Open* •━O

📜 *Group Telah Di Buka Oleh Admin* @${sender.split("@")[0]}

\`\`\`🎊 Group Open
📆 ${tanggal}
⏰ ${time2}\`\`\`

━O━O━••••••••••••━O━O━`
           mentions(opengc, [sender], true)
         }
     break
       case 'close': case 'tutup':
        if (!m.isGroup) return reply(mess.group)
     if (!isAdmins) return reply(mess.admin)
     if (!isBotAdmins) return reply(mess.botAdmin)
       dica.groupSettingUpdate(from, 'announcement')
      if (isSetClose(from, set_close)) {
         var get_teks_close = await getTextSetClose(from, set_close)
         var replace_pesan = (get_teks_close.replace(/@user/gi, `@${sender.split("@")[0]}`))

       mentions(replace_pesan, [sender], true)
     } else {
       let closegc = `O━• *Group Close* •━O

📜 *Group Telah Di Tutup Oleh Admin* @${sender.split("@")[0]}

\`\`\`🎊 Group Close
📆 ${tanggal}
⏰ ${time2}\`\`\`

━O━O━••••••••••••━O━O━`
       mentions(closegc, [sender], true)
     }
       break
          
case 'antiwame': {
  if (!m.isGroup) return reply(mess.group)
  if (!isAdmins) return reply('Fitur Khusus admin!')
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (args[0] === "on") {
      if (isAntiWame) return reply(`Udah aktif`)
      antiwame.push(m.chat)
      fs.writeFileSync('./src/antiwame.json', JSON.stringify(antiwame, null, 2))
      reply('Successfully Activate Antiwame In This Group')
  }
  else if (args[0] === "off") {
      if (!isAntiWame) return reply(`Udah nonaktif`)
      let anu = antiwame.indexOf(m.chat)
      antiwame.splice(anu, 1)
      fs.writeFileSync('./src/antiwame.json', JSON.stringify(antiwame, null, 2))
      reply('Successfully Disabling Antiwame In This Group')
  }
  else {
      reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
  }
}
break
case 'antiwame2': {
  if (!m.isGroup) return reply(mess.group)
  if (!isAdmins) return reply('Fitur Khusus admin!')
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (args[0] === "on") {
      if (isAntiWame2) return reply(`Udah aktif`)
      antiwame2.push(m.chat)
      fs.writeFileSync('./src/antiwame2.json', JSON.stringify(antiwame2, null, 2))
      reply('Successfully Activate antiwame2 In This Group')
  }
  else if (args[0] === "off") {
      if (!isAntiWame2) return reply(`Udah nonaktif`)
      let anu = antiwame2.indexOf(m.chat)
      antiwame2.splice(anu, 1)
      fs.writeFileSync('./src/antiwame2.json', JSON.stringify(antiwame2, null, 2))
      reply('Successfully Disabling antiwame2 In This Group')
  }
  else {
      reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
  }
}
break
            
case 'setleft': {
  if (!m.isGroup) return reply(mess.group)
  if (!itsMeDica && !isAdmins) return reply('Fitur Khusus owner!')
  if (!text) return reply(`Kirim perintah: ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
  if (isSetLeft(m.chat, set_left_db)) return reply(`Set left already active`)
  addSetLeft(text, m.chat, set_left_db)
  reply(`Successfully set left!`)
}
break
case 'changeleft': {
  if (!m.isGroup) return reply(mess.group)
  if (!itsMeDica && !isAdmins) return reply('Fitur Khusus owner!')
  if (!text) return reply(`Kirim perintah: ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
  if (isSetLeft(m.chat, set_left_db)) {
      changeSetLeft(text, m.chat, set_left_db)
      reply(`Sukses change set left teks!`)
  }
  else {
      addSetLeft(text, m.chat, set_left_db)
      reply(`Sukses change set left teks!`)
  }
}
break
case 'delsetleft': {
  if (!m.isGroup) return reply(mess.group)
  if (!itsMeDica && !isAdmins) return reply('Fitur Khusus owner!')
  if (!isSetLeft(m.chat, set_left_db)) return reply(`Belum ada set left di sini..`)
  removeSetLeft(m.chat, set_left_db)
  reply(`Sukses delete set left`)
}
break
              case 'delsetwelcome': {
                if (!m.isGroup) return reply(mess.group)
                if (!itsMeDica && !isAdmins) return reply('Fitur Khusus owner!')
                if (!isSetWelcome(m.chat, set_welcome_db)) return reply(`Belum ada set welcome di sini..`)
                removeSetWelcome(m.chat, set_welcome_db)
                reply(`Sukses delete set welcome`)
              }
              break
              case 'setwelcome': {
                if (!m.isGroup) return reply(mess.group)
                if (!itsMeDica && !isAdmins) return reply('Fitur Khusus owner!')
                if (!text) return reply(`Kirim perintah: ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @user, Selamat datang di @group`)
                if (isSetWelcome(m.chat, set_welcome_db)) return reply(`Set welcome already active`)
                addSetWelcome(text, m.chat, set_welcome_db)
                reply(`Successfully set welcome!`)
              }
              break
              case 'changewelcome': {
                if (!m.isGroup) return reply(mess.group)
                if (!itsMeDica && !isAdmins) return reply('Fitur Khusus owner!')
                if (!text) return reply(`Kirim perintah: ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @user, Selamat datang di @group`)
                if (isSetWelcome(m.chat, set_welcome_db)) {
                    changeSetWelcome(text, m.chat, set_welcome_db)
                    reply(`Sukses change set welcome teks!`)
                }
                else {
                    addSetWelcome(text, m.chat, set_welcome_db)
                    reply(`Sukses change set welcome teks!`)
                }
              }
              break
case 'antilink': {
  if (!m.isGroup) return reply('Fitur Khusus Group!')
  if (!isAdmins && !itsMeDica) return reply('Fitur Khusus admin!')
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (args[0] === "on") {
      if (isAntiLink) return reply(`Udah aktif`)
      antilink.push(m.chat)
      fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink, null, 2))
      reply('Successfully Activate Antilink In This Group')
  }
  else if (args[0] === "off") {
      if (!isAntiLink) return reply(`Udah nonaktif`)
      let anu = antilink.indexOf(m.chat)
      antilink.splice(anu, 1)
      fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink, null, 2))
      reply('Successfully Disabling Antilink In This Group')
  }
  else {
      reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
  }

}
break
case 'antilink2': {
  if (!m.isGroup) return reply('Fitur Khusus Group!')
  if (!isAdmins && !itsMeDica) return reply('Fitur Khusus admin!')
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (args[0] === "on") {
      if (isAntiLink2) return reply(`Udah aktif`)
      antilink2.push(m.chat)
      fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink2, null, 2))
      reply('Successfully Activate Antilink2 In This Group')
  }
  else if (args[0] === "off") {
      if (!isAntiLink2) return reply(`Udah nonaktif`)
      let anu = antilink2.indexOf(m.chat)
      antilink2.splice(anu, 1)
      fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink2, null, 2))
      reply('Successfully Disabling Antilink2 In This Group')
  }
  else {
      reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
  }

}
break
              case 'welcome': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply('Fitur Khusus admin!')
                if (args[0] === "on") {
                    if (isWelcome) return reply(`Udah on`)
                    _welcome.push(m.chat)
                    fs.writeFileSync('./src/welcome.json', JSON.stringify(_welcome, null, 2))
                    reply('Sukses mengaktifkan welcome di grup ini')
                }
                else if (args[0] === "off") {
                    if (!isWelcome) return reply(`Udah off`)
                    let anu = _welcome.indexOf(m.chat)
                    _welcome.splice(anu, 1)
                    fs.writeFileSync('./src/welcome.json', JSON.stringify(_welcome, null, 2))
                    reply('Sukses menonaktifkan welcome di grup ini')
                }
                else {
                    reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
                }
              }
              break
              case 'left':
              case 'goodbye': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply('Fitur Khusus admin!')
                if (args[0] === "on") {
                    if (isLeft) return reply(`Udah on`)
                    _left.push(m.chat)
                    fs.writeFileSync('./src/left.json', JSON.stringify(_left, null, 2))
                    reply('Sukses mengaktifkan goodbye di grup ini')
                }
                else if (args[0] === "off") {
                    if (!isLeft) return reply(`Udah off`)
                    let anu = _left.indexOf(m.chat)
                    _left.splice(anu, 1)
                    fs.writeFileSync('./src/welcome.json', JSON.stringify(_left, null, 2))
                    reply('Sukses menonaktifkan goodbye di grup ini')
                }
                else {
                    reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
                }
              }
              break
              case 'delete': case 'del': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !itsMeDica) return reply(mess.admin)
                if (!m.quoted) return 
                dica.sendMessage(m.chat, { delete: { remoteJid: m.chat, Input: true, id: m.quoted.id, participant: m.quoted.sender } })
                }
                break;
              case 'add': {
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
                await dica.groupParticipantsUpdate(m.chat, users, 'add').then((res) => m.reply("Done")).catch((err) => m.reply("Ga bisa uy"))
          }
              break;
              case 'kick':
                if (!m.isGroup) return reply(mess.group)
                  if (!isBotAdmins) return reply(mess.botAdmin)
                  if (!isAdmins) return reply(mess.admin)
                  
                        var number;
                  if (mentionUser.length !== 0) {
                            number = mentionUser[0]
                            dica.groupParticipantsUpdate(from, [number], "remove")
                            reply('Succes')
                          } else if (m.isQuotedMsg) {
                            number = m.quotedMsg.sender
                            dica.groupParticipantsUpdate(from, [number], "remove")
                            reply('Succes')
                        } else {
                            reply(`Tag atau balas pesan orang yang ingin dikeluarkan dari grup`)
                        }              
                break;
              case 'setdesc': case 'setdescription':
                if (!m.isGroup) return reply('Fitur Khusus Group!')
                                if (!isAdmins && !itsMeDica) return reply('Fitur Khusus admin!')
                                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!text) return reply(`Kirim perintah ${command} teks`)
                await dica.groupUpdateDescription(from, text)
                .then( res => {
                reply(`Sukses`)
                }).catch(() => reply(mess.error))
                break
              case 'setnamegrup': case 'setnamegc':
                if (!m.isGroup) return reply(mess.group)
                                if (!isAdmins && !itsMeDica) return reply('Fitur Khusus admin!')
                                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!text) return reply(`Kirim perintah #${command} teks`)
                await dica.groupUpdateSubject(from, text)
                .then( res => {
                reply(`Sukses`)
                }).catch(() => reply(mess.error))
                break
              case 'setppgrup': case 'setppgc':
                if (!m.isGroup) return reply(mess.group)
                                if (!isAdmins && !itsMeDica) return reply('Fitur Khusus admin!')
                                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isImage && !isQuotedImage) return reply(`Kirim gambar dengan caption *#setppgc* atau reply gambar yang sudah dikirim dengan caption *#setppgc*`)
                var media = await dica.downloadAndSaveMediaMessage(quoted,`./image/${m.sender.split('@')[0]}`)
                //var media = `./image/${m.sender.split('@')[0]}.jpg`
                await dica.updateProfilePicture(from, { url: media })
                await sleep(2000)
                reply('Sukses mengganti foto profile group')
                fs.unlinkSync(media)
                break
              case 'revoke':
                if (!m.isGroup) return reply(mess.group)
                                if (!isAdmins && !itsMeDica) return reply(mess.admin)
                await dica.groupRevokeInvite(from)
                .then( res => {
                reply(`Sukses menyetel tautan undangan grup ini`)
                }).catch(() => reply(mess.error))
                break
              case 'leave':
                if (!m.isGroup) return reply(mess.group)
                reply('bye')
                sleep(2000)
                dica.groupLeave(from)
                break
              case 'promote':
                if (!m.isGroup) return reply(mess.group)
                                if (!isAdmins && !itsMeDica) return reply('Fitur Khusus admin!')
                                if (!isBotAdmins) return reply(mess.botAdmin)
                              if (mentionUser.length !== 0) {
                dica.groupParticipantsUpdate(from, [mentionUser[0]], "promote") 
                .then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai admin`, [mentionUser[0]], true) })
                .catch(() => reply(mess.error))
                } else if ( Input ) {
                dica.groupParticipantsUpdate(from, [Input], "promote")
                .then( res => { mentions(`Sukses menjadikan @${Input.m.sender.split("@")[0]} sebagai admin`, [Input], true) })
                .catch(() => reply(mess.error))
                reply(`Tag atau balas reply orang yang ingin dijadikan admin`)
                }
                break
                
                case 'demote':
                  if (!m.isGroup) return reply(mess.group)
                                if (!isAdmins && !itsMeDica) return reply('Fitur Khusus admin!')
                                if (!isBotAdmins) return reply(mess.botAdmin)
                if (mentionUser.length !== 0) {
                dica.groupParticipantsUpdate(from, [mentionUser[0]], "demote")
                .then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai member biasa`, [mentionUser[0]], true) })
                .catch(() => reply(mess.error))
                } else if (Input) {
                dica.groupParticipantsUpdate(from, [Input], "demote")
                .then( res => { mentions(`Sukses menjadikan @${Input.m.sender.split("@")[0]} sebagai member biasa`, [Input], true) })
                .catch(() => reply(mess.error))
                } else {
                reply(`Tag atau reply orang yang ingin dijadikan member biasa\n\n*Contoh:*\n${prefix+command} @tag`)
                }
                break
              case 'jadian': {
                if (!m.isGroup) return reply(mess.group)
                let member = participants.map(u => u.id)
                let orang = member[Math.floor(Math.random() * member.length)]
                let jodoh = member[Math.floor(Math.random() * member.length)]
                let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤
                
@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
                let menst = [orang, jodoh]
                await dica.sendMessage(from, {text: jawab, mentions: menst})
                }
                break
                case 'jodohku': {
                  if (!m.isGroup) return reply(mess.group)
                let member = participants.map(u => u.id)
                let me = m.sender
                let jodoh = member[Math.floor(Math.random() * member.length)]
                let jawab = `👫Jodoh mu adalah
                
@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
                let ments = [me, jodoh]
                await dica.sendMessage (from, {text: jawab, mentions: ments})
                }
                break
           case 'additem': case 'addlist':
            if (!m.isGroup) return reply(mess.group)
          if (!isAdmins && !itsMeDica) return reply(mess.admin)
          var args1 = text.split("@")[0]
          var args2 = text.split("@")[1]
          if (!text.includes("@")) return dica.sendMessage(from, {text: `Gunakan dengan cara ${prefix+command} *key@response*\n\n_Contoh_\n\n${prefix+command} tes@apa`}, {quoted: m})
          if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
          if (isImage || isQuotedImage) {
          let media = await dica.downloadAndSaveMediaMessage(quoted, `./image/${m.sender}`)
          let kilaa = await TelegraPh(media)
          addResponList(from, args1, args2, true, kilaa, db_respon_list)
          reply(`Berhasil menambah List menu *${args1}*`)
          if (fs.existsSync(media)) fs.unlinkSync(media)
          } else {
          addResponList(from, args1, args2, false, '-', db_respon_list)
          reply(`Berhasil menambah List menu : *${args1}*`)
          }
          break
          case 'delitem': case 'dellist':
            if (!m.isGroup) return reply(mess.group)
          if (!isAdmins && !itsMeDica) return reply(mess.admin)
          if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
          if (!text) return reply(`Gunakan dengan cara ${prefix+command} *key*\n\n_Contoh_\n\n${prefix+command} hello`)
          if (!isAlreadyResponList(from, text, db_respon_list)) return reply(`List respon dengan key *${q}* tidak ada di database!`)
          delResponList(from, text, db_respon_list)
          reply(`Sukses delete list message dengan key *${text}*`)
          break
          case 'update': case 'updatelist': 
          if (!m.isGroup) return reply(mess.group)
          if (!isAdmins && !itsMeDica) return reply(mess.admin)
          var args1 = text.split("@")[0]
          var args2 = text.split("@")[1]
          if (!text.includes("@")) return reply(`Gunakan dengan cara #${command} *key@response*\n\n_Contoh_\n\n#${command} tes@apa`)
          if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
          if (isImage || isQuotedImage) {
          let media = await dica.downloadAndSaveMediaMessage(quoted, `./image/${m.sender}`)
          let kila = await TelegraPh(media)
          updateResponList(from, args1, args2, true, kila, db_respon_list)
          reply(`Berhasil Update List menu *${args1}*`)
          if (fs.existsSync(media)) fs.unlinkSync(media)
          } else { updateResponList(from, args1, args2, false, '-', db_respon_list)
          reply(`Berhasil update List menu : *${args1}*`)
          }
          break
              case 'list':
                if (!m.isGroup) return reply(mess.group)
                if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
                if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini\n\n*Untuk Melihat Fitur Bot Ketik* /help`)
              
                var arr_rows = [];
                for (let x of db_respon_list) {
                  if (x.id === from) {
                    arr_rows.push({
                      title: x.key,
                      rowId: x.key
                    })
                  }
                }
              
                if (arr_rows.length === 0) return reply(`Belum ada list message yang terdaftar di group ini\n\n*Untuk Melihat Fitur Bot Ketik* /help`)
              
                var infoMsg = `*Alternatif jika tombol .list tidak muncul*\n(langsung ketik aja)\n\n╭✄┈⟬ *${groupName}* ⟭\n`;
                for (let row of arr_rows) {
                  infoMsg += `┆• ${row.title.toUpperCase()}\n`;
                }
                infoMsg += `╰──────────◇\nJam: ${time2}\nTanggal: ${tanggal}`;
              
                dica.sendMessage(from, {text: infoMsg})
                break;
                case 'tagall': {
                  if (!m.isGroup) return reply(mess.group)
                    if (!isBotAdmins) return reply(mess.botAdmin)
                    if (!isAdmins) return reply(mess.admin)
              let teks = `══✪〘 *👥 Tag All* 〙✪══
              
➲ *Pesan : ${text ? text : 'kosong'}*\n\n`
                    for (let mem of participants) {
                    teks += `⭔ @${mem.id.split('@')[0]}\n`
                    }
                    dica.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                    }
                    break;
                case 'listonline': case 'liston': {
                  if (!m.isGroup) return reply(mess.group)
                  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                  let online = [...Object.keys(store.presences[id]), botNumber]
                  dica.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
           }
                break;
        case 'linkgroup': case 'linkgc': {
          if (!m.isGroup) return reply(mess.group)
            if (!isBotAdmins) return reply(mess.botAdmin)
            let response = await dica.groupInviteCode(m.chat)
            dica.sendText(m.chat, `*Ini kak link nya*\n\nhttps://chat.whatsapp.com/${response}\n\n»» Link Group : ${groupMetadata.subject}`, m, { detectLink: true })
                    }
        break;

    }
}
module.exports = fiturGoup
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});