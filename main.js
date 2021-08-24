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


var students = [{
  id: 129870423,
  name: "Jimmy",
  fullName: "Jimmy Bob",
}, {
  id: 129850840932848,
  name: 'Joey',
  fullName: 'Joey Bob'
},{
  id: 21879343,
  name: "Phillip",
  fullName: "Phillip Cheesy Steak"
}]


// REVIEW use the debugger to pause code execution and step through

// TODO where does the array come from
for(let i = 0; i < students.length; i++){
  //    ^ incrementor
  //           ^^^^^^^^^^^^^^^^^^ Conditional
  //                                ^ post iterative action

  // what is your name?
  console.log("the time is", Date.now())
  console.log(students[i].name)
}




function showPeopleWithNameThatStartsWith(letter, persons){
  for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    if(person.name.startsWith(letter)){ 
      console.log(`
      <div>
        <h1>${person.name}</h1>
        <sup>${person.id}</sup>
        <p>${person.bio}</p>
      </div>
      `)
    } 
  }
}

let jim = students.find(student => student.name.startsWith("Jim"))
let joshes = students.filter(student => student.name === "Josh")
students.forEach(student => {
  student.cohort = "fall21"
})


// destructive
students.splice
students.pop
students.shift
students.unshift
students.push
students.sort








// Variables
const FAVNUM = 7 // constants cannot be redifined

// FUNCTIONS
// HOISTING handles all declarations first then runs back to do execution


/**
 * @param {{name: string}} person
*/
function greet(person){
  document.querySelector('body #student').innerHTML = `<b>Hello ${person.name}</b>`
}
greet({name:"Jake"})


function drawStudents(){
  let template = ''
  students.forEach(student => {
    template += `
    <div class="col-lg-4">
      <div class="card p-3">
          <h1>${student.name}</h1>
          <p>
            <em>${student.id}</em>
          </p>
      </div>
    </div>
      `
  })

  document.getElementById('students').innerHTML = template
}



function toggleDebug(){
  
  if(document.body.style.backgroundColor === "orange"){
    document.body.style.backgroundColor = ""
  }else{
    document.body.style.backgroundColor = "orange"
  }
  document.body.classList.toggle('debug')
}




function add(x,y){
  //         ^ ^ parameters
  return x+y
}

// Dictionary
// var students = {
//   billy: {},
//   tom: {}
// }



drawStudents()