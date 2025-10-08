// Single tan object 
// const TinderUser  =  new Object();

//console.log(TinderUser); //  {}
// Non-Single  tan object 

const Tinderser = {} 
Tinderser.id = "123abc"
Tinderser.name = "RItesh Sahani"
Tinderser.isLoggedIn = false

// console.log(Tinderser);  // output is  {}

//console.log(`${Tinderser.Full_name ="Ritesh Sahani"}, ${Tinderser.back= "Me"}  ${Tinderser}`)

// const regularuser = {
//     email:"some@gmail.com",
//     FullName: {
//         userFullname :{
//             Firstname : "Ritesh",
//             lastName:"Shani"
//         }
//     }
// }
// console.log(regularuser);
// console.log(regularuser.FullName);
// console.log(regularuser.FullName.userFullname);
// console.log(regularuser.FullName.userFullname.Firstname);
// console.log(regularuser.FullName.userFullname.lastName);


// const obj1 = {
//     1: "a" ,
//      2:"b"
// }
// const obj2 = {
//     3:"a",
//     4: "b"
// }

// const obj = {
//     5:"a",
//     6: "b"
// }

// const obj4 = obj1.concat(obj2);
// console.log(obj4);
// const obj3 = {...obj1 , ...obj2 , ...obj};  // Important 

// console.log(obj3); // it's give the same output as the obj6 and obj5

// const obj6 = Object.assign( obj1 ,  obj2);
// console.log(obj6);
// const obj5 = Object.assign({} , obj1 , obj2);
// console.log(obj5);

// const objet = Object.assign({} , obj , obj1 ,obj2);
// console.log(objet);

// If the value return the database

const users = [
{
    id: 1,
    email : "h@gmail.com"  // so many loop are create the array by using this Syntax
},
{
   
},

{
    id: 1,
    email : "h@gmail.com"
},

]

console.log(Tinderser);
        //  it's is the array object  

// Important Object.keys( tinderser) is to convert the array:
console.log(Object.keys(Tinderser));  // it's  return the key in the array from 
console.log(Object.values(Tinderser));  // it's return the value in the array from in the Tinderser:object
console.log(Object.entries(Tinderser)); //  it's every entries convert the single single array

console.log(Tinderser.hasOwnProperty('isloggedIn'));//  it's return true because you can give the the isloggedIn in false value  means koi ve value nahin hi isLoggedIn  name kee



