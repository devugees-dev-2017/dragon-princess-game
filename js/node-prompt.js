var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


var prompt = function (message, callback) {
  console.log(message);
  rl.on('line', callback);
  return rl;
}

module.exports = prompt;


