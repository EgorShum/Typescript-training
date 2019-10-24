const apples: number = 5;
const apples2 = 5; // type inference
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json); // JSON.parse() can return any data type
console.log(coordinates); // { x: 10, y: 20};

// annotate
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json); // JSON.parse() can return any data type
console.log(coordinates); // { x: 10, y: 20};

// 2)
let words = ['red', 'green', 'blue'];
let foundWord;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// annotate
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
const numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = true;
  } else {
    numberAboveZero = numbers[i];
  }
}
