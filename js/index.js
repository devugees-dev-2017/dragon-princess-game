var readline, answer;
var prompt = require('./node-prompt');
var YesNo = require('./answer').answer.YesNo;
var Decide = require('./answer').answer.Decide;
var hero = require('./actions').Hero;
var dragon = require('./actions').Dragon;

var userWeapon = "";

function killDragon(input) {
    //dragon.bark();

    userWeapon = Decide(['Sword', 'Arrow', 'Hands'], input);
    readline.close()
    if (dragon.health > 0) {
        //readline.close();

        switch (userWeapon) {
            case "Sword":
                dragon.health = dragon.health - 70;
                hero.health = hero.health - 30;
                console.log("you hit the dragon with a 70 points damages ");
                console.log("the dragon have " + dragon.health + " health points left");
                console.log("you have " + hero.health + " health points left");
                break;
            case "Arrow":
                dragon.health = dragon.health - 50;
                hero.health = hero.health - 50;
                console.log("you hit the dragon with a 50 points damages ");
                console.log("the dragon have " + dragon.health + "health points left");
                console.log("you have " + hero.health + "health points left");
                break;
            case "Hands":
                dragon.health = dragon.health - 10;
                hero.health = hero.health - 70;
                console.log("you hit the dragon with a 50 points damages ");
                console.log("the dragon have " + dragon.health + "health points left");
                console.log("you have " + hero.health + "health points left");
                break;
            default:
                console.log("you did not chose any valid weapon");
        }
        if (dragon.health <= 0) {
            console.log("you killed the dragon ");
        }
        else if (hero.health <= 0) {
            console.log("the dragon killed you ");
        }
    }
}

function askToKillDragon(input) {
    // console.log(String(input).match(new RegExp("Y|N", "gi")));
    answer = YesNo(input);
    switch (answer) {
        case "y": ;
        case "Y":
            console.log('Really?');
            hero.onFightDragon(killDragon);

            break;
        case "n": ;
        case "N":
            console.log('Ok, then run!');
            readline.close()
            hero.savePrincess()
            break;
    }
}
readline = prompt('Feel like killing a dragon today?', askToKillDragon);