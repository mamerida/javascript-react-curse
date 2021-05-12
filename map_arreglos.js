// ej 1 map mapear valores de un arreglo hacia otro arreglo 
// valores cuadrados de este arreglo
//crear funciones con los elementos de arreglo como variables
const numeros = [1,2,3,4,5];

const cuadrados = numeros.map((valor) => {valor*valor});

//console.log(cuadrados);

//ej 2 extraer valores de un arreglo 

const personas = [
    {id:1, nombre : "Mario", pais:"RD"},
    {id:2, nombre : "david", pais:"AR"},
    {id:3, nombre : "ANA", pais:"MX"},
]

const ids = personas.map(persona => persona.id);
console.log("ids",ids);
const nombres = personas.map(persona =>persona.nombre);
console.log("nombres ", nombres);

//extraer varios valores

const nombresYPaises = personas.map(persona => {
    return {nombre: persona.nombre , pais : persona.pais}
})

//console.log(nombresYPaises);

//crear codigo html
const divs = persona.map(persona =>`
    <div></div>

`);