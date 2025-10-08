const name  = "Ritesh";

const  lastName = " Sahani";

console.log(name + " " + lastName);

const names  = "Sham";

const repocount = 50;

// this methods  Upgrade version of the String  //
console.log(`Hello My name is ${names} and  my repo count is ${repocount}`);

// String declear in the javascript 

const gamename = new String('RITESH');
 
// method 1
console.log(gamename[0]);

// Method 2

console.log(gamename.__proto__);

// somemethod .length

console.log(gamename.length);

// toLowerCase();

console.log(gamename.toLowerCase());


// toUpperCase()

const  FirstName = "riteshsahani";

console.log(FirstName.toUpperCase());


// charAt  

console.log(FirstName.charAt(2)); //  t

console.log(FirstName.charAt(4)); // s

console.log(FirstName.charAt(6)); // s

console.log(FirstName.charAt(8)); // h

console.log(FirstName.charAt(10)); // n


// indexOf Method

console.log(FirstName.indexOf('t')); //  2

console.log(FirstName.indexOf('r')); // 0

console.log(FirstName.lastIndexOf());  // -1


// varible_name.substring(firstindex  , lastindex) method  and also lastindex or not include 

const newString  = FirstName.substring(0,4);

console.log(newString); 


//  varible_name.slice(0 , 4)  in the slice method  to give the negative number and it's also reverse  the give string 

const anotherString  = FirstName.slice(0 , 4);

console.log(anotherString);


// trim()  method use to remove the extra space in the given string 
const newStrings  =  "    Shreya   ";

//  changing the url in this method 
    // varible.replace('%20' , '-');

    // example 

    const url  = "https://Ritesh.com/Ritesh%20Sahani";

    console.log(url.replace('%20', '--')); // "https://Ritesh.com/Ritesh--Sahani":

    // console.log(url.replaceAll());

    // Check the includes or not 

    console.log(url.includes('Ritesh'));  // output is true 



    const str = "The quick brown fox jumps over the lazy dog.";

    const words = str.split(" ");
    console.log(words[3]); // 

    const chars = str.split(" ");
    console.log(chars[5]); //

    const strcopy = str.split();
    console.log(strcopy);





// console.log(newStrings);  output [   Shreya    ]   
// console.log(newStrings.trim()); // output is [Shreya]
// console.log(newStrings.toLowerCase()); // output is [shreya]
// console.group(newString.toUpperCase()); // output is [SHREYA]
// console.log(newStrings.slice(0,5)); // output is [Shrey]
// console.log(newStrings.substring(0,3)); // output is [Shre]

// console.log(newStrings.indexOf('e')); // output is 4

// console.log(newStrings.charAt('6')); // output is a

// console.log(newStrings.length); // output is 6

// console.log(newStrings + " " + FirstName); // [   Shreya   Riteshsahani] :
// console.log(url.replace('%20' , '--')); // https://Ritesh.com/Ritesh--Sahani:
//console.log(url.includes('Ritesh')); // includes method it's check the Ritesh present or no't in the url :  boolean return :true
// console.log(url.includes('Shreya')); // output is false :








