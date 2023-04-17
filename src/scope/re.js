var firstName; // undefined
firstName = "Oscar";
console.log(firstName);

var lastName = "David"; //declarar y asignar
lastName = "Ana"; //reasignar
console.log(lastName);

var secondName = "David"; //declarando y asignando
var secondName = "Ana"; //reasignando
console.log(secondName);

//con let

let fruit = "Apple"; //declarar y asignar
fruit = "Kiwi"; //reasignar
console.log(fruit);

let fruit = "banana"; //error. No puedo redeclarar con let

//const
const animal = "Dog"; //declarar y asignar
//animal = "Cat"; //error. No puedo reasignar con const
const animal = "Snake"; //error. No puedo redeclarar con const
console.log(animal);

const vehicle = [];
vehicle.push("Car"); //hacemos referencia a vehicle pero actúa sobre el array, no sobre el const
console.log(vehicle);
vehicle.pop();
console.log(vehicle);
