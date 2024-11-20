// Declara una variable numero con un valor numerico y utiliza condicionales para determinar en que rango se encuentra.

const  numero= 18 // declaramos la variable con un numero cualquiera

if (numero<10){  // usamos la condicional IF para ver si es mayor o menor
    console.log("El numero esta en le rango: Menor a 10"); // declaramos en la consola el texto a mostrar
}
if (numero>=10 && numero<=20) { // declaramos al numero en el rango de mayor igual a 10 o menor igual a 20
    console.log("El numero esta en el rango: Entre 10 y 20"); // declaramos en la consola el rango entre 10 a 20
} else {
    console.log("El numero esta en el rango: Mayor que 20") // declaramos que el rango es mayor que 20 
}