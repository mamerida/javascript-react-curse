//antes
let miFuncion = function duplicar(valor){
    //this // funcion tradicional valor del objeto que realizo la invocacion
    return valor * 2
}

//ahora

let duplicar = (valor) => { //funcion fecha
    //this // lugar donde la funcion fue definida la funcion
    return valor * 2;

}
 let duplicar2 = valor => valor => valor * 2;

 //funcion flecha con dos pararametros

 let sumar = (sumando1 ,  sumando2) => sumando1 + sumando2;

 let imprimirAlgo = () => console.log ("algo");

 let funcionCompleja = () => {
     //linea 1 
     //linea 2
     //linea 3 
     //.....
 }

 // this permite acceder al contexto del codigo acutal

 const obj = {
    funcionNormal: function(){
        console.log("funcion normal", this);
    },
    funcionFlecha : () => {console.log("funcion flecha", this)  }
 }

 console.log("this del ambiente", this);
 obj.funcionNormal();
 obj.funcionFlecha();
 