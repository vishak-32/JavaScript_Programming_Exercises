// Using the same function with multiple objects

var player1;
var player2;
var player;
var showPlayerInfo;
var showPlayerHealth;
var showPlayerPlace;

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerInfo = function () {
    console.log(player.name);
    console.log("------------------------------");
    console.log(player.name + " is in " + player.place);
    console.log(player.name + " has health " + player.health);
    console.log("------------------------------");
    console.log("");
};

player = player1;
showPlayerInfo();

player = player2;
showPlayerInfo();

showPlayerPlace = function () {
    console.log(player.name + " is in " + player.place);
};

showPlayerHealth = function () {
    console.log(player.name + " has health " + player.health);
};

/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */
