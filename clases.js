class Rectangulo{
    constructor(alto,ancho){
        this.alto = alto;
        this.ancho = ancho;
    }

    area(){
        console.log(`El area de este rectagulo es ${this.alto * this.ancho}`)
    }
}

//clases heredadas

class Cuadrado extends Rectangulo{
    constructor(lado){
        super(lado,lado)//accedo a la clase padre desde la hija 
        this.lado = lado;
    }
//funciones estaticas funciones que no depende de una instacia osea que no hace falta una instancia de objeto
    static miFuncionEstatica(){
        console.log("funcion estatica");
    }

}




const rectangulo1 = new Rectangulo(2,3);
rectangulo1.area();


const rectangulo2 = new Rectangulo(3,7);
rectangulo2.area();

const cuadrado1 = new Cuadrado(5);
cuadrado1.area();

const figura1 = new Cuadrado(3);
//redefino la funcion en la declaracion no funciona con flecha 
    figura1.area = function(){
        console.log(`El area de la figura es ${ this.lado}`)
    }
figura1.area();


Cuadrado.miFuncionEstatica();

