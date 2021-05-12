//template strings

const apellido = 'gabilan';

const pais = "RD";

const saludo = "Hola , " + apellido+" Como estas?"; // unica forma de contatenar strings

const saludo2 = `Hola ,${apellido}, como estas?` // plantilla literal


let sumar = (a, b) => a+b;


const mensaje = `Hola, ${apellido},

Esta es la suma de 3 y 2 ${sumar(2,3)}

Esta es una carta, desde ${pais}.`;

console.log(mensaje);



