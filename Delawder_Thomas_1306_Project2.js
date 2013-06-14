// Thomas Delawder
// SDI-1306
// Project2


// Start
// My Variables



//  Finish

var fatCopsLoveDonuts = true;
var pastry = "donut";
var cup = "coffee";
var donutTray = 1;
var myArray = ["Franko", "Jimmy", "Ledo"];
var seatForThree = true;
var bakery = "Schmeegals";
// lines 



var findSeat = function() {
    
    console.log("Three cops walk into " + bakery + " bakery and pick a table, they need 3 chairs.");
    
    for (var i = 2; i <=3; i++) {
    
        console.log("There are " + i + " chairs at the table.");
        
        if (i < 3) {
            console.log(myArray[1] + ": Lets look around for another chair... Heres 1, I'll slide it over");
            
        } else {
            console.log(myArray[0] + ": This looks good we can sit here I'll grab some menus.");
            }
    }
    return i;
    }

var seatFound = findSeat();
console.log("Time to place an order for the starving fat cops.");

//  _____________


















// Array Function

var soldCount = function(donutTray) {

    while (donutTray > 0) {
        
        console.log("The " + myArray.length + " policemen look down at the " + donutTray + " donuts on the tray."); 
        console.log(myArray[0] + ", " + myArray[1] + " and " + myArray[2] + " each pick up one donut and eat it.");
        console.log("FAT COPS: nomn nomn yum nomn yum...");
        
        donutTray = donutTray - 3;
        
        if (donutTray > 0) {
            console.log("Each one then reaches for their " + cup + " lifts it up and CHEERS.");
            console.log("FAT COPS: Gulp Gulp, ahhhh.  ");
            console.log("Still hungry for their favorite pastry delights...");
            
        } else {
            console.log("Looking down at the table in disbelief....");
            console.log(myArray[2] + ": OH NO!, we are out of donuts!");
            
        }// End IF
        
        if (donutTray === 1) {
            return donutTray;
        }
        
    }// End while LOOP
    return donutTray;
    

}// End soldCount

soldCount(12);

var finalCount = soldCount(0);
console.log("Donuts left for fat cops: " + finalCount);
console.log(myArray[0] + ", " + myArray[1] + " and " + myArray[2] + " start to argue over who buys the next round of pastries!");
console.log("It is " + copsLoveDonuts + " that fat cops love donuts.");

