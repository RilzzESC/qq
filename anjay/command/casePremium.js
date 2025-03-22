const fs = require('fs');
const chalk = require('chalk');
const axios = require('axios')
require('../setting/config');
const {
  getBuffer,
  TelegraPh,
} = require('../lib/simple')
async function fiturPremium(command, dica, reply, m, sender, prefix, itsMeDica, args, isImage, isQuotedImage, quoted, text, isQuotedSticker, calc, pushname, from){
    switch(command){
        case 'cz': {
if (!text) return reply('Contoh penggunaan:\n.cz <zodiac_point>');
if (isNaN(text)) {
  return reply('Input tidak valid. Pastikan input berupa angka.');
}

const zodiacPoint = Number(text);
const diamondsNeeded = calc.cz(zodiacPoint);
reply(`BOT CALC ZODIAK

Total maksimal diamond yang dibutuhkan: ${diamondsNeeded}`);
}
break;
        case 'cwr': {
          if (!text) return reply('Contoh penggunaan:\n.cwr <total_pertandingan> <win_rate_sekarang> <target_win_rate>');
          var cwl = text.split(' ');
          if (!cwl || cwl.length !== 3) return reply('Contoh penggunaan:\n.cwr <total_pertandingan> <win_rate_sekarang> <target_win_rate>');
          
          const tMatch = parseFloat(cwl[0]);
          const tWr = parseFloat(cwl[1]);
          const wrReq = parseFloat(cwl[2]);
          
          if (isNaN(tMatch) || isNaN(tWr) || isNaN(wrReq)) {
            return reply('Input tidak valid. Pastikan semua input berupa angka.');
          }
          
          const resultNum = calc.cwr(tMatch, tWr, wrReq);
          const tekl = `BOT CALC WINRATE
          
Anda memerlukan sekitar ${resultNum} win tanpa lose untuk mendapatkan win rate ${wrReq}%`;
          reply(tekl);
          }
          break;
            case 'dalle':{
              
            reply(mess.wait)
            try{
            let get_result = await getBuffer(`https://aemt.me/dalle?text=${encodeURIComponent(text)}`)
            dica.sendMessage(from, {image: get_result, caption: `*${text}*`}, { quoted: m })
            }catch(err){
            console.log((err) => reply('Error coba lagi kontol'))
            }
            }
            break
        case 'jadianime':
            case 'jadiwibu':{
            if (!isImage && !isQuotedImage) return reply(`Kirim gambar lalu reply ${prefix + command} atau tag gambar yang sudah dikirim`)
            reply(mess.wait)
            try{
            let ahah = await dica.downloadAndSaveMediaMessage(quoted, `./image/${m.sender.split('@')[0]}`)
            let Lana = await TelegraPh(ahah)
            let get_result = await getBuffer(`https://api.lolhuman.xyz/api/imagetoanime?apikey=${global.lolkey}&img=${Lana}`)
            dica.sendMessage(from, {image: get_result, caption: `*Nih Kamu jadi Anime*`}, { quoted: m })
            fs.unlinkSync(ahah) 
            }catch(err){
            console.log((err) => reply('Error coba lagi kontol'))
            }
            }
            break
            case 'jadizombie': {
              if (!isImage && !isQuotedImage) return reply(`Kirim gambar lalu reply ${prefix + command} atau tag gambar yang sudah dikirim`)
              
              reply(mess.wait);
              
              try {
                let ahah = await dica.downloadAndSaveMediaMessage(quoted, `./image/${m.sender.split('@')[0]}`);
                let Lana = await TelegraPh(ahah);
                let res = await axios.get(`https://aemt.me/converter/zombie?url=${Lana}`);
                
                if (res.data.status) {
                  let get_result = await getBuffer(res.data.url);
                  await dica.sendMessage(from, { image: get_result, caption: `*Nih Kamu jadi Zombie*` }, { quoted: m });
                  fs.unlinkSync(ahah);
                } else {
                  reply('Gagal mengonversi menjadi zombie.');
                }
              } catch (err) {
                console.error(err);
                reply('Terjadi kesalahan saat mengonversi gambar menjadi zombie. Silakan coba lagi.');
              }
            }
            break;
  
case 'ai':
    case 'openai': {
        if (!text) {
      const randomSentences = [
        "Hai, ada yang bisa aku bantu?",
        "Apa kabar? Ada yang bisa aku bantu hari ini?",
        "Selamat datang! Ada yang ingin kamu tanyakan?",
        "Halo! Aku siap menjawab pertanyaanmu. Apa yang ingin kamu tanyakan?",
        "Ada yang ingin ditanyakan? Aku di sini untuk membantu!",
        "Hai, ada yang ingin kamu diskusikan? Aku siap membantu.",
        "Apakah ada pertanyaan menarik yang ingin kamu ajukan?",
        "Selamat datang di layanan kami! Ada yang ingin kamu tanyakan?",
        "Halo! Jangan ragu untuk mengajukan pertanyaanmu. Aku siap membantu!",
        "Apa yang ingin kamu ketahui hari ini? Tanyakan saja!"
      ];
    
      const randomIndex = Math.floor(Math.random() * randomSentences.length);
      const randomResponse = randomSentences[randomIndex];
    
      return reply(randomResponse);
    }
      
      fetch(`https://aemt.me/openai?text=${encodeURIComponent(text)}`)
        .then(res => res.json())
        .then(data => {
          reply(data.result)
        })
        .catch(err => {
          console.error(err)
          reply(`Terjadi kesalahan saat meminta respon AI. Silakan coba lagi nanti.`)
        })
      }
      break
      case 'rbg': case 'removebg': {
              if (!isImage && !isQuotedImage) return reply(`Kirim gambar lalu reply ${prefix + command} atau tag gambar yang sudah dikirim`)
              reply(mess.wait);
              
              try {
                let ahah = await dica.downloadAndSaveMediaMessage(quoted, `./image/${m.sender.split('@')[0]}`);
                let Lana = await TelegraPh(ahah);
                let res = await axios.get(`https://aemt.me/removebg?url=${Lana}`);
                
                if (res.data.url) {
                  let get_result = await getBuffer(res.data.url.result);
                  await dica.sendMessage(from, { image: get_result, caption: `*Done*` }, { quoted: m });
                  fs.unlinkSync(ahah);
                } else {
                  reply('Gagal remove background.');
                }
              } catch (err) {
                console.error(err);
                reply('Terjadi kesalahan saat remove background. Silakan coba lagi.');
              }
            }
            break;
        case 'remini':
case 'upscale': case 'hdr': {
  if (!isImage && !isQuotedImage) {
    return reply(`Kirim gambar lalu reply ${prefix + command} atau tag gambar yang sudah dikirim`);
  }
  
  reply(mess.wait);
  
  try {
    let ahah = await dica.downloadAndSaveMediaMessage(quoted, `./image/${m.sender.split('@')[0]}.jpg`);
    let memey = await TelegraPh(ahah);
    let get_result = await getBuffer(`https://api.lolhuman.xyz/api/upscale?apikey=${global.lolkey}&img=${memey}`);
    
    dica.sendMessage(from, { image: get_result, caption: `*Done converter HD*` }, { quoted: m });
    fs.unlinkSync(ahah);
  } catch (err) {
    console.log(err);
    reply('Terjadi kesalahan, coba lagi nanti');
  }
}

break;
        case 'qc': {
            var atas = text.includes('|') ? text.split('|')[0] || `-` : `${pushname}`
            var bawah = text.includes('|') ? text.split('|')[1] || '-' : text
            
            if (isImage || isQuotedImage) {
              try {
                if (args.length < 0) return reply(`Kirim perintah ${command} teks name|teks chat`)
                
                reply(mess.wait)
                var media = await dica.downloadAndSaveMediaMessage(quoted, `./image/${m.sender+Date.now()}.jpg`)
                var media_url = await TelegraPh(media)
                var meme_url = `https://api.lolhuman.xyz/api/bubblechat?apikey=${global.lolkey}&avatar=${media_url}&name=${encodeURIComponent(atas)}&text=${encodeURIComponent(bawah)}`
                
                await dica.sendImageAsSticker(m.chat, meme_url, m, {
                  packname: global.packname,
                  author: global.author
                })
                fs.unlinkSync(media)
              } catch (e) {
                reply(mess.error)
              }
            } else if (isQuotedSticker) {
              try {
                if (args.length < 0) return reply(`Kirim perintah ${command} teks atas|teks bawah`)
                
                reply(mess.wait)
                var media = await dica.downloadAndSaveMediaMessage(quoted, `./temp/${m.sender+Date.now()}.webp`)
                var media_url = await TelegraPh(media)
                var meme_url = `https://api.lolhuman.xyz/api/bubblechat?apikey=${global.lolkey}&avatar=${media_url}&name=${encodeURIComponent(atas)}&text=${encodeURIComponent(bawah)}`
                
                dica.sendImageAsSticker(m.chat, meme_url, m, {
                  packname: global.packname,
                  author: global.author
                })
                fs.unlinkSync(media)
              } catch (err) {
                reply(mess.error)
              }
            } else {
              
                
            }
          }
            break;
    }
}

module.exports = fiturPremium
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});