let persona ={
    nombre : "felipe",
    apellido : "Merida",  
    edad :999  

};

// obtener variables dentro de persona 

const nombre1 = persona.nombre;
const apellido1 = persona.apellido;
const edad1= persona.edad;

//destructuracion 

const {nombre,apellido,edad} = persona; //nombre de la variable tiene que ser igual al nombre de la propiedad

obtenerDireccion = () => {
    return {
        calle : "Mi calle",
        pais : "Mi pais",
        provincia : "Mi provincia"
    };
}

const{pais,provincia} = obtenerDireccion();

//console.log(pais);

// desestructurar los parametros de una funcion

imprimirNombre = (persona) =>{
    console.log(persona.nombre);

}

imprimirNombre2 = ({nombre}) => {
//no importa que pase mientras tenga el parametro nombre
    console.log(nombre);
}

//imprimirNombre2(persona);

//destructurar arreglo

const arreglo = [1,2,3,4];

const [primero,segundo,,cuarto] = arreglo; // uso ,, para saltarme el elemento 

//console.log(primero);
//console.log(cuarto);

const retornaArreglo = () =>{
    return ["Felipe","gabilan"]

}

const [nombre2,apellido2] = retornaArreglo();

console.log(nombre2);