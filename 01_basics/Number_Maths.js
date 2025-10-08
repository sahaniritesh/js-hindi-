// Difference Between two number 

// const score = 500;
// console.log(score); //output is 500


// const balance = new Number(1000);
// console.log(balance); // Number is [1000]

// console.log(balance.toString().length); // output is 4 because of the length

// console.log(balance.toFixed(1)); //output is [1000.0] because of the point as give the one value


// //   varible.toPrecision method are used in the calculate the round off value in the varible like if precision is 3 and also your precision vlaue is 1123 than it's return the [1.12e+3]

// const OtherNumber = 123.8945;

// console.log(OtherNumber.toPrecision(3)); //  output is 124 

//  const value  =  123.89
//  console.log(value.toPrecision(4)); // output is 123.9

// // This method are used to presize the number in the given varible

//  const val = 1000000;
//  console.log(val.toLocaleString());  // us standed  output is : 1,000,000
//  console.log(val.toLocaleString('en-IN'));  // Indian Standed output is  : 10,00,000
 
 
//  ****************************************  Math  Section  **************************************************************

// Maths Function are the datatypes is Obejcts

// console.log(Math) ; //  output is : object [Math] { }

// // varible.Math.abs(value) // (-3)  // 3
// console.log(Math.abs(-4)); // Maths.abs are use to convert the  negative value into the positive value 

// // Math.round(4.3)

// console.log(Math.round(4.6));


// // varible.ceil it's  take the always the top value like the 
// console.log(Math.ceil(4.3)); // output is 5

// // varible.Math.floor(values) it's take the always the lowest value in the give methods :

// console.log(Math.floor(4.9));// output is 4

// // min method and max method

// console.log(Math.min(4,3,6,1)); // output is 1

// console.log(Math.max(54,3,353,665)); // output is 665

// Important Method Math.random(val) it's always take the range of [0 to .999999];

// console.log(Math.random());

// console.log(Math.random()*10);

// If is want the always the  greater than the 0 values


console.log(Math.random());

console.log(Math.random()*10);

console.log(Math.floor(Math.random()*10) + 1);


const min  = 10 ;
const max = 20 ; 

console.log(Math.floor(Math.random()*(max-min + 1))+ min );  // Important Formula



