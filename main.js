// NOTE
// REVIEW
// STUB
// FIXME
// ANCHOR
// SECTION
// TODO

// leFavNum camelCase in js we use this
// le-fav-num kebob case in html when referencing css selectors



// Primatives
String
Number
Boolean
null
undefined
NaN


// References
Array
Object


// Let's Break down primatives
// REVIEW primatives are passed by value

// REVIEW STRINGS!!!!
// denoted with quotes
// ' " `

let message = "Let's go to the mall"
let message2 = 'Let\'s go to the malls!!!' // escape
let message3 = `Jimmy said "${message2.toUpperCase()}"` // string interpolation
// NOTE                                ^^^ this does not change the base value

let randomPropName = "full name"

console.log(message3)

// REVIEW NUMBERS

let favNum = 7
let leFavNum = favNum - 3 // uses favNum value only
favNum = favNum + 1 // actually reassigns the value of favnum
console.log( message + favNum + 5 * add(20, add(2,100) ) ) // order of operations apply here


// BOOLEAN & CONDITIONALS
true
false
//  truthy vs falsy

// Brandon Eich creator of JavaScript
// empty strings are falsy 
// strings with any value are truthy
// all numbers besides 0 are truthy
// false is falsy 

if(message){
  console.log('the conditional was true')
}

if(!message){ // ! not operator
  console.log("please provide a message")
}

var age = 21

if(age >= 21){
  console.log("can drink")
}else{
  console.log("go away kid")
}


// Let's breakdown Reference Types
// these types are passed by reference


let me = {
  name: "Jake Overall",
  hairColor: "brown",
  eyes: {
    left: {
      color: "brown",
      vision: "20/200"
    },
    right: {
      color: "brown",
      vision: "20/20"
    }
  },
  "full name": "Jim bob jones"
}

// DOT NOTATION
console.log(me.eyes?.left?.color) // elvis operator
console.log(me.hair?.left?.color) // elvis operator prevents code from breaking

// BRACKET NOTATIONS
console.log("bracket notation", me["eyes"]?.left["color"])
console.log(me[randomPropName]) // only thing that allows us to use a variable as property name


// ARRAYS
// group of items
// denoted with the square braces []


let cats = [{
  name: "Garfield",
  age: 18,
  firstCartoonAirDate: ''
}, {
  name: "Felix",
  age: 85,
  firstCartoonAirDate: ''
}, {
 name: "Sylvester",
 age: 46,
 firstCartoonAirDate: ''
}, {
  name: "Tom",
  age: 37,
  firstCartoonAirDate: ''
}]





// Variables
const FAVNUM = 7 // constants cannot be redifined

// FUNCTIONS
// HOISTING handles all declarations first then runs back to do execution
function add(x,y){
  //         ^ ^ parameters
  return x+y
}