var YesNo = function (input) {
    return String(input).match(new RegExp("Y|N", "gi"))[0];
}
module.exports = YesNo;
