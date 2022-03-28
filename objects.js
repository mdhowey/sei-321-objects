/**
 * Object Literal Notaion
 * Is there a difference between person1 and person2?
 */

const person1 = { eyes: 'brown', height: '1.87' }

const person2 = {
  eyes: 'brown',
  height: '1.87', // < --trailing comma... is this allowed ?
}

// ** How many properties does `person1` contain? person2? **
// ** What are the keys(AKA property names) of person1? Of person2? **
// ** What are the property values of `person1`? Of person2? **
// ** What are the data types of the keys of person1? Of person2? **

/**
 * Dot Notation vs. Bracket Notation
 */

// *Dot Notation*
let animal1 = {
  kitty: 'meow',
  puppy: 'woof'
};

let noise1 = animal1.kitty;

// console.log(noise1);

// You Do 💪: Adding / Updating Properties Practice

// *Bracket Notation*

// Remember how brackets are used with arrays?
const zoo_inventory = ['tiger', 'monkey', 'shark']

// console.log(zoo_inventory[1])
// ** What will this print to the console? **

let animal2 = {
  kitty: 'meow',
  puppy: 'woof'
};

let noise2 = animal2['kitty'];

// console.log(noise2);
// ** What will this pring to the console? **

// You Do 💪: Square Bracket Notation

// *Hungry for more?*  

// Checking if an Object has a Property --> You Do!

// *hasOwnProperty()*

// create object using Object Literal notation
let object = {};

// add properties to object
object.string = 'String';
object.number = 4;
object.array = ['this','is','an','array'];

// use .hasOwnProperty() to check if object has a property
// console.log(object);
// console.log(object.hasOwnProperty('string'));
// console.log(object.hasOwnProperty('number'));
// console.log(object.hasOwnProperty('array'));
// console.log(object.hasOwnProperty('waffle_pants'));

// *in operator*
// A little out of the scope of this lesson. See me during Office Hours for a deep dive into this keyword.

// Deleting a Property
const geniuses = {
  Einstein: true,
  Newton: true,
  Snooki: false
};

delete geniuses.Snooki;

// console.log(geniuses);

/**
 * Iterating Over Objects
 */

// *for...in loop*
// for (let key in geniuses) {
//   console.log(`The value of the ${key} property is ${geniuses[key]}`);
// }

// // *Object.keys(obj) returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would *
// Object.keys(geniuses).forEach(function (val) {
//   console.log(val);
// });

// // *Object.values(obj) --> returns an array of a given object's own enumerable property values*
// Object.values(geniuses).forEach(function (val) {
//   console.log(val);
// });

// // *Object.entries(obj) --> returns an array of a given object's own enumerable string-keyed property [key, value] pairs*
// Object.entries(geniuses).forEach(function (val) {
//   console.log(val);
// });

/**
 * Methods --> a property that holds a function 
 */



// We Do 💪: Build Methods