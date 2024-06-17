"use strict";
//tipos basicos
let age = 5;
let nome = 'Nelore';
let isValid = false;
let idk = 5;
const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const booleans = [true, false, false, true];
const names = ['nelore', 'nelorinho', 'galo cego'];
//tuplas
const person = [1, ''];
// lista de tuplas
const people = [
    [1, 'nelore'],
    [2, 'nelorinho da silva'],
];
//Intersections
const productID = false;
//Enum 
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Down;
//type assertions
const productName = "Ai ai ai";
//let itemId = productName
let itemId = productName;
console.log(age);
