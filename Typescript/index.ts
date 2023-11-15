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

const numbers = [1, { a: 2 }, undefined, null, "5", true, 7, 8, 9, 10];
const number: any[] = [1, { a: 2 }, undefined, null, "5", true, 7, 8, 9, 10];

const person = {
  name: "sachin",
  age: 18,
  isStudent: true,
  address: {
    city: "Ahmedabad",
    country: "India",
  },
};

const person2: {
  name: string,
  age: number,
  isStudent: boolean,
  address: { city: string; country: string },
} = {
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

