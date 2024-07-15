// Displaying a player's information

var showPlayerName = function (playerName) {
    console.log(playerName);
};

var showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

var showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};

var showLine = function (length, char = '-') {
    var line = new Array(length + 1).join(char);
    console.log(line);
};

var showPlayerInfo = function (playerName, playerPlace, playerHealth) {
    showLine(10, '*');
    console.log('* ' + playerName + ' *');
    showLine(10, '*');

    showLine(30);
    showPlayerPlace(playerName, playerPlace);
    showPlayerHealth(playerName, playerHealth);
    showLine(30);
};

var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerInfo(player1.name, player1.place, player1.health);
showPlayerInfo(player2.name, player2.place, player2.health);



/* Further Adventures
 *
 * 1) Create a function called showLine
 *    that logs a line of dashes to the console.
 *    ----------------------------
 *
 * 2) Update the showPlayerInfo function to
 *    use the showLine function rather than
 *    logging dashes to the console directly.
 *
 * 3) Create and use a showBlankLine function
 *    for logging a blank line to the console.
 *
 */
