// Write a code for returning the greeting message as per current time.

// let current_time=new Date().getHours();
// console.log(current_time);

// function greating(){
//     if(current_time<12){
//         return "Good Morning";
//     }
//     else if(current_time>=12 && current_time<18){
//         return "Good Afternoon";
//     }
//     else{
//         return "Good Evening";
//     }
// }

// console.log(greating());

// Write a code for returning the day name based on the digit. (like 1 for monday and so on.)

// let current_day=new Date().getDay();
// console.log(current_day);

// function day_name(){

//     switch(current_day){
//         case 0:
//             return "Sunday";
//             break;

//         case 1:
//             return "Monday";
//             break;

//         case 2:
//             return "Tuesday";
//             break;

//         case 3:
//             return "Wednesday";
//             break;

//         case 4:
//             return "Thursday";
//             break;

//         case 5:
//             return "Friday";
//             break;

//         case 6:
//             return "Saturday";
//             break;

//         default:
//             break;

//     }
// }
// console.log(day_name());

// Write a program that prints following pattern

// let n=5
// for (var i = 0; i < n; i++) {

//     for(let j=0;j < n; j++) {

//         console.log('*');

//     }
//     console.log('\n');
// }

// Write a program that prints following pattern

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     console.log("*");
//   }
//   console.log("\n");
// }

// Write a program that prints following pattern

// for (let i = 5; i > 0; i--) {
//   for (let j = 0; j < i; j++) {
//     console.log("*");
//   }
//   console.log("\n");
// }

// Write a program for returning the number of days in the particular month.
// For example, getNumberOfDays(1); returns the 31 (1 stands for january)

// function getNumberOfDays(month) {
//   switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       return 31;
//       break;
//     case 2:
//       return 28;
//       break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       return 30;
//       break;
//     default:
//       break;
//   }
// }

// console.log(getNumberOfDays(1));
// console.log(getNumberOfDays(2));
// console.log(getNumberOfDays(3));
// console.log(getNumberOfDays(4));
// console.log(getNumberOfDays(5));
// console.log(getNumberOfDays(6));
// console.log(getNumberOfDays(7));
// console.log(getNumberOfDays(8));
// console.log(getNumberOfDays(9));
// console.log(getNumberOfDays(10));
// console.log(getNumberOfDays(11));
// console.log(getNumberOfDays(12));

// Write a program that prints the 1 to 10.

// for (var i =1; i <= 10; i++){
//     console.log(i);
// }

// Write a function that prints the odd number of given range
// For example, printOddNumbers(1,10); prints 1,3,5,7,9

// function printOddNumbers(start, end){
//     for (var i = start; i <= end; i++) {
//         if (i % 2!= 0) {
//             console.log(i);
//         }
//     }
// }

// printOddNumbers(1,10);

// Write a function that prints the even number of given range

// function preintEvenNumbers(start, end){
//     for (var i = start; i <= end; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//         }
//     }
// }

// preintEvenNumbers(1,10);

// Write a function that takes 3 arguments and returns the result based on the given operation. (operation will be sum, subtraction, multiplication, division, modulo)
// 	For example: calculate(‘+’, 5, 6); // 11
// 			calculate(‘-’, 10, 6); // 4

// function calculate(operation,num1,num2){
//     switch(operation){
//         case '+':
//             return num1+num2;
//             break;
//         case '-':
//             return num1-num2;
//             break;
//         case '*':
//             return num1*num2;
//             break;
//         case '/':
//             return num1/num2;
//             break;
//         case '%':
//             return num1%num2;
//             break;
//         default:
//             break;
//     }
// }

// console.log(calculate('%',5,6));

// Write a function that takes marks as argument and returns the grade according to marks.

// function gradeFunction(marks) {
//     if (marks >= 90) {
//         return "A";
//     }
//     else if (marks >= 80) {
//         return "B";
//     }
//     else if (marks >= 70) {
//         return "C";
//     }
//     else if (marks >= 60) {
//         return "D";
//     }
//     else if (marks >= 50) {
//         return "E";
//     }
//     else {
//         return "F";
//     }
// }
// console.log(gradeFunction(97))

//  Write a function that takes a currency_code and amount as an argument and returns the amount of money in INR.

