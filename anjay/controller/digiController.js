const fs = require('fs')
const chalk = require('chalk')
const { upDeposit, cekDeposit, letsgo, getCateBrand, skuCode, getPriceList} = require("../lib/dataDigi");
const {Games, Pulsa, Data, Voucher, Emoney, PLN, ChinaTopup, Umobile, PhilippinesSMART, SMSTelp, masaAktiv} = require('../lib/brand');
const {
  stalkff,
  stalkml,
} = require('../lib/stalker')
const toRupiah = require('../lib/toRupiah')
function removeSpaceFromString(text) {
  return text.replace(/\s+/g, '');
}
function getList(kategori, brand, type, level, reply, m) {
    const itsMeDica = level.itsMeDica
    const isPATNER = level.isPATNER
    const isVIP = level.isVIP
    const isVVIP = level.isVVIP
    const filters = [];
    if (kategori) {
      filters.push({ category: kategori });
    }
    if (brand) {
      filters.push({ brand: brand });
    }
    if (type) {
      filters.push({ type: type });
    }
    getCateBrand(kategori, brand, type)
    .then((pretp) => {
      if (pretp !== null && pretp.length > 0) {
        const profitt = JSON.parse(fs.readFileSync("./src/profit.json"));
        const lep = itsMeDica ? 'Dev' : isPATNER ? 'Patner' : isVVIP ? 'VVIP' : isVIP ? 'VIP' : 'User'
        const profit = profitt.profit;
        pretp.sort((a, b) => a.price - b.price);
  
          const randomIndex = Math.floor(Math.random() * pretp.length);
          const randomItem = pretp[randomIndex];
          let txt = `*•======[${brand.toUpperCase()}]======•*\nSILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI\n\nJika ingin melihat info layanan lebih lengkap, gunakan .detail + code\nContoh:\n.detail ${randomItem.buyer_sku_code}\n\n*•======[ Price - ${lep} ]======•*\n`;
          const val = JSON.parse(fs.readFileSync('./src/validasi.json'));
          const them = val.topup
          pretp.forEach((item) => {
            const price = itsMeDica ? item.price * profit.dev : isPATNER ? item.price * profit.patner : isVVIP ? item.price * profit.vvip : isVIP ? item.price * profit.vip : item.price * profit.user;
            const status = item.seller_product_status;
            const seller = status ? '✅ Tersedia' : '⛔ Tidak Tersedia';
            
            if (them === 1) {
  
            txt += `${item.product_name}
code: ${item.buyer_sku_code}
Status: ${seller}
Harga: Rp${toRupiah(price)})\n\n`;
  
  } else if (them === 2) {
    const puser = item.price * profit.user;
    const pvip = item.price * profit.vip;
    const pvvip = item.price * profit.vvip;
    const ppatner = item.price * profit.patner;
    const pdev = item.price * profit.dev;
  txt += `*✧༺${item.product_name}༻✧*
*【☆】Code:* _${item.buyer_sku_code}_
*【☆】Status:* _${seller}_
*【☆】User:* _Rp${toRupiah(puser)}_
*【☆】VIP:* _Rp${toRupiah(pvip)}_
*【☆】VVIP:* _Rp${toRupiah(pvvip)}_
*【☆】Patner:* _Rp${toRupiah(ppatner)}_
*【☆】Harga Untukmu:* _Rp${toRupiah(price)}_ ( *${lep}* )\n\n`; 
  
  } else if (them === 3) {
  
    txt += `♚ *${item.product_name}*
_╰┈➤_ *code* : ${item.buyer_sku_code}
_╰┈➤_ *Status* : ${seller}
_╰┈➤_ *Harga kamu* : Rp${toRupiah(price)} *_(${lep})_*\n\n`;
  
  } else if (them === 4) {
  
  txt += `*⊶ ${item.product_name}*
*› ᴋᴏᴅᴇ:* ${item.buyer_sku_code}
*› ꜱᴛᴀᴛᴜꜱ:* ${seller}
*› ʜᴀʀɢᴀ:* Rp${toRupiah(price)} *(${lep})*\n\n`;
  } else if (them === 5) {
    txt += `*${item.product_name}*
*⌈CODE*: ${item.buyer_sku_code}
*Status*: ${seller}
*⌊Harga*: Rp. ${toRupiah(price)} ${lep}\n\n`;
  }
  
          });
  
          txt += `\n\n_*${packname} ${Corporat}`;
          reply(txt);
  
        } else {
         return // reply('Produk tidak ada.');
        }
      })
      .catch((error) => {
        const resk = `Error: ${error.message}`;
        reply(resk);
        console.error(resk);
      });
  }


  function diDetail(eaea, reply, level, blnc, balanceDB, m, pushname){
    skuCode(eaea)
    .then(ktek => {
      if (ktek) {
        const profitt = JSON.parse(fs.readFileSync("./src/profit.json"));
        const profit = profitt.profit
        const price = ktek.price;
        const userBalance = blnc.checkBalance(m.sender, balanceDB);
        const priceUser = price * profit.user;
        const priceGOLD = price * profit.vvip;
        const pricePRO = price * profit.vip;
        const pricePatner = price * profit.patner;
        const priceDev = price * profit.dev;

        const replyMessage = `*Hae ${level.itsMeDica ? 'Owner ku': pushname}*
*Saldo kamu:* _Rp${toRupiah(userBalance)}_

*ID Layanan:* _${ktek.buyer_sku_code}_
*Layanan:* _${ktek.product_name}_
*Harga:* _Rp ${toRupiah(level.itsMeDica ? priceDev : level.isPATNER ? pricePatner: level.isVVIP ? priceGOLD : level.isVIP ? pricePRO : priceUser)}_
*Status Layanan:* _${ktek.seller_product_status ? 'Tersedia' : '🚫Tidak Tersedia'}_
*Jam Buka Mulai:* _${ktek.start_cut_off}_ \- _${ktek.end_cut_off}_
*Deskripsi Layanan:*
_${ktek.desc}_
Harga dapat berubah tergantung level kamu

*User:* _Rp${toRupiah(priceUser)}_
*VIP:* _Rp${toRupiah(pricePRO)}_
*VVIP:* _Rp${toRupiah(priceGOLD)}_
*Patner:* _Rp${toRupiah(pricePatner)}_
*Dev:* _Rp${toRupiah(priceDev)}_`;
        return reply(`${replyMessage}\nIngin melanjutkan Order?\nSilahkan ketik => .stun ${eaea}`);
      } else {
        return reply("Produk tidak ditemukan.");
      }
    })
    .catch(error => {
      console.error(error.message);
    });
  }

  function saldoDigi(reply){
    cekDeposit()
    .then((deposit) => {
      if (deposit !== null) {
        reply(`Saldo Digiflazz: Rp${toRupiah(deposit)}`);
      }
    })
    .catch((error) => {
        reply(`Error: ${error.message}`);
        console.error(`Error: ${error.message}`);
      });
    }
