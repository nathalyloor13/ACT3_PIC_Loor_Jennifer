// Pedir al usuario que elija entre pares o impares
let tipo = prompt("¿Quieres ver las tablas de números pares o impares? Escribe 'pares' o 'impares'").toLowerCase();

// Validar la entrada y definir los números a mostrar
if (tipo === "pares" || tipo === "impares") {
    let inicio = tipo === "pares" ? 2 : 1; // Primer número de la serie
    let incremento = 2; // Pasos de 2 en 2 para obtener pares o impares

    // Bucle para recorrer los números solicitados
    for (let i = inicio; i <= 10; i += incremento) {
        console.log(`Tabla del ${i}:`);
        
        // Bucle para imprimir la tabla de multiplicar del número actual
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }

        console.log(""); // Espacio en blanco para separar las tablas
    }
} else {
    console.log("Entrada inválida. Debes escribir 'pares' o 'impares'.");
}