 
// let isLoggedIn  = false ;

// if(isLoggedIn);
// {

//     console.log("User not Recognised");    // har ek console.log run hoga  kyuki isLoggedIn mai false is isliye 
//     console.log("Logged In");
//     console.log("Rules ke mkc");
// }

// in the javascript moths are start counting is 0 too 11 total is 12  

// let myDate =  new Date() ;

// console.log(myDate.toString());  // sun oct 05 2025 and time [03:44:17]  [GMT+0000] (Coordinated Unversal Time)
// console.log(myDate.toDateString()); // it's  give the day and months_name  and  date and also give the year like : sun oct 05 2025
// console.log(myDate.toLocaleString());  // it's give the real date like [10/5/2025] and time  like : [03:44:17 AM]
// // console.log()
// console.log(typeof(myDate));  // date is the object  because of it's hold the same data in the  varible 


// Important 

// let myCreateDate =  new Date(2025 , 0 , 23);
// console.log(myCreateDate.toString());


// let myDate = new Date (1990 , 5 , 16);
// console.log(myDate.toString());

// let FutureDate  =  new Date(2030  , 0 , 1);
// console.log(FutureDate.toString());

// let Future =  new Date (2026 , 0 , 1);
// console.log(Future.toString());  // My Birthday Date 2026 Thusday 

// let FutureDates  =  new Date(2026 , 7 , 17); // if you can't type the single digit than it's count start with the zero 
// console.log(FutureDates.toString()); // Monday Aug 17 2026
// console.log(FutureDates.toLocaleDateString());
// console.log(FutureDates.toLocaleString()); //  local String are gaive the date and time also 

// This syntax is [yy-- mm -- dd]
//  let futured = new Date("2023-01-01"); // if you are used the semicolumn than it's start the months count 1:
//  console.log(futured.toLocaleString());
//  console.log(futured.toString());

 // This Syntax is [ "dd--mm -- yy"] :

 // Important TimeStamp

//  let  myTimeStamp  = Date.now();

//  console.log(myTimeStamp);  // it's give the time value in the milisecond 

//  let fut = futured.getTime();

//  console.log(fut.toLocaleString());

//  // if you can find the present date than it's you can used [Date.now()]

//  console.log(Date.now()); // it's give the date in the milesecond 

//  // to covert the Second with the help of [divided the 1000] and also used the Math.floor function the give the execpt second time 

//  console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate.getDate());
// console.log(newDate.getMonth()+1); // because of the it's start counting months 0 :
// console.log(newDate.getDay());
// console.log(newDate.getTime());
// console.log(newDate.getFullYear());


// Important shorthand notation  //
 console.log(` Date is ${newDate.getDate()}  and the months is ${newDate.getMonth()+1} and year is ${newDate.getFullYear()} and time is  ${Math.floor(newDate.getTime()/1000)} `);

 // Important Method   varible_name.toLocaleString():
 newDate.toLocaleString('default' , {
   weekday : "long",
 });










