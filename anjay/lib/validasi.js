const fs = require('fs');
const axios = require('axios');
require('../setting/config');
function toRupiah(angka) { 
  var angkaStr = angka.toString();
  var angkaTanpaKoma = angkaStr.split('.')[0];
  var angkaRev = angkaTanpaKoma.toString().split('').reverse().join('');
  var rupiah = '';
for (var i = 0; i < angkaRev.length; i++) {
if (i % 3 == 0) rupiah += angkaRev.substr(i, 3) + '.';
}
return '' + rupiah.split('', rupiah.length - 1).reverse().join('');
}
function stalk(newValue, dica) {
  const filePath = './src/validasi.json';

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const validasiData = JSON.parse(data);
    if (validasiData.stalk === newValue) {
      const value = newValue === true ? 'Sudah Aktif' : 'Sudah Nonaktif'
      return dica(value);
    }
    validasiData.stalk = newValue;
    const updatedData = JSON.stringify(validasiData, null, 2);
    fs.writeFileSync(filePath, updatedData, 'utf8');
    if (newValue === true) {
    dica('Sukses mengaktifkan stalk nickname');
    } else if (newValue === false) {
    dica('Sukses menonaktifkan stalk nickname');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

function receipt(newValue, dica) {
  const filePath = './src/validasi.json';

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const validasiData = JSON.parse(data);
    if (validasiData.receipt === newValue) {
      const value = newValue === true ? 'Sudah Aktif' : 'Sudah Nonaktif'
      return dica(value);
    }
    validasiData.receipt = newValue;
    const updatedData = JSON.stringify(validasiData, null, 2);
    fs.writeFileSync(filePath, updatedData, 'utf8');
if (newValue === true) {
    dica('Sukses mengaktifkan receipt/invoice');
  } else if (newValue === false) {
    dica('Sukses menonaktifkan receipt/invoice');
  }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function receipt2(dica, m, from, capt, name, product, reff_id, serial_number, destination, status, time, status_color) {
  try {
    // Membangun URL dengan parameter
    const apiUrl = `https://api.lolhuman.xyz/api/creator/receipt2?apikey=${lolkey}&logo=${logo}&name=${name}&background=${background}&product=${product}&reff_id=${reff_id}&serial_number=${serial_number}&destination=${destination}&status=${status}&time=${time}&status_color=${status_color}`;

    const response = await axios.get(apiUrl, { responseType: 'stream' });

    if (response.status === 200) {
      const filePath = `./image/receipt.jpg`;
      const writer = fs.createWriteStream(filePath);
      const finishPromise = new Promise((resolve, reject) => {
        writer.on('finish', () => {
          resolve(filePath);
        });

        writer.on('error', (err) => {
          reject(err);
        });
      });
      response.data.pipe(writer);
      await finishPromise;

      let receipt = {
        image: fs.readFileSync(filePath),
        caption: capt,
        headerType: 5,
      };
      await dica.sendMessage(from, receipt, { quoted: m });

      return filePath;
    } else {
      throw new Error(`HTTP Error: ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}

function notify(dica, m, status, produk, buyer, level, sisahnya, tujuan, refid, serial_n, harga_j, harga_m, ceksaldo_d, jam, tanggal ) {
  let message = `── 「 *TRANSAKSI MEMBER* 」 ──

*› Status :* ${status}
*› Produk :* ${produk}
*› Tujuan :* ${tujuan}
*› Ref Id :* ${refid}
*› Waktu :* ${jam} | ${tanggal}
*› Invoice :* ${serial_n}

*› Buyer  :* ${buyer}
*› Level  :* ${level}
*› Sisah Saldo Buyer :* ${sisahnya}

*› Harga Jual* : Rp ${toRupiah(harga_j)}
*› Harga Modal* : Rp ${toRupiah(harga_m)}${status === 'Sukses' ? `\n*› Keuntungan* : Rp ${toRupiah(harga_j - harga_m)}` : ''}
*› Sisa Saldo Digiflazz* : Rp ${toRupiah(ceksaldo_d)}`;

  dica.sendMessage(`${global.ownerr}@s.whatsapp.net`, { text: decodeURIComponent(message) }, { quoted: m });
}

module.exports = {
  stalk,
  receipt,
  receipt2,
  notify,
};
