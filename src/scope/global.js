//variables

var a; //declaration
var b = "b"; //declaration and initialization
b = "bb"; //re-assignment
var a = "aa"; //re-declaration

// Global Scope

var fruit = "apple";

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = "Colombia"; //así creamos variables globales dentro de funciones. Esto se debe evitar!!!!
    console.log(country);
}

countries();
console.log(country);
