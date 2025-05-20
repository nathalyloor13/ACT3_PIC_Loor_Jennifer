//DATOS DE LA PERSONA 
let nombre_persona="ARTURO VERA";
let edad=80;
let peso=92.20
//SALIDA DE DATOS POR CONSOLA
if (isNaN(edad) || edad < 0) {
    console.log("Edad no válida");
} else if (edad >= 0 && edad <= 12) {
    console.log("Niño");
} else if (edad >= 13 && edad <= 17) {
    console.log("Adolescente");
} else if (edad >= 18 && edad <= 59) {
    console.log("Adulto");
} else {
    console.log("Adulto mayor");
}
