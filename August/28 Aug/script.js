//--------------------------------------------------------------------------- String Question & Answer 

// Write a JavaScript function to check whether an 'input' is a string or not.

// function is_string(input) {
//     return typeof input ==='string';
// }

// console.log(is_string('w3resource')); // true
// console.log(is_string([1, 2, 4, 0])); // false

//---------------------------------------------------------------------------

// Write a JavaScript function to check whether a string is blank or not.

// function is_Blank(str) {
//     return str === '';
// }

// console.log(is_Blank('')); // true
// console.log(is_Blank('abc')); // false

//--------------------------------------------------------------------------- 

// Write a JavaScript function to split a string and convert it into an array of words.

// function string_to_array(str) {
//     return str.split(' ');
// }
// console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]

//---------------------------------------------------------------------------

// Write a JavaScript function to extract a specified number of characters from a string.

// function truncate_string(str, n) {
//     return str.slice(0, n);
// }

// console.log(truncate_string("Robin Singh",4)); // "Robi"

//---------------------------------------------------------------------------

// Write a JavaScript function that hides email addresses to prevent unauthorized access.

function protect_email(email) {
    return email.slice(5, email.lastIndexOf('@')).replace('...').concat(email.slice(email.indexOf('@')))
}

console.log(protect_email("robin_singh@example.com"));
// Output:  "robin...@example.com"

// Write a JavaScript function to parameterize a string.
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// Output: "robin-singh-from-usa"

//   Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
// console.log(capitalize('js string exercises'));
// Output: "Js string exercises"

// Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

// Write a JavaScript function to insert a string within a string at a particular position (default is 1).
// Test Data :
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// Output: "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises.”
//  What is the output of the following code?
// let text = "Apple, Banana, Kiwi";
// text.slice(-12, -6);
// console.log(text);


// ------------------------------------------------------ JS LAST ASSESSMENT --------------------------------

// ------------------------------------------------------ 1

// let arr=[1,4,2,5,3,8];

// function sortedLarge(arr) {
//     let result=arr.sort((a,b)=>a-b);
//     return result[arr.length-1]
// }

// console.log(sortedLarge(arr));

// ------------------------------------------------------ 3

// function mul(a){
//     return function mul(b){
//         return function mul(c){
//             return a*b*c;
//         }
//     }
// }

// console.log(mul(2)(3)(4));

// ------------------------------------------------------ 5

// function createBase(a) {
//     return function add(b) {

//         console.log(a + b);

//     }
// }

// var addSix = createBase(6);
// addSix(10);
// addSix(21);

// ------------------------------------------------------ 6

// function anagram(str1, str2) {
//     str1 = str1.toLowerCase().split('');
//     str2 = str2.toLowerCase().split('');
//     let a = str1.map(ele => {
//         let a = str2.map(val => {
//             if (str2.includes(ele) && str1.includes(val)) {
//                 return true;
//             }
//             else {
//                 return false;
//             }
//         })
//         return a.every(val => val);
//     })
//     return a.every(ele => ele);
// }

// console.log(anagram('mary', 'army'));
// console.log(anagram('mary', 'armyas'));

// ------------------------------------------------------ 7

// function pallidrone(str) {
//     if (str.split('').reverse().join('') == str) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(pallidrone('madam'));
// console.log(pallidrone('nurses run'));

// function pallidrone_space(str) {
//     str = str.split('').filter(val => val != " ").join('');

//     if (str.split(' ').reverse().filter(val => val != ' ').join('') == str) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(pallidrone_space('madam'));
// console.log(pallidrone_space('nurses run'));

// ------------------------------------------------------ 8

// a = 0
// b = 0
// c = 0
// for (i = 0; i < 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("Fizzbuzz");
//         a++;
//     }
//     else if (i % 3 == 0){
//         console.log("Fizz");
//         b++;
//     }
//     else if (i % 5 == 0){
//         console.log("Buzz");
//         c++;
//     }
// }
// console.log(a);
// console.log(b);
// console.log(c);
