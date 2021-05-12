///export

export const nombre = " Felipe";
export const edad = 999;
export const duplicar = (valor) => valor * 2;

//exportar clases
export default class Cuadrado {
  static area() {
    return "El area es 5 ";
  }
}

//export { nombre as default, edad, duplicar };
// export const nombre = " Felipe";
// se puede exportar de esas dos maneras

// valor que se exporta por defecto as defaut

//import

import "./styles.css";
import Cuadrado, { nombre2, edad as edad2, duplicar } from "./persona";
// creacion de modulos
document.getElementById("app").innerHTML = `
  ${nombre2} ${edad2} ${duplicar(3)}
  ${Cuadrado.area()}
`;
