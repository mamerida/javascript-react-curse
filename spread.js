//descomponer arreglos y manejas sus partes

const sumar = (a,b) => a+b;

const numeros = [2,3];

const suma = sumar(...numeros); //... spreats

//console.log(suma);

// ej 2

const masNumeros  = [1,...numeros , 4 ,5 ];

console.log(masNumeros);


//ej 3:

const otrosNumeros = [4,5];

const concatenar = [...numeros,...otrosNumeros]

console.log(concatenar);

// ej 4 spread mas destructuracion

const [primero ,...restos] = masNumeros

//console.log(masNumeros);
//console.log(primero);
//console.log(restos);

//ej 5 clonar:

const masNumerosClonados = [...masNumeros];


console.log(masNumerosClonados)

// ej6 persona

const persona = {
    nombre : "Mario",
    apellido :"Merida7 "
}
// copiar las propiedades de persona 1 y hacerlo en persona 2 
const persona2 ={
    ...persona,
    edad:999

}

const persona3 ={...persona2};
    persona3.nombre = " David"

console.log(persona2);
console.log(persona3);

//ej 7 creo un objeto a partir de otro quitando un atributo 

const{edad,...persona4} = persona3;