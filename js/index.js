var readline;
var prompt = require('./node-prompt');
var YesNo = require('./answer');

function killDragon(input) {
    // console.log(String(input).match(new RegExp("Y|N", "gi")));
    switch (YesNo(input)) {
        case "y": ;
        case "Y":
            console.log('Really?');
            readline.close()
            break;
        case "n": ;
        case "N":
            console.log('Ok, then run!')
            readline.close()
            break;
    }
}
readline = prompt('Feel like killing a dragon today?', killDragon);