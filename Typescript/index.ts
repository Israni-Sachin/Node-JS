//@ts-ignore

function get(a: number, b: number): number {
  return a + b;
}
get(10, 4);

// TYPE ANNOTATION

let fname: string = "sachin";
let lname: string = "israni";
let fullName: string = fname + "_" + lname;
console.log(fullName);

let fullNameLength: number = fullName.length;
console.log(fullNameLength);

let upperCase: string = fullName.toUpperCase();
let lowerCase: string = fullName.toLowerCase();

let longText: string = "abcdefghijklmnopqrstuvwxyz";
let shortText: string = longText.slice(0, 11);
console.log(shortText, " shortText");

let str1: string = "sachin";
let str2: string = "sachin";
let areEqual: boolean = str1 === str2;
console.log(areEqual);

let product: string = "Phone";
let price: number = 500;
let message: string = `The product ${product} is priced at ${price} dollars.`;

function info(id: number, password: string) {
  console.log(`Your ID is ${id} and password is ${password}`);
}

info(5, "sachin@2222");

const isPalindrome = (string: string): boolean => {
  let palin = string.split("").reverse().join("");
  return palin === string;
};

console.log(isPalindrome("12321"));

// Array
const numbers = [1, { a: 2 }, undefined, null, "5", true, 7, 8, 9, 10];
const number: any[] = [1, { a: 2 }, undefined, null, "5", true, 7, 8, 9, 10];

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
type Persons = {
  name: string;
  age: number;
  isStudent: boolean;
  class?: string;
  address: { city: string; country: string };
};

const person2: Persons = {
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

type Student = {
  name: string;
  age: number;
  gender?: string;
  greet: (country: string) => string; // method call signature
  // (country: string) : string; // method call signature
};

const student1: Student = {
  name: "Sachin",
  age: 18,
  gender: "Male",
  greet: (country) =>
    `Hello, My name is ${student1.name} and my age is ${student1.age} and I'm from ${country}`,
};

const student2: Student = {
  name: "Pujan",
  age: 22,
  gender: "Male",
  greet: (country) =>
    `Hello, My name is ${student2.name} and my age is ${student2.age} and I'm from ${country}`,
};
const student4: Student = {
  name: "Sonu",
  age: 20,
  gender: "Male",
  greet: (country) =>
    `Hello, My name is ${student4.name} and my age is ${student4.age} and I'm from ${country}`,
};
const student5: Student = {
  name: "Raj",
  age: 25,
  gender: "Male",
  greet: (country) =>
    `Hello, My name is ${student5.name} and my age is ${student5.age} and I'm from ${country}`,
};
const student6: Student = {
  name: "Simran",
  age: 24,
  gender: "Female",
  greet: (country) =>
    `Hello, My name is ${student6.name} and my age is ${student6.age} and I'm from ${country}`,
};
const student7: Student = {
  name: "Soniya",
  age: 18,
  gender: "Female",
  greet: (country) =>
    `Hello, My name is ${student7.name} and my age is ${student7.age} and I'm from ${country}`,
};

const arr: any = [student1, student2, student4, student5, student6, student7];

console.log(student1);
console.log(student1.greet("India"));
console.log(student2);
console.log(student2.greet("China"));
console.log(arr)
// ----------------------------------------------------------------

// import ex from "express";
// const express = require("express");
// const app = express();
// app.listen(3000, () => console.log("Hello"));
