console.log("Starting the Password Manager");

var storage = require('node-persist');
storage.initSync();

//storage.setItemSync('accounts', [{
//	username: 'Deepak',
//	balance: 100
//	},{
//	username: 'Mydata',
//	balance: 1000
//	}]
//);

var _accounts = storage.getItemSync('accounts');

console.log(_accounts);

// Push the new records
_accounts.push({
	usrname: 'Jen',
	balance: 55
	});

// Save file
storage.setItemSync('accounts', _accounts);
