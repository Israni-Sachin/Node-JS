// "use strict";
// //@ts-ignore
// function get(a, b) {
//     return a + b;
// }
// get(10, 4);
// // TYPE ANNOTATION
// let fname = "sachin";
// let lname = "israni";
// let fullName = fname + "_" + lname;
// console.log(fullName);
// let fullNameLength = fullName.length;
// console.log(fullNameLength);
// let upperCase = fullName.toUpperCase();
// let lowerCase = fullName.toLowerCase();
// let longText = "abcdefghijklmnopqrstuvwxyz";
// let shortText = longText.slice(0, 11);
// console.log(shortText, " shortText");
// let str1 = "sachin";
// let str2 = "sachin";
// let areEqual = str1 === str2;
// console.log(areEqual);
// let product = "Phone";
// let price = 500;
// let message = `The product ${product} is priced at ${price} dollars.`;
// function info(id, password) {
//     console.log(`Your ID is ${id} and password is ${password}`);
// }
// info(5, "sachin@2222");
// const isPalindrome = (string) => {
//     let palin = string.split("").reverse().join("");
//     return palin === string;
// };
// console.log(isPalindrome("12321"));
// const numbers = [1, { a: 2 }, undefined, null, "5", true, 7, 8, 9, 10];
// const number = [1, { a: 2 }, undefined, null, "5", true, 7, 8, 9, 10];
// const person = {
//     name: "sachin",
//     age: 18,
//     isStudent: true,
//     address: {
//         city: "Ahmedabad",
//         country: "India"
//     }
// };
// person.address.city = "Surat";
// console.log(person.address.city);


// // const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

// function name(s) {
//     s = s.split('')
//     console.log(s);
//     console.log(s.length == 1);
//     if (s.length == 1) s.unshift('^'); s.push("$"); s.join('');
//     console.log(s);
//     const isValidPassword = new RegExp(s).test("aa");
//     console.log(isValidPassword);
//     return isValidPassword;
// }

// // console.log(name("a")) 
// let a = ['c', '*', 'a', '*', 'b'];
// console.log(a.filter(val => val == "*").length > 1);

// const originalString = "mis*is*p*.";
// const escapedString = originalString.replace(/\*/g, '\\*');
// console.log(escapedString);


// var romanToInt = function (s) {
//     let obj = {
//         "I": 1,
//         "V": 5,
//         "X": 10,
//         "L": 50,
//         "C": 100,
//         "D": 500,
//         "M": 1000,
//     }
//     s = s.split("");
//     // console.log(s)
//     s = s.map((v) => {
//         // console.log("val")
//         // val = obj.val
//         obj=Object.entries(obj)
//         // console.log(obj);
//         obj.map(val=>{
//             console.log(val[0]);
//             console.log(v);
//             console.log(val[0]==v);
//             if(val[0]==v){
//                 v=val[1];
//                 // console.log("a");
//             }
//         })
//         return v;
//     });
//     console.log(s)
//     return s;
// };

// // a = romanToInt("III")

// // console.log(a);
// let obj = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
// }

// console.log(obj["I"]);
// const numbers1 = [1,1,2];
// let filterArray = numbers1.filter((a,b,c)=>{
//     return c.indexOf(a)===b;
// });
// console.log(filterArray);

// function sum(a,b) {
//     return a+b;
// }

// function sum(a,b,c) {
//     return a+b+c;
// }

// console.log(sum(1,2));
// console.log(sum(1,2,3));