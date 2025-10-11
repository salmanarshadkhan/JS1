/*Write a JavaScript program that:
Takes two inputs — price and discount percentage.
Calculates the final price after applying the discount.
If the price or discount is invalid (negative or more than 100), show "Invalid input".
If the final price is more than 5000, show "You get a free gift!".*/
const prompt = require("prompt-sync")();

let price = parseFloat(prompt("Enter the price of the product:"));
let discount = parseFloat(prompt("Enter the discount percentage:"));
if (price < 0 || discount < 0 || discount > 100) {
  console.log("Invalid input");
} else {
  const td = (price / 100) * discount;
  const final = price - td;
  console.log("So the final discount after is", final);
  if (final > 5000) {
    console.log("You get a free gift!");
  }
}
//All done for today