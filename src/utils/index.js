import crypto from 'crypto-js';

export const decodeMessage = (text) => {
  if (text) {
    let bytes = crypto.AES.decrypt(text, process.env.REACT_APP_PUBLIC_KEY);
    let message_decode = bytes.toString(crypto.enc.Utf8);
    return message_decode
  } else {
    return ""
  }
}

// export const decodeMessageNew = (text) => {
//   if (text) {
//     return cryptr.decrypt(text)
//   } else {
//     return ""
//   }
// }