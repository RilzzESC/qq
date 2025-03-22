const fs = require('fs');
const chalk = require('chalk')
const toMs = require('ms')

function checkVIPUser(userId, _dir) {
  try {
    const vipData = _dir;
    return vipData.some(user => user.id === userId);
  } catch (error) {
    console.error('Error reading VIP data:', error);
    return false;
  }
}
const addVIPUser = (userId, expired, _dir) => {
  if (expired === undefined) {
      expired = 'PERMANENT'
  } else {
      expired = expired
  }
  
  let expired_at = 'PERMANENT'
  
  if (expired === 'PERMANENT') {
      expired_at = 'PERMANENT'
  } else {
      expired_at = Date.now() + toMs(expired)
  }

  const obj = { id: userId, expired: expired_at }
  _dir.push(obj)
  fs.writeFileSync('./src/role/vip.json', JSON.stringify(_dir, null, 2))
}
const getVIPPosition = (userId, _dir) => {
  let position = null
  Object.keys(_dir).forEach((i) => {
      if (_dir[i].id === userId) {
          position = i
      }
  })
  if (position !== null) {
      return position
  }
}
const addVVIPUser = (userId, expired, _dir) => {
  if (expired === undefined) {
      expired = 'PERMANENT'
  } else {
      expired = expired
  }
  
  let expired_at = 'PERMANENT'
  
  if (expired === 'PERMANENT') {
      expired_at = 'PERMANENT'
  } else {
      expired_at = Date.now() + toMs(expired)
  }

  const obj = { id: userId, expired: expired_at }
  _dir.push(obj)
  fs.writeFileSync('./src/role/vvip.json', JSON.stringify(_dir, null, 2))
}

const addPATNERUser = (userId, expired, _dir) => {
  if (expired === undefined) {
      expired = 'PERMANENT'
  } else {
      expired = expired
  }
  
  let expired_at = 'PERMANENT'
  
  if (expired === 'PERMANENT') {
      expired_at = 'PERMANENT'
  } else {
      expired_at = Date.now() + toMs(expired)
  }

  const obj = { id: userId, expired: expired_at }
  _dir.push(obj)
  fs.writeFileSync('./src/role/patner.json', JSON.stringify(_dir, null, 2))
}
const addPREMIUMUser = (userId, expired, _dir) => {
  if (expired === undefined) {
      expired = 'PERMANENT'
  } else {
      expired = expired
  }
  
  let expired_at = 'PERMANENT'
  
  if (expired === 'PERMANENT') {
      expired_at = 'PERMANENT'
  } else {
      expired_at = Date.now() + toMs(expired)
  }

  const obj = { id: userId, expired: expired_at }
  _dir.push(obj)
  fs.writeFileSync('./src/role/premium.json', JSON.stringify(_dir, null, 2))
}

module.exports = {
  checkVIPUser, 
  getVIPPosition,
  addVIPUser,
  addVVIPUser,
  addPATNERUser,
  addPREMIUMUser
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
