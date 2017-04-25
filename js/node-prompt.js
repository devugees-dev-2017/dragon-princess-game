var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


var prompt = function (message, callback) {
  rl.on('line', callback);
}

module.exports = prompt;


