var crypto = require('crypto-js');

var secretMsg = {
	name: 'James',
	secretName: '007'
};
var secretKey = '123abc';

//Encrypt
var encMsg = crypto.AES.encrypt(JSON.stringify(secretMsg), secretKey);
console.log('Encrypted Msg: ' + encMsg);

//Decrypt
var bytes = crypto.AES.decrypt(encMsg, secretKey);
var decMsg = JSON.parse(bytes.toString(crypto.enc.Utf8));
console.log('Decrypted Msg: ' + decMsg);
console.log('Decrypted Msg Name: ' + decMsg.secretName);