// function currencyFunction(currency_code, amount) {
//   switch (currency_code.toUpperCase()) {
//     case "INR":
//       return amount;
//       break;
//     case "USD":
//       return amount * 82;
//       break;
//     case "EUR":
//       return amount * 90;
//       break;
//     case "GBP":
//       return amount * 105;
//       break;
//     default:
//       break;
//   }
// }
// console.log(currencyFunction("UsD", 97));

//  Write a function for reversing the string.

// function reverse(str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverse("hello"));

// Write a function that takes an object and prints all keys and values in the console.

// function print(object) {
//     console.log(Object.keys(object));
//     console.log(Object.values(object));
// }
// let obj={
//     name:'sachin',
//     roll:154
// }
// print(obj);

// Write a function that returns boolean on condition if the string contains a number or not.

// function isStringContainsNum(string) {
//   // console.log(/[0-9]/.test(string))

//   let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   string = string.split("").some((val) => arr.some(ele=>arr.includes(val)))
//   console.log(string);
// }
// isStringContainsNum("assad"); // false
// isStringContainsNum("agfh1"); // true
// isStringContainsNum("ag1sdf"); // true
// isStringContainsNum("111"); // true

//  Write a function that prints messages based on condition if the string contains a number or not.
// 	For example: For “1212” => string is number
// 			For “sadfsd” => string not contains number
// 			For “sad2q” => string contains number

// function isStringContainsNum(string) {
//   let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   str = string.split("").some((val) => arr.some((ele) => arr.includes(val)));

//   if (Number(string) == string) {
//     console.log("string is number");
//   } else if (str) {
//     console.log("string contains number");
//   } else {
//     console.log("string not contains number");
//   }
// }
// isStringContainsNum("1452");
// isStringContainsNum("asadas1");
// isStringContainsNum("asadas");

// Write a function that returns the position of the first occurrence of digit in string.

//  Write a function that returns the position of the first capital letter in string. (For this string only contains A-Z, a-z)

// Modify following code to work perfectly.
// function printOdd(start, end) {
//   for (let i = start; i < end; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// }
// printOdd(1,10);
// 		points to be noted:
// Code prints only odd number

// Modify following code to work perfectly.
// function printOdd(start, end) {
//     let count=0;
//   for (let i = start; i < end; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//       count++;
//       if(count==10){
//         break;
//       }
//     }
//   }
// }
// printOdd(1,30)
// 		points to be noted:
// Code prints only odd number
// Code must be prints only 10 instance

// ------------------------------------------------------- Array questions and answers ----------------------------------------------------
//     Write a code that adds new key in each object named
//     full_name: first_name + last_name

// let names = [
//   { first_name: "Handnm", last_name: "L demo" },
//   { first_name: "Q Wei", last_name: "Alxezx" },
//   { first_name: "Pqwern", last_name: "Ruse" },
//   { first_name: "Wiruyn", last_name: "Ruby" },
//   { first_name: "Erpso", last_name: "Loal" },
//   { first_name: "Demors", last_name: "Poet" },
//   { first_name: "Aleos", last_name: "Lkeu" },
// ];

// names = names.map((ele) => {
//   ele.full_name = ele.first_name + " " + ele.last_name;
//   return names;
// });
// console.log(names);

//     Write a code that adds new key in each object named : isMature

// const users = [
//   { first_name: "Handnm", last_name: "L demo", age: 17 },
//   { first_name: "Q Wei", last_name: "Alxezx", age: 30 },
//   { first_name: "Pdeq Twern", last_name: "Ruse", age: 22 },
//   { first_name: "Widfruyn", last_name: "Ruby", age: 11 },
//   { first_name: "Erdfg Pso", last_name: "Loal", age: 34 },
//   { first_name: "Dedfgmors", last_name: "Poet", age: 60 },
//   { first_name: "Ale4tos", last_name: "Lkeu", age: 16 },
// ];

// let new_data = users.map((ele) => {
//   ele.isMature = ele.age >= 18 ? "Yes" : "No";
// });
// console.log(users);

//     => print all items of nested array

// const nestedArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// nestedArray.flat(Infinity).forEach(ele=>console.log(ele));

