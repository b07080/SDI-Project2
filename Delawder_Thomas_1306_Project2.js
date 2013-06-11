// Thomas Delawder
// SDI-1306
// Project2


// Start
// My Variables

var gameDetails = "\"Bug Hunters:\" When Roaches Attack";   	// variable String with escapes to quote in company name
var playerName = "\"Bug Man John\"";		        	// variable String with escapes to quote in character name
var bigBug = "Nasty Boss Roach";				// variable String
var bugHP = 25;							// variable Number
var poisonDamage = 5;						// variable Number
var bugAlive = true;			   			// boolean value
var attack = true;						// boolean value


// My Outputs

console.log("In this game " + gameDetails + ", " + playerName + " is the answer to your pest problems!");
console.log("The first level " + playerName + " will battle: " + bigBug + ".");
console.log(bigBug + " has " + bugHP + " hit points.");
console.log("You must choose to either attack or not.");
console.log("The \"Poison Attack\" will lower the bug's hit points by " + poisonDamage + ".");
console.log("Would you like to attack " + bigBug + "?");
console.log("It is " + bugAlive + " that " + bigBug + " must die.");


// Boolean Conditionals with math

if (attack === true) {
    console.log("Your attack has dropped the bug's HP to:");
	console.log( bugHP - 5); 
	if (bugAlive === true) {
		console.log("Keep attacking this bug is still alive!");
	} else {
		console.log("You did it! You killed " + bigBug + "!");
	};
} else {
	console.log("There was no effect to " + bigBug + ".");
};


// Number Conditional - String conditional

if (bugHP <= 0) {
    console.log(bigBug + "'s HP is all gone!");
    } else {
        console.log(playerName + " needs to attack " + bigBug + " again until there is no more HP");   
};


//  Finish
