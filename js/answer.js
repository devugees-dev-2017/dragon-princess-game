var readlineSync = require('readline-sync');
var answer = {}
answer.YesNo = function (input) {
    return String(input).match(new RegExp("Y|N", "gi"))[0];
}
answer.Decide = function (question, options) {
    var index = readlineSync.keyInSelect(options, question)
    return options[index]
}
module.exports = { answer };