//     => print all items of this object in line
//     //Output:
//     Vishal Kukreja
//     32
//     123 Mumbai fashion St
//     Midtown
//     MH
//     reading
//     drawing
//     gardening

// const nestedObject = {
//   name: "Vishal Kukreja",
//   age: 32,
//   address: {
//     street: "123 Mumbai fashion St",
//     city: "Midtown",
//     state: "MH",
//   },
//   hobbies: ["reading", "drawing", "gardening"],
// };

// function printnestedvalues(nestedObject) {
//   for (const key in nestedObject) {
//     if (typeof nestedObject[key] == "object") {
//       printnestedvalues(nestedObject[key]);
//     }
//     else {
//       console.log(nestedObject[key]);
//     }
//   }
// }
// printnestedvalues(nestedObject);

//     Write a program to check if an array contains any number (strictly) or not.
//     Input:  [1,2,3] => true
//     [“1”, “a”, “h”] => false
//     [“a”, 3, “gh”] => true
//     [“a”, ‘3df’, “gh”] => false

// function isContainNum(arr){
//     return arr.every(ele=>typeof ele === 'number');
// }
// console.log(isContainNum([1,2,'3']));
// console.log(isContainNum([1,2]));
// console.log(isContainNum([1,2,'3asdf']));

//  => convert all number to string in given array
// let numbers = [1, 2, 3, 4];
// numbers = numbers.map((ele) => {
//   return String(ele);
// });
// console.log(typeof numbers[0]);

// // /// // //////////////////////////////////////////////////    // Array - https://codebeautify.org/jsonviewer/y23d22c85
let donuts = [
  {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters":
    {
      "batter":
        [
          { "id": "1001", "type": "Regular" },
          { "id": "1002", "type": "Chocolate" },
          { "id": "1003", "type": "Blueberry" },
          { "id": "1004", "type": "Devil's Food" }
        ]
    },
    "topping":
      [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5005", "type": "Sugar" },
        { "id": "5007", "type": "Powdered Sugar" },
        { "id": "5006", "type": "Chocolate with Sprinkles" },
        { "id": "5003", "type": "Chocolate" },
        { "id": "5004", "type": "Maple" }
      ]
  },
  {
    "id": "0002",
    "type": "donut2",
    "name": "Raised",
    "ppu": 0.55,
    "batters":
    {
      "batter":
        [
          { "id": "1001", "type": "Regular" }
        ]
    },
    "topping":
      [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5005", "type": "Sugar" },
        { "id": "5003", "type": "Chocolate" },
        { "id": "5004", "type": "Maple" }
      ]
  },
  {
    "id": "0003",
    "type": "donut3",
    "name": "Old Fashioned",
    "ppu": 0.55,
    "batters":
    {
      "batter":
        [
          { "id": "1001", "type": "Regular" },
          { "id": "1002", "type": "Chocolate" }
        ]
    },
    "topping":
      [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5003", "type": "Chocolate" },
        { "id": "5004", "type": "Maple" }
      ]
  },
  {
    "id": "0004",
    "type": "donut1",
    "name": "Old Fashioned",
    "ppu": 0.55,
    "batters":
    {
      "batter":
        [
          { "id": "1001", "type": "Regular" }
        ]
    },
    "topping":
      [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5003", "type": "Chocolate" },
        { "id": "5004", "type": "Maple" }
      ]
  }
]
// => filter donuts based on which have topping  Chocolate

let filteredTopChocolate = (donuts) => {
  return donuts.filter((ele) => {
    console.log(ele);
    return ele.batters.batter.filter((ele) => {
      console.log(ele.type);
      if(ele.type == "Chocolate"){
        return ele;
      }
    });
  });
}
console.log(filteredTopChocolate(donuts));

// => filter donuts based which have batter type is regular and topping have Chocolate
// => filter donuts based on which have topping chocolate and Sugar
// => filter donuts based on ppu > 0.5
// => bring all batters for all donuts in single array
// => filter donuts based on which have 2 and more than 2 batter in it

//     Get name initials
//     input = "George Raymond Richard Martin"; Output: “GRRM”
//     input = “george raymond Richard Martin”; Output: “ GRRM”

// function getNameInitials(input) {
//     return input.split(" ").map((ele) => {
//         return ele[0];
//     }).join("").toUpperCase();
// }

