"use strict";
//@ts-ignore
function get(a, b) {
    return a + b;
}
get(10, 4);
// TYPE ANNOTATION
let fname = "sachin";
let lname = "israni";
let fullName = fname + "_" + lname;
console.log(fullName);
let fullNameLength = fullName.length;
console.log(fullNameLength);
let upperCase = fullName.toUpperCase();
let lowerCase = fullName.toLowerCase();
let longText = "abcdefghijklmnopqrstuvwxyz";
let shortText = longText.slice(0, 11);
console.log(shortText, " shortText");
let str1 = "sachin";
let str2 = "sachin";
let areEqual = str1 === str2;
console.log(areEqual);
let product = "Phone";
let price = 500;
let message = `The product ${product} is priced at ${price} dollars.`;
function info(id, password) {
    console.log(`Your ID is ${id} and password is ${password}`);
}
info(5, "sachin@2222");
const isPalindrome = (string) => {
    let palin = string.split("").reverse().join("");
    return palin === string;
};
console.log(isPalindrome("12321"));
// Array
const numbers = [1, { a: 2 }, undefined, null, "5", true, 7, 8, 9, 10];
const number = [1, { a: 2 }, undefined, null, "5", true, 7, 8, 9, 10];
// Objects
const person = {
    name: "sachin",
    age: 18,
    isStudent: true,
    address: {
        city: "Ahmedabad",
        country: "India",
    },
};
const person2 = {
    name: "sachin",
    age: 18,
    isStudent: true,
    address: {
        city: "Ahmedabad",
        country: "India",
    },
};
person.address.city = "Surat";
console.log(person.address.city);
const student1 = {
    name: "Sachin",
    age: 18,
    gender: "Male",
    greet: (country) => `Hello, My name is ${student1.name} and my age is ${student1.age} and I'm from ${country}`,
};
const student2 = {
    name: "Pujan",
    age: 22,
    gender: "Male",
    greet: (country) => `Hello, My name is ${student2.name} and my age is ${student2.age} and I'm from ${country}`,
};
const student4 = {
    name: "Sonu",
    age: 20,
    gender: "Male",
    greet: (country) => `Hello, My name is ${student4.name} and my age is ${student4.age} and I'm from ${country}`,
};
const student5 = {
    name: "Raj",
    age: 25,
    gender: "Male",
    greet: (country) => `Hello, My name is ${student5.name} and my age is ${student5.age} and I'm from ${country}`,
};
const student6 = {
    name: "Simran",
    age: 24,
    gender: "Female",
    greet: (country) => `Hello, My name is ${student6.name} and my age is ${student6.age} and I'm from ${country}`,
};
const student7 = {
    name: "Soniya",
    age: 18,
    gender: "Female",
    greet: (country) => `Hello, My name is ${student7.name} and my age is ${student7.age} and I'm from ${country}`,
};
const arr = [student1, student2, student4, student5, student6, student7];
console.log(student1);
console.log(student1.greet("India"));
console.log(student2);
console.log(student2.greet("China"));
console.log(arr);
// ----------------------------------------------------------------
// import ex from "express";
// const express = require("express");
// const app = express();
// app.listen(3000, () => console.log("Hello"));
