// Using a function to display object properties

var movie1;
var showMovieInfo;
var movie;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};
var movie2 = {};
movie = movie2;
movie2.title = "Vikram";
movie2.actors = "Kamal Hassan";
movie2.directors = "Lokesh Kanagaraj";
movie = movie2;
showMovieInfo(); 
/* Further Adventures
 *
 * 1) Add a call to showMovieInfo and run the program.
 *    What happens?
 *
 * 2) Declare a movie variable
 *    but don't assign it a value.
 *    Run the program. What happens now?
 *
 * 3) Create an empty object and
 *    assign it to the movie variable.
 *    Run the program again.
 *    Does the output change?
 *
 * 4) Add title, actors and directors properties
 *    to the movie object. Run one more time.
 *    Is the output as expected?
 *
 */