function allPriceList(lower, reply) {
    getPriceList()
    .then(async (response) => {
      const data = response.data.data;
      const brands = data.map(item => item.brand);
      let uniqueTitles, datsTitle, pulsTitle, eneyTitle, VouchTitle, PLNTitle; 

      if (lower === 'games') {
        const gem = await Games(brands);
        uniqueTitles = [...new Set(gem)];
      } else if (lower === 'data') {
        const dat = await Data(brands);
        datsTitle = [...new Set(dat)];
      } else if (lower === 'pulsa') {
        const Puls = await Pulsa(brands);
        pulsTitle = [...new Set(Puls)];
      } else if (lower === 'emoney' || lower === 'e-money') {
        const Eney = await Emoney(brands);
        eneyTitle = [...new Set(Eney)];
      } else if (lower === 'voucher') {
        const Vouch = await Voucher(brands);
        VouchTitle = [...new Set(Vouch)];
      } else if (lower === 'token'||lower === 'pln') { 
        const PLEN = await PLN(brands);
        PLNTitle = [...new Set(PLEN)];
      }

      let listMsg = `*•======[ TOPUP ]======•*
*CARA ORDER:*
ketik stun + kodeProduk + target
contoh
order wdp 1234567 6565

untuk melihat kode produk silahkan ketikan list di bawah ini
╭❒ 「  *SIMPEL LIST*  」`;

      if (uniqueTitles && uniqueTitles.length > 0) {
        listMsg += `
│
│✄┈┈┈⟬ *Games* ⟭ •   
│› ${uniqueTitles.join('\n│› ')}`;
      }

      if (pulsTitle && pulsTitle.length > 0) {
        listMsg += `
│
│✄┈┈┈⟬ *Pulsa* ⟭ •
│› ${pulsTitle.join('\n│› ')}`;
      }
      if (datsTitle && datsTitle.length > 0) {
        listMsg += `
│
│✄┈┈┈⟬ *Data* ⟭ •
│› ${datsTitle.join('\n│› ')}`;
      }

      if (eneyTitle && eneyTitle.length > 0) {
        listMsg += `
│
│✄┈┈┈⟬ *E-Money* ⟭ •
│› ${eneyTitle.join('\n│› ')}`;
      }

      if (VouchTitle && VouchTitle.length > 0) {
        listMsg += `
│
│✄┈┈┈⟬ *Voucher* ⟭ •
│› ${VouchTitle.join('\n│› ')}`;
      }

      if (PLNTitle && PLNTitle.length > 0) {
        listMsg += `
│
│✄┈┈┈⟬ *PLN* ⟭ •
│› ${PLNTitle.join('\n│› ')}`;
      }

      listMsg += `
╰❒`;

      reply(listMsg);
    })
    .catch((error) => {
      console.error('Error fetching data from API:', error);
      reply('Error fetching data from API:');
    });
}
function simplelist(reply) {
    getPriceList()
    .then(async (response) => {
      const data = response.data.data;
      const brands = data.map(item => item.brand);
          const gem = await Games(brands);
          const uniqueTitles = [...new Set(gem)];
          const dat = await Data(brands);
          const datsTitle = [...new Set(dat)];
          const Puls = await Pulsa(brands);
          const pulsTitle = [...new Set(Puls)];
          const Eney = await Emoney(brands);
          const eneyTitle = [...new Set(Eney)];
          const Vouch = await Voucher(brands);
          const VouchTitle = [...new Set(Vouch)];
          const PLEN = await PLN(brands);
          const PLNTitle = [...new Set(PLEN)];
    
           let listMsg = `*•======[ TOPUP ]======•*
*CARA ORDER:*
ketik stun + kodeProduk + target
contoh
order wdp 1234567 6565

untuk melihat kode produk silahkan ketikan list di bawah ini
╭❒ 「  *SIMPEL ALL LIST*  」`;

      if (uniqueTitles && uniqueTitles.length > 0) {
        listMsg += `
│
│✄┈┈┈⟬ *Games* ⟭ •   
│› ${uniqueTitles.join('\n│› ')}`;
      }

      if (pulsTitle && pulsTitle.length > 0) {
        listMsg += `
│
│✄┈┈┈⟬ *Pulsa* ⟭ •
│› ${pulsTitle.join('\n│› ')}`;
      }

      if (datsTitle && datsTitle.length > 0) {
        listMsg += `
│
│✄┈┈┈⟬ *Data* ⟭ •
│› ${datsTitle.join('\n│› ')}`;
      }

      if (eneyTitle && eneyTitle.length > 0) {
        listMsg += `
│
│✄┈┈┈⟬ *E-Money* ⟭ •
│› ${eneyTitle.join('\n│› ')}`;
      }

      if (VouchTitle && VouchTitle.length > 0) {
        listMsg += `
│
│✄┈┈┈⟬ *Voucher* ⟭ •
│› ${VouchTitle.join('\n│› ')}`;
      }

      if (PLNTitle && PLNTitle.length > 0) {
        listMsg += `
│
│✄┈┈┈⟬ *PLN* ⟭ •
│› ${PLNTitle.join('\n│› ')}`;
      }

      listMsg += `
╰❒`;
    
          reply(listMsg);
        })
        .catch((error) => {
          console.error('Error fetching data from API:', error);
          reply('Error fetching data from API:');
        });
}

