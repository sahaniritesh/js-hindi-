// SingleTon

// Object Literals

// Object.create   constructor Method
const mySym = Symbol("key1");

const Jsuser = 
{
  name : "Ritesh" ,
  age : 28 ,
  gmail : "sahaniritesh@gmail.com " ,
  loaction  : "UttarPradesh" ,
  isLogged : false ,
  "Full_name": "Ritesh Sahani",
  [mySym] : "Mykey1" ,
  mySym : "Hello",
  lastLoginDays : ["Monday" , "Saturday" , "Sunday" ]  // object in input types
}
 
// How to change the value in javascript 
//Jsuser.gmail = "RiteshSahani@gmail.com"
// if you want to freeze the user value to used the 
// to used the Object.freeze (jsuser)
//Object.freeze(Jsuser);

//console.log(Jsuser);

// How to access in javascript 

// console.log(Jsuser.name);
// console.log(Jsuser.gmail);
// console.log(Jsuser.isLogged);
//console.log(`${Jsuser.name} and ${Jsuser.gmail}  and ${Jsuser.isLogged} and ${Jsuser.lastLoginDays}`);
//console.log(Jsuser["gmail"]);
//console.log(Jsuser["Full_name"]);  // Because of the Object to give the varible name Like : "Full_name" = "Ritesh Sahani" if you want to access the varible FUll_name than we are used  this method 

//console.log(Jsuser.mySym);
//console.log(typeof(Jsuser.mySym))  // output is String it's don't give return type as the Symbol like 

// To return the Symbol in return type

//console.log(Jsuser[mySym]); // Syntax 
//console.log(typeof Jsuser[mySym]); // Datatypes


Jsuser.greeting = function () {
  console.log("hello Js User");
  
}

console.log(Jsuser.greeting);  // and if you can used the Function as the method  the output is undefined

//  and than you can  used the function as the function like console.log(Jsuser.greeting())

// console.log(Jsuser.greeting()); 

Jsuser.greetingtwo =  function () 
{

console.log(`Hello JS user ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());
