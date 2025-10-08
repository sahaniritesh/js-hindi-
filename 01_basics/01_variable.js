const accoutId = 1232
let accountEmail = "sahanirtesh121@gmail.com"
var accountPassword = "12132"
 accountCity = "uttar pradesh"  // its not the good 
 let accountState ; // undefined

// accoutId = 2// not allows  because of the constant variable can't change 

accountEmail = "hc@hc .com"
accountPassword = "323424"
accountCity = "dehradun"

// {
    // scope if you discribe than you can only used the bricket not used the  block outside
// }
/*

prefer not use var 

because of issue in the block scope and functional scope  
*/
console.log(accoutId);

console.table([accoutId , accountEmail , accountPassword , accountCity , accountState])


