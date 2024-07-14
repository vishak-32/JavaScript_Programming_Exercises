// Using the same function with multiple objects

var sale1;
var sale2;
var sale3;
var sale;
var calculateTax;
var displaySale;
var calculateAndDisplayTax;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };
sale4 = { price: 200, taxRate: 18 };

calculateAndDisplayTax = function () {
    sale.tax = sale.price * sale.taxRate / 100;
    sale.total = sale.price + sale.tax;
    
    console.log("price = $" + sale.price);
    console.log("tax @ " + sale.taxRate + "% = $" + sale.tax);
    console.log("total cost = $" + sale.total);
    console.log("------------------------------"); 
};

sale = sale1;
calculateAndDisplayTax();

sale = sale2;
calculateAndDisplayTax();

sale = sale3;
calculateAndDisplayTax();

sale = sale4;
calculateAndDisplayTax();


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
