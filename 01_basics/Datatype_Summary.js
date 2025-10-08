// # Primitive DataTypes 
 // It's Have 7 Types 
   // String 
  //  Boolean 
  // null empty  temp is not it's not have zero
  //  undefined it's not have any data in the variable 
  // Symbol  it's have used the uqiue the value 
  //BigInt It's hold the very long data 

// JavaScript is the Dynamic types  Languages  

const score  = 110;
const   scoreValue = 100.3;
const  isLoggedIn = false;

const outsideTemp = null ;

let userEmail;

const id = Symbol('123');
const  anotherId = Symbol('123');

console.log(id === anotherId);
 
// if you can create the bigInt Number to the any variable in the program than you can fix the end of the number is (n) than you can print the BigInt Number as a output :

const bigNumber =34334757453478345734598867843567458n;

console.log(bigNumber);

 // Second Data Types NonPrimitive Data types 

    // Array 
    // Objects
    // Functions

const heros  = [ "shaktiman" , "naagraj" , "doga"];

let myobj = {

  name: "Ritesh",
  age  : 22 ,
}

 const myFunction  = function ()
{

console.log("Hello Ritesh");

}

console.log(typeof (bigNumber));  // output is bigint

console.log(typeof(myFunction));  // output is Function Object

console.log(typeof(heros));  //   output is object 

console.log(typeof(outsideTemp)); //  null it's datatype is object 

console.log(typeof(anotherId));  // output is Symbol 
