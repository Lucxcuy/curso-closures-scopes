//var pi; //esto es lo que interpreta js al hacer el console.log
"use strict"; //con esto debemos declarar y asignar al mismo tiempo sino da error
pi = 3.1416; //solo asignamos el valor, no lo declaramos
console.log(pi);

function myFunction() {
    "use strict";
    return (pi = 3.1416); //solo asignamos el valor, no lo declaramos
}
console.log(myFunction());
