const axios = require('axios');
const crypto = require('crypto');
const md5 = require('md5');
require('../setting/config')
const apiKey = global.production
const username = global.userme

async function cekDeposit() {
    const signature = crypto
        .createHash('md5')
        .update(username + apiKey + 'depo')
        .digest('hex');
    const payload = {
        cmd: 'deposit',
        username: username,
        sign: signature,
    };
    const endpointUrl = 'https://api.digiflazz.com/v1/cek-saldo';

    try {
        const response = await axios.post(endpointUrl, payload);
        if (response.status === 200) {
            const deposit = response.data.data.deposit;
            return deposit;
        } else {
            console.error(`Error: ${response.status} - ${response.data}`);
            return null;
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return null;
    }
}

function letsgo(buyerSkuCode, customerNo, refId) {
    const signature = crypto
        .createHash('md5')
        .update(username + apiKey + refId)
        .digest('hex');
    const endpointUrl = 'https://api.digiflazz.com/v1/transaction';
    const payload = {
        username: username,
        buyer_sku_code: buyerSkuCode,
        customer_no: customerNo,
        ref_id: refId,
        sign: signature,
        allow_dot: true
    };

    return axios.post(endpointUrl, payload)
        .then(response => {
            if (response.status === 200) {
                const responseData = response.data.data;
                return responseData;
            } else {
                throw new Error(`${response.status} - ${response.data.message || 'Unknown error occurred'}`);
            }
        })
        .catch(error => {
            if (error.response) {
                return error.response.data.data;
            } else {
                throw new Error(`Error: ${error.message || 'Unknown error occurred'}`);
            }
        });
}


async function getCateBrand(filterCategory = null, filterBrand = null, filterType = null) {
    const signature = crypto
        .createHash('md5')
        .update(username + apiKey + "pricelist")
        .digest('hex');
    const endpointUrl = 'https://api.digiflazz.com/v1/price-list';
    const payload = {
        cmd: 'prepaid',
        username: username,
        sign: signature,
    };

    try {
        const response = await axios.post(endpointUrl, payload);
        if (response.status === 200) {
            const responseData = response.data.data;
            const filteredData = responseData.filter((item) => {
                if (filterCategory && item.category !== filterCategory) {
                    return false;
                }
                if (filterBrand && item.brand !== filterBrand) {
                    return false;
                }
                if (filterType && item.type !== filterType) {
                    return false;
                }
                return true;
            });

            return filteredData;
        } else {
            const resk = `Error: ${response.status} - ${response.data}`
            console.error(resk);
            return resk;
        }
    } catch (error) {
        const resk = `Error: ${error.message}`
        console.error(resk);
        return resk;
    }
}

function skuCode(sku_code) {
    const apiUrl = 'https://api.digiflazz.com/v1/price-list';
    const requestData = {
        cmd: 'prepaid',
        username: username,
        sign: md5(username + apiKey + "pricelist")
    };

    return axios.post(apiUrl, requestData)
        .then(response => {
            if (response.data && response.data.data) {
                const products = response.data.data;
                const filteredProduct = products.find(product => product.buyer_sku_code === sku_code);

                return filteredProduct || null;
            } else {
                throw new Error("Data produk tidak ditemukan.");
            }
        })
        .catch(error => {
            throw new Error("Error: " + error.response.data.data);
        });
}

function upDeposit(amount, bank, ownerName) {
  const signature = md5(username + apiKey + 'deposit');
  const requestData = {
    username,
    amount,
    bank,
    owner_name: ownerName,
    sign: signature,
  };
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  };
  const depositEndpoint = 'https://api.digiflazz.com/v1/deposit';
  return axios.post(depositEndpoint, requestData, axiosConfig)
    .then(response => {
      const data = response.data;
      return data;
    })
    .catch(error => {
      throw error;
    });
}

function getPriceList() {
    const url = 'https://api.digiflazz.com/v1/price-list';
    const sign = crypto
      .createHash('md5')
      .update(username + apiKey + 'pricelist')
      .digest('hex');
  
    const requestData = {
      cmd: 'prepaid',
      username: username,
      sign: sign
    };
  
    return axios.post(url, requestData);
  }

module.exports = {
    getPriceList,
    upDeposit,
    letsgo,
    cekDeposit,
    getCateBrand,
    skuCode,
}
