function greeting() {
    let username = "Oscar";

    function displayUserName() {
        return `Hello ${username}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g); //retorno la funcion display username que es la que está dentro de la func greeting
console.log(g()); //Acá le pido qu eejecute la funcion display username
