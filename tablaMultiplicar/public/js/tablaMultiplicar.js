// Solicitar al usuario un número
let numero = parseInt(prompt("Escribe un número para ver su tabla de multiplicar:"));

// Verificar que el valor ingresado es un número válido
if (!isNaN(numero)) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    
    for (let i = 1; i <= 12; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
} else {
    console.log("Por favor, ingresa un número válido.");
}