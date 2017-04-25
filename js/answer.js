var answer = {}
answer.YesNo = function (input) {
    return String(input).match(new RegExp("Y|N", "gi"))[0];
}
answer.Decide = function (options, userValue) {
    for (var opt in options) {
        if (options[opt] == userValue)
            return userValue;
    }
    // return 'Arrow'; // works
}
module.exports = { answer };
