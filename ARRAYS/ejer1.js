/*const numeros = [10,20,30,40]; // el vector o variable con su datos
console.log(numeros[1]); // declarar en la consola la variable numeros y el indice en numero
console.log(numeros.length); // declarar en la consola la variable numeros y lenth que es la cantidad de datosa que hay 
numeros.push(50); // agrega un numero al ultimo, se agrega el numero que pongas en el parentesis
numeros.pop(); // elimina el ultimo numero agregado
numeros.unshift(0); // agrega a inicio de la fila el numero cero o el numero que pongas
numeros.shift(); // eliminar el numero que agregaste al inicio
console.log(numeros);*/

const frutas= ["Naranja","Platano","manzana", "uva"]; // la variable fruta y sus datos
frutas.splice(1,2); // el splice tiene la funcion de eliminar datos segun la posicion
frutas.splice(1,0,"banana", "kiwi"); // agrega los datos segun  el indice ubicado por ejemplo 1,0 eso es que el cambio comienza desde el indice 1 y en comillas lo datos agregar
frutas.splice(0,2,"Platano", "fresa"); // en el splice el primer numero es donde inicia y luego de la coma el siguiente numero por ejmplo 0 = agregar, 1= reemplazar y 2= eliminar
console.log(frutas)

