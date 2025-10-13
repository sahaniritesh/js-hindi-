// Scope

// Global Scope
// function one(){
//     const username = "Ritesh"
//     console.log(username)
// }

// one()
// console.log(username)

// Local Scope          

// function one(){
//     const username = "Ritesh"
//     function two()
//     {
//         const website = "Ritesh.com"
//      console.log(username)
//     }
//     // console.log(website);
//     two()
// }

// one()

// if(true){
//     const username = "Ritesh" 
     
//      if(username === "Ritesh"){
//         const website = "Ritesh.com"
//         console.log(username + " " + website) 
//         console.log(website);
//      }  
  
//    console.log(username);  
// }


// for(let i=0; i<5; i++){
//     console.log(i);
// }
// console.log(i);

// var vs let/const

// var name = "Ritesh"
// var name = "Ritesh Kumar"
// console.log(name)

// let name = "Ritesh"
// let name = "Ritesh Kumar"
// console.log(name)

// const name = "Ritesh"
// const name = "Ritesh Kumar"
// console.log(name)

// var is function scoped
// let and const are block scoped       

// if(true){
//     var name = "Ritesh"
//     let website = "Ritesh.com"
//     const password = "12345"
// }
// console.log(name);
// console.log(website);
// console.log(password);  

// Hoisting

// console.log(username);
// var username = "Ritesh"

// console.log(website);
// let website = "Ritesh.com"

// console.log
// (password);
// const password = "12345"
// function one(){
//     console.log(username);
//     var username = "Rites
// }
// one()
// function two(){
//     console.log(website);
//     let website = "Ritesh.com"
// }
// two()
// function three(){
//     console.log (password);
//     const password = "12345"
// }
// three()  
// one()
// function one(){
//     console.log(username);
//     username = "Ritesh"  
//     var username
// }
// one()
// function two(){
//     console.log(website);
//     website = "Ritesh.com"  
//     let website
// }
// two()
// function three(){
//     console.log (password);  
//     password = "12345"  
//     const password
// }
// three()  
// one()
// function one(){
//     username = "Ritesh"
//     console.log(username);
//     var username
// }
// one()
// function two(){
//     website = "Ritesh.com"
//     console.log(website);
//     let website
// }
// two()
// function three(){
//     password = "12345"
//     console.log (password);
//     const password
// }
// three()              

// one()
// function one(){
//     console.log(username);
//     var username = "Ritesh"
//     function two(){
//         console.log(website);
//         let website = "Ritesh.com"
//         function three(){
//             console.log (password);
//             const password = "12345"
//         }
//         three()
//     }
//     two()
// }
// one()    
// function one(){
//     console.log(username);
//     var username = "Rites

//     function two(){
//         console.log(website);
//         let website = "Ritesh.com"

//         function three(){
//             console.log  (password);
//             const password = "12345"     
//         }
//         three()
//     }
//     two()
// }
// one()
// function one(){
//     console.log(username);
//     var username = "Ritesh"
          
// ++++++++++++++ Intersting ++++++++++++++++
//     function two(){
//         console.log(website);
//         website = "Ritesh.com"
//         let website
//         function three(){
// //
// function addone(num) {
//     return num + 1
// }
// addone(5)

// console.log(addone(5));

// const addtwo = function (num) {
//     return num + 2
// }
// console.log(addtwo(5));

// const addthree = (num) => {
//     return num + 3
// }
// console.log(addthree(5));

// const addfour = num => num + 4
// console.log(addfour(5));


// const user = {
//     username: "Ritesh",
//     price :999,
//     addvalue: function(num){
//         return this.price + num

//     }

const user = {
    username: "Ritesh",
    price :999,
    welcomemessage:function () {
     console.log(`${this.username} , welcome to website  ${this.price}`)
     console.log(this)
    } 

}
user.welcomemessage()
user.price = 1999
user.welcomemessage="Sahani"
user.welcomemessage()