// console.log(getNameInitials('George Raymond Richard Martin'));
// console.log(getNameInitials('george raymond Richard Martin'));

//     Get output like example
//     input = "Every developer likes to mix kubernetes and javascript";
//     output = "E3y d7r l3s to mix k8s and j8t"


// function firstNumLast(input) {
//   return input
//     .split(" ")
//     .map((ele, i, arr) => {
//       function lengthchk(ELEarr) {
//         if (ELEarr.length - 2 == 0) {
//           return "";
//         } else if (ELEarr.length - 2 == 1) {
//           return ele[1];
//         } else {
//           return ELEarr.length - 2;
//         }
//       }
//       return ele[0] + lengthchk(ele) + ele[ele.length - 1];
//     })
//     .join(" ");
// }
// console.log(firstNumLast("Every developer likes to mix kubernetes and javascript"));

// const products = [
//   { name: "Product 1", price: 20, category: "Electronics" },
//   { name: "Product 2", price: 30, category: "Clothes" },
//   { name: "Product 3", price: 40, category: "Electronics" },
//   { name: "Product 4", price: 50, category: "Clothes" },
//   { name: "Product 5", price: 60, category: "Clothes" },
//   { name: "Product 6", price: 70, category: "Electronics" },
//   { name: "Product 7", price: 80, category: "Clothes" },
//   { name: "Product 8", price: 90, category: "Electronics" },
// ];
//     Note: 2 questions
//     Que1 => output:
//         {
//        Clothes: 4,
//        Electronics: 4
//         }

