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
console.log(arr);
// ----------------------------------------------------------------

// import ex from "express";
// const express = require("express");
// const app = express();
// app.listen(3000, () => console.log("Hello"));

// ----------------------- Enums --------------------

enum Roles {
  user = "user",
  admin = "admin",
}

type loginCredentials = {
  email: string;
  password: string;
  role: Roles;
};
//
const user1: loginCredentials = {
  email: "user@example.com",
  password: "pass@1234",
  role: Roles.user,
};
//
const user2: loginCredentials = {
  email: "admin@example.com",
  password: "pass@123",
  role: Roles.admin,
};

console.log(user1);
console.log(user2);

const isAdmin = (user: loginCredentials): string => {
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

const displayInfo = (person: any) => {
  const [name, age, hasDrivingLicense] = person;
  return `Name:${name}, Age:${age}, HasDrivingLicense:${
    hasDrivingLicense ? "Yes" : "No"
  }`;
};
type PersonInfo = readonly [string, number, boolean];

const per1: PersonInfo = ["Sachin", 19, true];
const per2: PersonInfo = ["Pujan", 20, false];
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

const userInput = (value: string | number) => {
  if (typeof value === "number") {
    return value * 2;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return "Invalid input";
  }
};

console.log(userInput(50));
console.log(userInput("sachin"));
// console.log(userInput(true));
const userInput2 = (value: string | number | boolean) => {
  if (typeof value === "string") {
    let v = value.split("")[0].toUpperCase() + value.slice(1, value.length);
    return v;
  } else if (typeof value === "number") {
    return "$" + value;
  } else if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }
};

console.log(userInput2(10));
console.log(userInput2("aello"));
console.log(userInput2(true));

// ----------------------------------------------------------------
// union in objects

type pers = {
  name: string;
  age: number;
};

type emplos = {
  emp_id: number;
  department: string;
};

type emplos_details = pers | emplos;

const employee: emplos_details = {
  name: "Sachin",
  age: 22,
  department: "Backend Developer",
};

type employee_details = pers & emplos;

const employee2: employee_details = {
  name: "Sachin",
  age: 22,
  emp_id: 125,
  department: "Backend Developer",
};

// example

type user = {
  name: string;
  age: number;
  gender: string;
  phone: number;
};
type myLocation = {
  city: string;
  state: string;
};

// type allDetails = user & myLocation;

const userr: user = {
  name: "Sachin",
  age: 18,
  gender: "male",
  phone: 1547823690,
};

// const userr2: allDetails = {
const userr2: user & myLocation = {
  name: "Pujan",
  age: 22,
  gender: "male",
  phone: 7845960123,
  city: "Ahmedabad",
  state: "Gujarat",
};

// const createUserProfile = (info:allDetails) => {
const createUserProfile = (info: user & myLocation) => {
  return `My name is ${info.name} and I'm from ${info.city},${info.state}`;
};

console.log(createUserProfile(userr2));
// Generics Typescript

const print1 = <placeholder>(value: placeholder): placeholder => {
  return value;
};

let print2 = <placeholder>(a: placeholder, b: placeholder): placeholder => {
  if(typeof a==="number" && typeof b==="number"){
    return a + b as placeholder;
  }
  else if(typeof a==="string" && typeof b==="string"){
    return a + b as placeholder;
  }
  throw new Error("You are wrong type")
};

const str = print1("Hello, world!");
const num = print1(458);
const bool = print1(true);

console.log(str, num, bool);
console.log(print2(1, 2));
console.log(print2("1", "2"));
