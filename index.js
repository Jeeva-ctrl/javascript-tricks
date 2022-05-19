// Import stylesheets
import './style.css';

function invert(obj) {
  return Object.entries(obj);
}
/// https://media-exp1.licdn.com/dms/document/C4D1FAQFqmKPQJW2nhw/feedshare-document-pdf-analyzed/0/1652886303725?e=1654128000&v=beta&t=ay3R0hShcj9m6YQw4uIJNMBj2hOL-ZgMBbOA97sKkkE

// Inverting key and value

let obj = { age: 12, name: 'xya', hairColor: 'black' };

console.log(
  'invert',
  invert(obj).reduce((accum, [key, value]) => {
    return { ...accum, [value]: key };
  }, {})
);

// {12: "age", xya: "name", black: "hairColor"}

//check property exists in object or not

const employee = {
  id: 1,
  name: 'john',
  salary: 5000,
};

const isSalaryExists = 'salary' in employee;
console.log({ isSalaryExists });

// conditionally add a property to an object

const includeSalary = true;

const employee1 = {
  id: 1,
  name: 'john',
  ...(includeSalary && { salary: 5000 }),
};

console.log({employee1})


// use includes to check for multiple criteria

const rbgColors = ["red","green","blue"];
const isRbgColor = (color)=> rbgColors.includes(color);

console.log("isRbgColor",isRbgColor("red"))


//Remove duplicate from array using set 

const numbers = [1,2,3,2,4,2,4,5,6,7,8,8];

console.log("Duplicate removed",[...new Set(numbers)])

// Use spread operators to shallow copy

const scores = [10,20,30];
const employee2 = {id:1, name:'john'};

const newScores = [...scores];
const newEmployee = {...employee2};

console.log({newScores})
console.log({newEmployee})


//Use rest operator to create a new copy without given property name

const employee4 = {
  id: 1,
  name: 'john',
  salary: 5000,
};
const { salary ,...newEmployee4} = employee4;
console.log({newEmployee4})

// to determine element is array 

console.log("isArray",Array.isArray(numbers))

// use falsy bouncer to remove 0,"",null,false

const  numbersWithFalsy = [7,null,"",0,1,2,2];
console.log("removing falsy values",numbersWithFalsy.filter(Boolean))
///

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1> ${invert(obj)}`;
