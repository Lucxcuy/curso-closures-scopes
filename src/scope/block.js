function fruits() {
    if (true) {
        var fruit1 = "apple"; //function scope. se puede llamar dentro del if y fuera del if pero dentro de la funcion
        let fruit2 = "banana"; //block scope. se puede llamar dentro del bloque donde está, las dos {} del if. pero no por fuera
        const fruit3 = "kiwi"; //block scope. lo mismo qu eel anterior
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
    //console.log(fruit2); //error
    //console.log(fruit3); //error
}

fruits();
