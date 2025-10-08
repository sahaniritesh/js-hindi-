// array in javascript resize the array

const myarr = [0 , 1 ,2 ,3 , 4 ,5]; // Number array
// console.log(myarr[0]);

// const myArr2 = new Array(1,2,4,3,5); //   array declear
// console.log(myArr2[4]);

// // Array Method

// myarr.push(6); // push mean too add the element in the array in the last index
// myarr.push(7);
// // console.log(myarr);

// // myarr.unshift(8);
// // console.log(myarr);

// myarr.shift(); // it's always remove the first element in the array
// console.log(myarr);

// console.log(myarr.includes(9));  // output is false because of the 9 is not present in the array that why it's give the false


// console.log(myarr.indexOf(5)); // it's  give the integer type number : 5 because of the arrya starting index is :0

// console.log(myarr.indexOf(10)); // it's give the -1 because of the 10 in not present in the array any index that why it's give the [-1 ]

// const newarr = myarr.join(); // 

// console.log(myarr); // it's give the same output in the array form [1,2,3,4,5]:
// console.log(typeof(myarr));  // type Array  is: object 

// console.log(newarr); // but in the newarr it's type are convert the array to String output is  : 1,2,3,4,5
// console.log(typeof(newarr));   // type of String


// slice 

console.log("A" , myarr);

const myn1 = myarr.slice(1, 3); // it's include the  first and second and third are not include in the myn1

console.log(myn1);


// splice 
console.log("B " , myarr);

const myarr2 = myarr.splice(1,3);

console.log(myarr2);   // splice mai last index ko ve include kiya jata hi 


