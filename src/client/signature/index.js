const sha1 = require('./sha1')
const base64arraybuffer = require('./base64-arraybuffer')
const CryptoJS = require("./crypto-js");
const key = CryptoJS.enc.Utf8.parse('hz+/yR1HT+KBu8dF');

function stringfy(data) {
  if (!data || typeof data !== 'object' || data.constructor === Array) {
    console.log(2)
    return
  }
  let params = []
  for (let key in data) {
    if (data[key] !== null && data[key] !== undefined && data[key].constructor !== Array && data[key] !== '') {
      params.push(`${key}=${data[key]}`)
    }
  }
  return params.sort().join('&')
}

//十六进制字符串转字节数组
function Str2Bytes (str) {
  var pos = 0;
  var len = str.length;
  if(len %2 != 0) {
    return null;
  }
  len /= 2;
  var hexA = new Array();
  for(var i=0; i<len; i++) {
    var s = str.substr(pos, 2);
    var v = parseInt(s, 16);
    hexA.push(v);
    pos += 2;
  }
  return hexA;
}
module.exports = function (data) {
  let stringResult = stringfy(data)
  let sha1Bytes = Str2Bytes(sha1(stringResult))
  let base64String = base64arraybuffer.encode(sha1Bytes)
  let ciphertext = CryptoJS.AES.encrypt(base64String, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  return ciphertext.toString()
}
