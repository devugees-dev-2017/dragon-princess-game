var Hero = { health: 300 };
var Dragon = { health: 400 };

Hero.onFightDragon = function (callback) {
    console.log('fighting dragon ...');
    callback();
}

Hero.savePrincess = function () {
    console.log('save princess');
}

Dragon.bark = function () {
    console.log('waff waff');
}

module.exports = { Hero, Dragon };