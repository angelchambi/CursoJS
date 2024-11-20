// Declara tres variables a, b y c con valores numericos y utiliza condicionales para determinar cual de ellos es el mayor.

const a= parseInt(prompt("El numero es: "));
const b= parseInt(prompt("El numero es: "));
const c= parseInt(prompt("El numero es: "));

if (a>b && a>c){
    console.log("El mayor es A: "+a);
}
if (b>a && b>c) {
    console.log("El mayor es B: "+b)
} 
else {
    console.log("El mayor es C: "+c) 
}