function getCategory(reply) {
  getPriceList()
    .then((response) => {
      const data = response.data.data;
      const categories = new Set();

      // Mendapatkan daftar kategori tanpa duplikat
      data.forEach(item => {
        categories.add(item.category);
      });

      const listMsg = `*•======[ TOPUP ]======•*
SILAHKAN PILIH SERVICE YANG TERSEDIA DIBAWAH INI

${[...categories].map(category => `${category} (.order ${category})`).join('\n\n')}

_*${packname} ${Corporat}`;
      reply(listMsg);
    })
    .catch((error) => {
      console.error('Error fetching data from API:', error);
      reply('Error fetching data from API:');
    });
}


async function processTopupRequest(ttks, nom, zon, m, from, reply, dica, topupPath, validasiStalk, pushname, level, blnc, balanceDB) {
  const target = zon ? nom + zon : nom;
  const randomRef = Math.floor(Math.random() * 1e12).toString();

  
  try {
    const service = await skuCode(ttks);

    if (service) {
      if (service.seller_product_status === false) return reply('Maaf, produk ini sedang mengalami gangguan atau tidak tersedia saat ini.');

      if (m.text.includes(service.buyer_sku_code)) {
        const profitt = JSON.parse(fs.readFileSync("./src/profit.json"));
        const profit = profitt.profit;
        let price = parseFloat(service.price);
        let stalk = null;

        if (validasiStalk()) {
          if (service.brand === "MOBILE LEGENDS") {
            const mlResult = await stalkml(nom, zon);
            console.log('Mobile Legend Result:', mlResult);
            if (mlResult === 'Gagal') return reply('Terjadi Kesalahan!!\nid tidak ditemukan')
            stalk = {
              nickname: mlResult,
              id: nom,
              zoneId: zon
            };
          } else if (service.brand === "FREE FIRE") {
            const userId = target; 
            const ffResult = await stalkff(userId);
            console.log('Free Fire Result:', ffResult);
            if (ffResult === 'Gagal') return reply('Terjadi Kesalahan!!\nid tidak ditemukan')
            stalk = {
              nickname: ffResult,
              id: userId
            };
          } else {
            stalk = "";
          }
        } else {
          stalk = "";
        }

        if (!fs.existsSync(topupPath + m.sender.split("@")[0] + ".json")) {
          const objek_gesek = {
            ref_id: randomRef,
            ID: ttks,
            session: "konfirmasi_order",
            date: new Date().toLocaleDateString("ID", { timeZone: "Asia/Jakarta" }),
            number: m.sender,
            buyer: pushname,
            data: {
              modal: price,
              nomer: removeSpaceFromString(target),
              product_name: service.product_name,
              category: service.category,
              brand: service.brand,
              price: level.itsMeDica ? price * profit.dev : level.isPATNER ? price * profit.patner : level.isVVIP ? price * profit.vvip : level.isVIP ? price * profit.vip : price * profit.user,
              sku_code: service.buyer_sku_code,
              description: service.desc,
              stalk: stalk,
            },
          };

          fs.writeFileSync(topupPath + m.sender.split("@")[0] + ".json", JSON.stringify(objek_gesek, null, 2));
        }

        let data_topup = JSON.parse(fs.readFileSync(topupPath + m.sender.split("@")[0] + ".json"));
        let tartag = "";

        if (validasiStalk()) {
          tartag = `${data_topup.data.brand === "MOBILE LEGENDS" ? `*Nick:* ${data_topup.data.stalk.nickname}\n*ID:* ${data_topup.data.stalk.id}(${data_topup.data.stalk.zoneId})` : (data_topup.data.brand === "FREE FIRE" ? `*Nick:* ${data_topup.data.stalk.nickname}` : `*Nomer:* ${data_topup.data.nomer}`)}`;
        } else {
          tartag = `*Nomer:* ${data_topup.data.nomer}`;
        }

        var text2 = `📝 *FORM TOP UP* 📝\n\n*Produk ID:* ${data_topup.ID}
${tartag}

*Kategory:* ${data_topup.data.category}
*Brand:* ${data_topup.data.brand}
*Produk:* ${data_topup.data.product_name}
*Harga:* Rp${toRupiah(data_topup.data.price)}

*Saldo Kamu:* Rp${toRupiah(blnc.checkBalance(m.sender, balanceDB))}
\nApakah data tersebut sudah benar? 
Akan gagal apabila terdapat kesalahan input.`;

        var buttonMessage_dep = {
          text: `${text2}\nSilahkan Ketik 'y' jika benar 'n' jika salah`,
          headerType: 1,
        };

        dica.sendMessage(from, buttonMessage_dep);
      } else {
        return reply("Produk tidak ditemukan.");
      }
    }
  } catch (error) {
    console.error(error.message);
  }
}



  module.exports = { getList, diDetail, saldoDigi, allPriceList, getCategory, simplelist, processTopupRequest}
  let file = require.resolve(__filename);
  fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update ${__filename}`));
    delete require.cache[file];
    require(file);
  });