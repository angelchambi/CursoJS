/* concepto de una funcion
Una funcion es un bloque de codigo que realiza una tarea 
especifica y puede ser reutilizado, 
se puede declarar de maneras distintas.*/

/* que es un parametro: es una variable de tu funcion*/

function saludar(nombre){
    let saludo= `Hola, ${nombre}`;
    return saludo;
}

let saludo = saludar("Luis");
console.log(saludo)