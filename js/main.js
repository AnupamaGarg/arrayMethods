console.log("Hello main.js");

let softdrinks = ["Coke", "Dr. Pepper", "Sprite", "Root Beer", "Orange", "Cold Brew"];

console.log(softdrinks.length);
console.log(softdrinks.indexOf("Cold Brew"));

console.log("softdrinks string", softdrinks.toString());

console.log("softdrinks join", softdrinks.join(" and I really like  "));

let hotdrinks = ["Coffee", "Tea", "Hot Chocolate"];

let allDrinks = softdrinks.concat(hotdrinks, softdrinks);
console.log("all drinks", allDrinks);

console.log(allDrinks.shift());
console.log(allDrinks.pop());

allDrinks.push("Cold Brew");
console.log("allDrinks", allDrinks);
let getMe = allDrinks.shift();
console.log("getMe", getMe);


console.log("softdrinks.splice(1)", softdrinks.splice(1, 3));
//starting position and howmany to remove

softdrinks.splice(1, 1, "Diet Cherry Coke"); //where to start, howmany to remove, items to add
console.log("softdrinks.splice", softdrinks);

let newVersion = softdrinks.slice(1, 3); //slice out items and put into new array
console.log("newVersion", newVersion); //notice original stays intact

console.log("softdrinks.splice", softdrinks);











