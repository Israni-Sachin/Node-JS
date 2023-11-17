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
// ----------------------- Enums --------------------
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
//
const user1 = {
    email: "user@example.com",
    password: "pass@1234",
    role: Roles.user,
};
//
const user2 = {
    email: "admin@example.com",
    password: "pass@123",
    role: Roles.admin,
};
console.log(user1);
console.log(user2);
const isAdmin = (user) => {
    const { email, role } = user;
    return role === "admin"
        ? `${email} is allowed to edit the website`
        : `${email} is not allowed to edit the website`;
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
// ------------------------ Tuples ------------------------
// Both methods can add more elements with the push method and not at the declaration time.
// readonly makes the array which is nt be manipulated by array methods
// ---------------- 1st way to define tuples ------------------------
const displayInfo = (person) => {
    const [name, age, hasDrivingLicense] = person;
    return `Name:${name}, Age:${age}, HasDrivingLicense:${hasDrivingLicense ? "Yes" : "No"}`;
};
const per1 = ["Sachin", 19, true];
const per2 = ["Pujan", 20, false];
// per1.push("Hello");
// console.log(per1, per2);
console.log(displayInfo(per1));
console.log(displayInfo(per2));
// ---------------- 2nd way to define tuples ------------------------
// let PersonInfo: [string, number, boolean];
// PersonInfo = ["Sachin", 19, true];
// PersonInfo.push("Pujan");
// console.log(PersonInfo);
// ---------------- Unions and intersections --------------------------------
// union in function
const userInput = (value) => {
    if (typeof value === "number") {
        return value * 2;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return "Invalid input";
    }
};
console.log(userInput(50));
console.log(userInput("sachin"));
// console.log(userInput(true));
const userInput2 = (value) => {
    if (typeof value === "string") {
        let v = value.split("")[0].toUpperCase() + value.slice(1, value.length);
        return v;
    }
    else if (typeof value === "number") {
        return "$" + value;
    }
    else if (typeof value === "boolean") {
        return value ? "Yes" : "No";
    }
};
console.log(userInput2(10));
console.log(userInput2("aello"));
console.log(userInput2(true));
const employee = {
    name: "Sachin",
    age: 22,
    department: "Backend Developer",
};
const employee2 = {
    name: "Sachin",
    age: 22,
    emp_id: 125,
    department: "Backend Developer",
};
// type allDetails = user & myLocation;
const userr = {
    name: "Sachin",
    age: 18,
    gender: "male",
    phone: 1547823690,
};
// const userr2: allDetails = {
const userr2 = {
    name: "Pujan",
    age: 22,
    gender: "male",
    phone: 7845960123,
    city: "Ahmedabad",
    state: "Gujarat",
};
// const createUserProfile = (info:allDetails) => {
const createUserProfile = (info) => {
    return `My name is ${info.name} and I'm from ${info.city},${info.state}`;
};
console.log(createUserProfile(userr2));
// Generics Typescript
const print1 = (value) => {
    return value;
};
const print2 = (a, b) => {
    let sum = a + b;
    return sum;
};
const str = print1("Hello, world!");
const num = print1(458);
const bool = print1(true);
console.log(str, num, bool);
console.log(print2([1, 2], [3, 4]));
