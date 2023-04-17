//var nameOfDog; = undefined; esto es lo que hace el programa pq no sabe que es
// console.log(nameOfDog);
// var nameOfDog = "Elmo";
// console.log(nameOfDog);

//var elmo; undefined

// function nameOfDog() {
//     console.log(`El mejor perrito es ${elmo}`);
// } ESTO HACE EN LA FASE DE COMPILACION
nameOfDog();

function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`);
}
var elmo = "Elmito";

//lO que hace hoisting es mover las declaraciones de variables y funciones al inicio del archivo para no dar error y declara variables como undefined