// function countCategory(category) {
//   let count = 0;
//   let count2 = 0;
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].category === 'Electronics') {
//       count++;
//     }
//     if (products[i].category === 'Clothes') {
//       count2++;
//     }
//   }
//   console.log('Electronics count: ' + count);
//   console.log('Clothes count: ' + count2);
// }
// countCategory(products)

//     Que 2 => count the total average of each category price.
// function countCategory(products) {
//   let count = 0;
//   let count2 = 0;
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].category === 'Electronics') {
//       count += products[i].price
//     }
//     if (products[i].category === 'Clothes') {
//       count2+= products[i].price
//     }
//   }
//   console.log('Electronics price count: ' + count);
//   console.log('Clothes price count: ' + count2);
// }
// countCategory(products);


// const employees = [
//   { name: "John", salary: 50000, department: "IT" },
//   { name: "Jane", salary: 60000, department: "HR" },
//   { name: "Bob", salary: 55000, department: "IT" },
//   { name: "Sophie", salary: 75000, department: "HR" },
//   { name: "Mike", salary: 65000, department: "IT" },
//   { name: "Emily", salary: 80000, department: "HR" },
//   { name: "David", salary: 70000, department: "IT" },
// ];

//     Que1: => count the average salary of each department
// function countAvgSalary(arr) {
//   let IT = 0
//   let IT_salary = 0
//   let HR = 0
//   let HR_salary = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].department=='IT') {
//       IT_salary += arr[i].salary
//       IT++;
//     }
//     if (arr[i].department=='HR') {
//       HR_salary += arr[i].salary
//       HR++;
//     }
//   }
//   console.log('Average IT salary: '+ Math.round(IT_salary/IT));
//   console.log('Average HR salary: '+ Math.round(HR_salary/HR));
// }

// countAvgSalary(employees)

// Que 2: => output: {
//   IT: [50000, 55000, 65000, 70000],
//   HR: [60000, 75000, 80000]
// }

// function print_all_salary(arr) {
//   let obj = {};
//   obj.IT = [];
//   obj.HR = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].department == "IT") {
//       obj.IT.push(arr[i].salary);
//     }
//     if (arr[i].department == "HR") {
//       obj.HR.push(arr[i].salary);
//     }
//   }
//   return obj;
// }

// console.log(print_all_salary(employees));

///////////////////////////////////////////////////////////////////////////////// Make a function that returns the grouped data based on first letter of the string.
///////////////////////////////////////////////////////////////////////////////// For Example: [“Jeel”, “Prakhar”, “Bhakti”, “Vansh”, “Meghna”, “Bhaumik”, “Pujan”, “Rudra”, “Sachin”, “Dhruval”]
/////////////////////////////////////////////////////////////////////////////////   Output: {
/////////////////////////////////////////////////////////////////////////////////   J: [“Jeel”],
/////////////////////////////////////////////////////////////////////////////////   P: [“Pakhar”, “Pujan”],
/////////////////////////////////////////////////////////////////////////////////   B: [“Bhakti”, “Bhaumik”],
/////////////////////////////////////////////////////////////////////////////////   …….. And so on
///////////////////////////////////////////////////////////////////////////////// }
// function initials(arr) {
//   let obj = {};
//   let intiArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     intiArr.push(arr[i][0]);
//   }
//   intiArr = intiArr.filter((v, i, arr) => {
//     return arr.indexOf(v) === i
//   })
//   for (let i = 0; i < intiArr.length; i++) {
//     if (arr[i][0] == intiArr[i]) {
//       obj[intiArr[i]] = [arr[i]];
//     }
//     else{
//       obj[intiArr[i]] = [arr[i]];
//     }
//   }
//   console.log(intiArr);
//   return obj;
// }
// let array = ['Jeel', "Prakhar", "Bhakti", "Vansh", "Meghana", "Sachin", "Bhaumik", "Pujan", "Rudra", "Dhruval"]
// initials(array);
// console.log(initials(array));

/////////////////////////////////////////////////////////////////////////////////////      Make flat function manually (with depth and without depth)

// function flat(array) {
// return array.reduce((acc, val) => acc.concat(Array.isArray(val)? flat(val) : val), [])
// let newArr = array.map(ele => {
//   if (Array.isArray(ele)) {
//     return flat(ele)
//   }
//   else {
//     return ele
//   }
// })
// return newArr;
//   return array.map(ele => Array.isArray(ele) ? flat(ele) : ele)
// }

// console.log(flat([1, 2, [3, 4], 5, [6, [7, 8]]]));

//     //////////////////////////////////////////////////////////////////////////////////////////////////////////// Make filter function manually
//     //////////////////////////////////////////////////////////////////////////////////////////////////////////// Make map function manually

//   //////////////////////////////////////////////////////////////////////////////////////////////////////   const input= [
//       { name: "John", salary: 50000, department: "IT" },
//       { name: "Jane", salary: 60000, department: "HR" },
//       { name: "Bob", salary: 55000, department: "IT" },
//       { name: "Sophie", salary: 75000, department: "HR" },
//       { name: "Mike", salary: 65000, department: "IT" },
//       { name: "Emily", salary: 80000, department: "HR" },
//       { name: "David", salary: 70000, department: "IT" },
//     ];
//     => make this data groupBy with first letter of the name (same as Que: 14)
//         Output::
//     {
//         J: [{ name: "John", salary: 50000, department: "IT" },  { name: "Jane", salary: 60000, department: "HR" },],
//     ….. and so on….
//         }
//     => make this data groupBy with department name
//         Output: {
//                 “IT”: [.....items of array which are from IT department],
//                 “HR”: [.....items of array which are from HR department],
//               }

//  What is the output of the following code ?
// let arr1 = [{ a: 34 }, { a: 45 }, { a: 12 }, { a: 5 }, { a: 78 }];
// let arr2 = arr1.map(item => item);
// arr2[2].b = 45;
// console.log(arr1);  // =>
// console.log(arr2);  // =>

// What is the output of the following code ?
// let arr1 = [{ a: 34 }, { a: 45 }, { a: 12 }, { a: 5 }, { a: 78 }];
// let arr2 = arr1.map(item => item.a * 2);
// console.log(arr1);  // =>
// console.log(arr2);  // =>

// What is the output of the following code ?
// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr.reduce((a, c) => a + c).map(item => item);
// console.log(arr2); // =>

// What is the output of the following code ?
// const example = ({ a, b, c }) => {
//   console.log(a, b, c);
// };
// example(0, 1, 2);

//  Find the Sum of Squares
// let arr = [1, 2, 3, 4, 5] // => ans: 55

// let sum=arr.map(ele=>ele*ele).reduce((a,c)=>a+c);

// console.log(sum);








// const students = [
//   { name: 'Alice', age: 20, grade: 'A' },
//   { name: 'Bob', age: 18, grade: 'B' },
//   { name: 'Charlie', age: 19, grade: 'A' },
//   { name: 'David', age: 20, grade: 'C' },
// ];
  // => sort by age
  // => sort by grade
  // => sort by name
  // => average of ages
  // => sum of ages

//     const nestedArray = [[1, 2], [3, 4], [5, 6]];
//     => flat this array using reduce (NOTE: array will be only depth 1)

//     Create an array of squares of even numbers from a given array.
//     const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

//     Filter out duplicate values from an array.
//     const numbers = [1, 2, 2, 3, 4, 4, 5];

//     Find the first string that contains the letter 'a' in an array.
//     const words = ['apple', 'banana', 'orange'];

//     Find the index of the first odd number in an array.
//     const numbers = [2, 4, 6, 8, 9, 10];

//      Write a function that returns the factorial of given number

//     Find the index of the first person whose name starts with 'A' and age is less than 20.
//     const people = [
//       { name: 'Alice', age: 18 },
//       { name: 'Bob', age: 20 },
//       { name: 'Charlie', age: 19 },
//       { name: 'David', age: 21 }
//     ];

//      make a function that takes two parameter (arrayOfArray, array) and returns boolean based on following example:

//     fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]) => true
//     fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]) => true
//     fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15]) => false
//     fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90]) => true

//       make a function that takes two parameter (arrayOfArray, array) and returns boolean based on following example:

//     fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]) => true
//     fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]) => false
//     fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15]) => false
//     fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90]) => false

//     Write a JavaScript program to compute the union of two arrays.
//     Sample Data :
//     console.log(union([1, 2, 3], [100, 2, 1, 10]));
//     Output: [1, 2, 3, 10, 100]

//     Write a JavaScript function to find the difference between two arrays.
//     Test Data :
//     console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//     Output: ["3", "10", "100"]
//     console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
//     Output: ["6"]
//     console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//     Output: ["3", "10", "100"]

//     Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.
//     (FOR NOW, CONSIDER THERE IS ONLY ONE PAIR WHICH IS A POSSIBLE SOLUTION)
//     Input: numbers= [10,20,10,40,50,60,70], target=50
//     Output: [10, 40] || [40,10]

//     Sample array : [NaN, 0, 15, false, -22, '', undefined, 47, null]
//     Expected result : [15, -22, 47]

//     Write a function that returns the result like examples
//     num_string_range('a', "z", 2) => ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
//     num_string_range("Z", "A", 2) => ["Z", "X", "V", "T", "R", "P", "N", "L", "J", "H", "F", "D", "B"]
//     num_string_range(0, -5, 1) => [0, -1, -2, -3, -4, -5]
//     num_string_range(0, 25, 5) => [0, 5, 10, 15, 20, 25]
//     num_string_range(20, 5, 5) => [20, 15, 10, 5]

//     Write a JavaScript function to remove a specific element from an array.
//     Test data :
//     remove_array_element([2, 5, 9, 6], 5); => [2, 9, 6]

//     Write a JavaScript function to find an array containing a specific element.
//     Test data : (ONLY FOR STRING AND NUMBER)
//     arr = [2, 5, 9, 6];
//     contains(arr, 5); => True
//     contains(arr, 10); => False

//      Write a JavaScript program to count the number of arrays inside a given array.
//     Test Data :
//     ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
//     ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3

//      Write a JavaScript program to find the maximum length of arrays inside a given array.
//     Test Data :
//     [2,8,[6],3,3,5,3,4,[5,4]] -> 2
//     [2,8,[6,3,3],[4],5,[3,4,[5,4]]] -> 3
//     [2,8,[6,3,3],[4],5,[3,4,[5,4]], [23,56]] -> 4
//     [1,5,2,6,4,23,89] -> 0

//      Write a JavaScript program to check if an array is a factor chain or not.
//      A factor chain is an array in which the previous element is a factor of the next    consecutive element. The following is a factor chain:
//      [2, 4, 8, 16, 32]
//     // 2 is a factor of 4  // 4 is a factor of 8  // 8 is a factor of 16  // 16 is a factor of 32
//     Test Data :
//     ([2, 4, 8, 16, 32]) -> true          ([2, 4, 16, 32, 68]) -> false
//     ([2, 4, 16, 32, 64]) -> true
