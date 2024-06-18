//tipos basicos
let age: number = 5;
let nome: string = 'Nelore'
let isValid: boolean = false
let idk: any = 5

const ids:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const booleans: boolean[] = [true, false, false, true]
const names: string[] = ['nelore', 'nelorinho', 'galo cego']

//tuplas
const person: [number, string] = [1, '']

// lista de tuplas
const people: [number, string][] = [
    [1, 'nelore'],
    [2, 'nelorinho da silva'],
]

//Intersections
const productID: string | number | boolean = false

//Enum 
enum Direction{
    Up= 1,
    Down=2
}

const direction = Direction.Down; 


//type assertions
const productName: any = "Ai ai ai"

//let itemId = productName
let itemId = <string>productName


console.log(age)