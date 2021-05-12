let apellido = " Gavinal";
let edad = 999;
let fecha = new Date();

const paisProp = "pais";
const paisValor = "RD";

let persona ={
    nombre : "felipe",
    apellido,  // son iguales apellido : apellido,
    edad , // es igualedad : edad,
    fechaActual :new Date(),
    funcionNorma(){
        //.....
    },
    funcionflecha : () => {},
    [paisProp] : paisValor // atributo objeto con  nombre igual a la variable nombre propiedad objeto propiedad dinamica
    
};

//obtener el valor de un objeto apartir de una variable

const retornarValoresPersona = (prop) => persona[prop]; // acceder a una propiedad de un objeto en base a lo que 
//le manden en el string

console.log(retornarValoresPersona("apellido"));
console.log(persona["pais"]);