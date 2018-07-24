console.log("hi arrayMethods.js");

let colors = ["red", "blue", "green", "yellow", "orange", "teal"];

colors.forEach((item, index) => {
   let newColorString = index + " I like this color: " + item;
   console.log(newColorString);
});

// same as:
// for (let i = 0; i < colors.length; i++) {
//    let newColorString = i + " I like this color: " + colors[i];
//    // console.log(newColorString);
// }

/* Both map and filter do not modify the array.
Instead they return a new array of the results. */

/*
  The map method lets you create a -->>new array<<-- after
  executing some logic on each item in the original
  array
 */
// red
let reverseColors = colors.map((color) =>{
   let wordArray =  color.split("");
   let reverseArray = wordArray.reverse();
   return reverseArray.join("");
});

console.log("reverseColor", reverseColors);

// same as:
// use comments to avoid re-instantiating a let
// let reversedColors = [];
// for (let i = 0; i < colors.length; i++) {
//   let reversed = colors[i].split("").reverse().join("");
//   reversedColors.push(reversed);
// }
// console.log("reversedColors", reversedColors);

// same and call an extra method
// use comments to avoid re-instantiating a let

//make a method that does something really well
const colorReverse = (color) => {
   let reverse = color.split("").reverse().join("");
   return `<li>${reverse}</li>`
}




let reversedColorsList = ``;
let reversedColors = colors.map((color) => {
   reversedColorsList += colorReverse(color);
   return reversedColorsList;
});
console.log("reversedColors", reversedColors);

let reversedNamesList = ``;
let names = ["Brenda", "Nick", "Klaus", "Janet", "Helen"];

let reversedNames = names.map((str) => {
   reversedNamesList += colorReverse(str);
})


document.getElementById("colors").innerHTML = reversedColorsList;
document.getElementById("names").innerHTML = reversedNamesList;

/*
  The filter method ALSO creates a new array, which will
  be populated with items from the original array
  that match a certain criteria.
 */

let fourLetters = colors.filter((supertaco) => {
   return supertaco.length === 4;
});

console.log("fourletter colors", fourLetters);

// same as:
// let fourLetters = [];
// for (let i = 0; i < colors.length; i++) {
//   if (colors[i].length === 4) {
//     fourLetters.push(colors[i]);
//   }
// }
// console.log("fourLetters", fourLetters);







