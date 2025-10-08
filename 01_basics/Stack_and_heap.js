console.log("Hello duniya");

//   Stack Memory 
// it's used in the  Primitive datatypes

//  Heap Memory 
// it's used in the NoPrimitive DataTypes 
 
// Concept of the Stack memory location it's pass the another   varible to the copy of the original data 

let myYoutubename = "RiteshSahani@gmail.com";

let anothername = myYoutubename ;

anothername = "RiteehShani@gmail.com";

//  myYoutubename = "Name";
console.log(myYoutubename);

console.log(anothername);




   //  concept of the Heap memory  Location 
let user  = {

    email: "user@google.com",
    upi : "user@ritesh"
}

let twouser = user ;
 
twouser.email = "Ritesh@google.com";

console.log(user.email);    // it's gave the same value of the user and 
console.log(twouser.email);  //   twouser because of the it's take the refrence not the copy of the value :