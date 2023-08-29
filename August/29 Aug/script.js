//--------------------------------------------------------------------------- String Question & Answer 

//---------------------------------------------------------------------------

// Write a JavaScript function that hides email addresses to prevent unauthorized access.

// function protect_email(email) {
//     let intial = email.slice(0, 5);
//     return intial + "..." + email.slice(email.indexOf("@"));
// }

// console.log(protect_email("robin_singh@example.com"));
// Output:  "robin...@example.com"

// ----------------------------------------------------------------

// Write a JavaScript function to parameterize a string.

// function string_parameterize(str) {
//     return str.split(' ').join('-').toLowerCase();
// }
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// Output: "robin-singh-from-usa"

// ----------------------------------------------------------------

//   Write a JavaScript function to capitalize the first letter of a string.

// function capitalize_first_letter(str) {
//     return str.trim().charAt(0).toUpperCase() + str.trim().slice(1);
// }
// Test Data :
// console.log(capitalize_first_letter('    js string exercises'));
// Output: "Js string exercises"

// ----------------------------------------------------------------

// Write a JavaScript function to capitalize the first letter of each word in a string.

// function capitalize_first_each_word(str){
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

// Test Data :
// console.log(capitalize_first_each_word('js string exercises'));
// "Js String Exercises"

// ----------------------------------------------------------------

// Write a JavaScript function to insert a string within a string at a particular position (default is 1).


// function insert(str, ins='', position = 0) {
//     return str.slice(0, position) + ins + str.slice(position);
// }

// Test Data :
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// Output: "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises.”

// ---------------------------------------------------------------- OBJECTS QUESTIONS AND ANSWERS 

// ----------------------------------------------------------------

// const source = { a: 1 };
// const target = { b: 2 };
// Object.assign(target, source);
// console.log(target);

// const obj1 = { a: 12, b: 23 };
// const obj2 = obj1;
// const obj3 = { ...obj1 };
// obj1.c = 23;
// console.log(obj1.c, obj2.c, obj3.c);

// const obj1 = { a: 12, b: 23 };
// const obj2 = { a: 44, b: 45 };
// const obj3 = Object.assign(obj1, obj2);
// obj2.a = 22;
// console.log(obj1, obj2, obj3);

// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign(obj1, obj2);
// obj1.a = 22;
// console.log(obj3);

// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign({}, obj1, obj2);
// obj1.a = 22;
// console.log(obj3);

// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, source);
// console.log(target);



// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, JSON.parse(JSON.stringify(source)));
// source.a.b = 2;
// console.log(target);

// const source = { a: 1 };
// const target = Object.assign({}, source);
// delete target.a;
// console.log(source);

// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === source);

// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === { a: 1, b: 2 });

// const target = { a: 1 };
// const source = { b: 2 };
// Object.assign(target, source);
// target.b = 234;
// console.log(source);

// const target = {};
// const source = { a: 1 };
// const result = Object.assign(target, source);
// source.a = 2;
// console.log(result);

// const target = {};
// const source = { a: { b: 1 } };
// const result = Object.assign(target, source);
// result.a.b = 2;
// console.log(source);


// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// console.log(result);

// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// target.a[2] = 90;
// console.log(result);

// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(target);

//  Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 
// };
// function list_obj_properties(obj) {
//     for (let key in obj) {
//         console.log(key);
//         console.log(obj[key]);
//     }
// }

// list_obj_properties(student);

// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 
// };

// function del_obj_properties(obj) {
//     console.log(obj);
//     delete obj.rollno;
//     console.log(obj);
// }

// del_obj_properties(student);


// function operationObj(obj) {
//   obj = {...obj, c: 12}
// }
// let a = {  x: 34,  y: 56 }
// operationObj(a);
// console.log(a);

// function operationObj(obj) {
//   obj.z = {...obj, c: 12}
// }
// let a = {
//   x: 34,
//   y: 56
// }
// operationObj(a);
// console.log(a);

// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(source);



// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1)

// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// obj1.c.f = 30;
// console.log(arr1); 

// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// obj1.c.f = 30;
// console.log(arr1); 



// let obj1 = { a: 23, b: 45 };
// let arr1 = Object.assign([], [{ ...obj1 }]);
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1); 

// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], arr1);
// arr2[0].c = 5;
// console.log(arr1); 

// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], [{...arr1[0]}]);
// arr2[0].c = 5;
// console.log(arr1); 

// let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
// let obj2 = Object.assign({}, obj1);
// let obj3 = Object.assign({ ...obj2 }, { c: { k: 44 } });
// obj2.c.h = 67;
// console.log(obj1, obj2, obj3);


// Make a function that works as Object.assign() without using the in-built method. (make only for 2 arguments)

function copy_objectAssign(target, source) {
    
}
