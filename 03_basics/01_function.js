// First Function in  javascript

// function sayMyName ()
// {
//     console.log("R");
//     console.log("I");
//     console.log("T");
//    console.log("E");
//     console.log("S");
//     console.log("H");
// }
//  sayMyName()

function addTwoNumber(number1 , number2) {
   const    number3 =  number1 + number2
    console.log(number3)
    
}
 const result  =  addTwoNumber ( 3 ,2);
 console.log("Result:" ,result); // it's give the undefined   beacuse of the Funtion addTwoNumber do'nt return anyvalue 
 addTwoNumber(5 , 4);

// if you can  not give anyvalue in the parameter than output is [NaN =Not a Number] aayega 
function addtwoNumber (number  , number4)
{
    return number + number4
    console.log("Ritesh Sahani"); // it's can't ve print beacuse off the it can't reach the console.log 
}

const num  = addtwoNumber( 10 , 45);
console.log(num);


function addthreeNumber(n ,n1 ,  n2)
 {

    return n + n1 + n2 ;
}
const nums = addtwoNumber( 10 , "4");
console.log(nums);



const n = addtwoNumber( "10", 4);
console.log(n);

const x  =  addthreeNumber(1 , 2 , "4");
console.log(x);

const y  = addthreeNumber("5", 1,3);
console.log(y);


function loginUserMessage(username) {
    if(username==undefined)
    {
        console.log("Please Enter the Username:")
        return 
    } 
     return `${username} just logged in`
}

function loginUserMessage(username) {
    if(!username)  // Syntax change  but the give the output is same as the first function
    {
        console.log("Please Enter the Username:")
        return 
    } 
     return `${username} just logged in`
}




console.log(loginUserMessage()); // Undefiend just logged In

console.log(loginUserMessage("Ritesh")) ; // same output
// const str  = loginUserMessage("Ritesh");
// console.log(str);