
const fs = require("fs");
const chalk = require("chalk");
const moment = require('moment-timezone');

global.ownerr = "628"; //untuk send receipt data
//━━━━━━━━━━━━━━━[ DATA BOT ]━━━━━━━━━━━━━━━━━//
global.owner = ["62"];                // Isi Jadi Nomer Owner
global.packname = "BOT BUNA (082250855169)";    // Isi Jadi Nama Bot
global.author = "BUNA";             // Nama Owner atau biarin saja
global.versionscript = "5.4.0"; 
global.session = "session";
global.Corporat = `® © 2015 - 2023 ALL RIGHTS RESERVED*_`
global.logo = 'https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpg'; //untuk receipt
global.background = 'https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpg'; // receipt
//━━━━━━━━━━━━━━━[ DATA DIGIFLAZZ ]━━━━━━━━━━━━━━━━━//
//Comingsoon
global.userme = "kosong";    // ISI USERNAME DIGI
global.production = "kosong"    // ISI PRODUCTION DIGI; 
//Comingsoon

global.dimensionLicense = "oMg3Z4IHCC" // apikeynya di sini https://api.gathstore.id/login/
global.apiUri = "https://api.gathstore.id/api/"
// Payment Deposit

// Zenzkey & Lolkey
global.zenzkey = "zenzkey_6c68a82640";
global.lolkey = "virtualDimension";
global.domain = "https://digez.haipengkystore.com";
global.ptla = "kosong"

//PAYDISINI.CO.ID
//comingsoon
global.paydisini = 'kosong'; // Gantilah dengan API Key Anda
global.noted = 'Catatan transaksi dari merchant'; // Gantilah dengan catatan dari merchant
global.timeStamp = 1800; // Gantilah dengan batas waktu pembayaran (detik)
global.tipeFee = 1; // Gantilah dengan jenis fee (1: ditanggung customer, 2: ditanggung merchant)

//Rate Gacha dan kode produk yang di dapat
//comingsoon
global.priceGacha = 5000
global.prizePool = [
  { prize: 'ML3', chance: 3 },
  { prize: 'ML5', chance: 5 },
  { prize: 'ML10', chance: 2 },
  { prize: 'WDP', chance: 0.1 }
];

global.limite = {
	limitCount: 10,
    prem: 'Unlimited',
    user: 1,
	}

global.mess = {
  error: "Error",
  wait: "Loading...",
  owner: "Fitur Khusus Owner Bot",
  waitdata: "Melihat Data Terkini...",
  admin: "Fitur Khusus Admin Group!",
  group: "Fitur Digunakan Hanya Untuk Group!",
  private: 'Fitur Digunakan Hanya Untuk Private Chat!',
  botAdmin: "Bot Harus Menjadi Admin Terlebih Dahulu!"
};

global.tanggalserver = `${moment().tz("Asia/Jakarta").format("ll")}`;
global.waktuserver = `${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`; 

let http = require('http')
            http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
            resp.on('data', function(ip) {
                (global.ipserver = ip);
            })
          })

          let file = require.resolve(__filename);
          fs.watchFile(file, () => {
            fs.unwatchFile(file);
            console.log(chalk.redBright(`Update ${__filename}`));
            delete require.cache[file];
            require(file);
          });
          