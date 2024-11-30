/* ejercicios basico para funcion:

a) Funcion para calcular el cuadrado de un numero
b) Funcion para verificar si el numero es par
c) Funcion que reciba un array y devuelva la longitud 
*/

/* function cuadrado(numero){ // utilizamoa la variable cuadrado y entre parentesis la accion a realizar
    let operacion = numero**2; // declaramos la accion operacion y lo elevamos al cuadrado
    return operacion; // retornamos la accion operacion

}

console.log(cuadrado(5)) // cuando utilizamos consola digitamos directamente la variable que utilizamos en la funcion */

// ejercicio b
/* function ContarPares(array){
    let contador = 0;

    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) {
            contador++;
        }
    }


    return contador;
}

console.log(" Hay " + ContarPares([22,34,7,13,1,6,8,40]) + " numeros pares"); */

// ejercicio c

/* function filtarNumerosMayores(array, numeroDado) {
    // filtramos el array para obtener los numeros mayores al numero dado
    const numerosMayores = array.filter(num => num > numeroDado);
    return numerosMayores;
}

function filtarNumerosMayores2(array, numeroDado) {
    let numerosMayores2 = [] // declarar como local
    for (let i = 0, i < array.length; i++) {
        if (array[i] > numeroDado){
        numerosMayores2.push(array[i]);
        }
    }
    return numerosMayores2;
}

// ejemplo de uso:

let numeros = [1,5,8,10,12,3,6];
let numeroDado = 5;

const resultado = filtarNumerosMayores2(numeros, numeroDado);
console.log(resultado);

const resultado2 = filtarNumerosMayores2(numeros, numeroDado);
console.log(resultado2);*/