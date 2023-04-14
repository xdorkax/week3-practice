/*console.log ("loaded");
let carBrand = "Opel";
console.log ('carBrand',carBrand);

carBrand = "BMW";
console.log(carBrand);

let doorNumber = 5;

let isDiesel = true;

let fuel = null;
//ez egy komment//

let firstNames = ["Dorka" , "Márió" , "Bence" , "Edit"];

console.log(firstNames.length)
console.log (firstNames[2]);
console.log(firstNames[3]);
console.log(firstNames[firstNames.length-1]);

firstNames[1]="Ivett";
console.log(firstNames);

firstNames.push("Márió");
console.log(firstNames);

function myfirstFunction (firstName , lastName){
  console.log("My first function");
  return firstName+lastName;
}

console.log(myfirstFunction("Márk " , "AG"));

const cond1 = 2
const cond2 = 2
const num = 3

function doubleTheNumber(num) {
    let result = num*2
    return result
}
const doubleNumber = doubleTheNumber(7)
console.log(doubleNumber)
console.log (doubleTheNumber(7))

function score(letter){
  const scoreStr = 'a'
  if(letter === undefined){
    return 'Failed to send me letter'
  }else if(scoreStr === letter){
    return 'You nailed it!'

  }else{
    return 'Try again!'
  }
}
console.log(score())*/








let username;
let signupDate;

/*username = 'johnk';
signupDate = 'October 15, 2013';
console.log(`Hello, ${username}! You've been a member since ${signupDate}.`);

username = 'alberte';
signupDate = 'March 20, 2004';
console.log(`Hello, ${username}! You've been a member since ${signupDate}.`);

username = 'evab';
signupDate = 'June 4, 2019';
console.log(`Hello, ${username}! You've been a member since ${signupDate}.`);*/



function getWelcomeMessage(username, signupDate){
  console.log(`Hello, ${username}! You've been a member since ${signupDate}.`);
  return true
}

/*let userN ="Edit"
let userLastname="Selmeczi"
let wholeName = userN+userLastname
let wholeName = 'Név:{userN} {1+2}'
console.log(wholeName)*/

/*console.log(getWelcomeMessage("evab","June 4, 2019"))*/
getWelcomeMessage("johnk","June 4, 2019")


if (some expression that can be true or false) {
  // The code for the "true" branch goes here
  // That is, the code that we want to run when the above
  // expression evaluates to true
  // ...
  // ...
  // Potentially many lines of code
} else if(some expression that can be true or false) {
// The code for the "true" branch goes here
  // That is, the code that we want to run when the above
  // expression evaluates to true
  // ...
  // ...
  // Potentially many lines of code
}
else {
  // The code for the "false" branch goes here
  // That is, the code that we want to run when the above
  // expression evaluates to false
  // ...
  // ...
  // Again, potentially many lines of code
}