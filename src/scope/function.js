function greeting() {
    let userName = "John";
    console.log(userName);

    if (userName === "John") {
        console.log(`Hello ${userName}!`);
    }
}

greeting();
console.log(userName); //userName tiene alcance solo dentro de la funcion greeting(). no puede ser llamada por fuera de la funcion..
