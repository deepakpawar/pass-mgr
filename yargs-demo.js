var argv = require('yargs').argv;

console.log(argv);

var cmd = argv._[0];

if (cmd == 'hello') {
	if (typeof argv.fn !== 'undefined')
		var fn = argv.fn;
	if (typeof argv.ln !== 'undefined')
		var ln = argv.ln;

	console.log('Hello ' + argv.fn + ' ' + argv.ln);
//} else if (cmd == 'hello') {
//	console.log('Hello World !!');
} else {
	console.log('Hello Mystery !!!');
}
