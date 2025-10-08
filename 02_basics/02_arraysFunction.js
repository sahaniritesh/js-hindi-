 const marvel_hero = [" thor " , " Ironman " , " Spiderman "];
 const dc = [" Superman " , " Flash " , " batman "];

//marvel_hero.push(dc); // it's the varible as the input of the dc

//console.log(marvel_hero);  // output is  : ["thor" , " Ironman" ,"Spiderman" , ["Superman" , "Flash" , " Batman"]]:

//console.log(marvel_hero[3][2]); // its give the third element index second is : Batman output

// concat method in javascript

  const  allHero = marvel_hero.concat(dc);   // In concat Function it's return the new Array 
console.log(allHero);  //  If you are use the concat function in the javascript    [" Thor " , " Ironman " ," Spiderman " , " Superman " , " Flash " , " Batman "]:

// Third Method  Spread  

const all_new_hero = [...marvel_hero , ...dc];  // Spread Operation used the n number of the varible to used the addition the varible in javascript 
console.log(all_new_hero);

//  Fourth Method   is Flat it's convert the multi layer array in the single array 

const another_array = [1 , 2, 3 , [4 , 5, 6] , 7 , [6 , 7 , [4 , 5 ] ] ];

const real_another_array = another_array.flat(Infinity); // it's convert the multi layer array in the  single array

console.log(real_another_array); //[ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 6 , 7 , 4 , 5]:

// How to check the array are not 

console.log(Array.isArray("Ritesh")) ;  // It's return the false

// Array.From Method:
console.log(Array.from("Ritesh")); // It's convert the array like : [' R ' , '  i' , ' t ' , ' e ' , ' s ' , ' h ']:

//console.log(Array.from({name:"Ritesh"})) ;   // Important case it's give the  output is : [] String  

// let score = 100 ;
// let score1 = 200 ;
// let score2  = 300 ;

//.log(Array.from(score , score1 , score2)); // it's give the same output and also convert the array [100 , 200 , 300] :

//console.log(Array.of(score , score1 , score2));  // it's also convert the array and same  output is : like of method  [ 100 , 200 , 300 ] :


