import CryptoJS from 'crypto-js';

const KEY_CRYPT_PASSWORD = "Password";

export const encrypt = (text) => CryptoJS.AES.encrypt(text, KEY_CRYPT_PASSWORD).toString();
export const decrypt = (text) => {
    var bytes = CryptoJS.AES.decrypt(text, KEY_CRYPT_PASSWORD);
    return bytes.toString(CryptoJS.enc.Utf8);
}