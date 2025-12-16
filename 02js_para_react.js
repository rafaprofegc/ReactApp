// JAVASCRIPT FUNDAMENTAL PARA REACT

// 2.1 Declaración de variables
console.log("2.1 Declaración de variables");

// Declaración de variables con var
// Tiene ámbito del script completo
var tema = "JavaScript";
if( tema ) {
  // Vuelvo a declarar la variable con var
  var tema = "React";
  console.log("En el bloque if: " + tema); // Sale React
}
// Con var no se bloquea la variable dentro de un bloque
console.log("Fuera del bloque: " + tema); // Sale React

// Declaración de variables con let
// Tienen ámbito de bloque
let framework = "Sinfony";
if( framework === "Sinfony" ) {
  // Con let si se bloquea la variable framework
  // Aquí framework bloquea la definida a nivel de script
  let framework = "Laravel";
  console.log("Dentro del bloque: " + framework);   // Sale Laravel
}
console.log("Fuera del bloque: " + framework);   // Sale Sinfony

// En un bucle for, las llaves no bloquean el alcance de 
// una variable
for( var i = 0; i < 5; i++ ) {
  console.log("En el bucle iteración: " + i);
}
console.log("Variable i fuera del bucle: " + i);

i = 80;   // Esta variable i es la que se ha definido con var
for( let i = 0; i < 5; i++ ) {
  console.log("En segundo bucle iteración: " + i);
}
console.log("Variable i fuera del bucle: " + i); // Sale 80

for( let j = 0; j< 5; j++) {    // j solo existe en el bucle
  console.log("Variable j en iteracion: " + j);
}

//console.log("Variable j fuera del bucle: " + j); // Error por not defined

// 2.2 CADENAS DE PLANTILLA
console.log("2.2 Cadenas de plantilla");
let apellido1 = "García";
let apellido2 = "Gómez";
let nombre = "Sergio";

// Para enviar a la consola una cadena que incluya
// las anteriores hay que concatenarlas
console.log("El nombre es " + nombre + " " + apellido1 + " " + apellido2);

// Con una cadena de plantilla se puede crear una cadena
// e insertar los valores de las variables encerrados en ${}
console.log(`El nombre es ${nombre} ${apellido1} ${apellido2}`);

// Podemos meter expresiones
console.log(`El nombre es ${nombre} ${apellido1 + " " + apellido2}`);
console.log(`El nombre es ${nombre.toUpperCase()} ${apellido1} ${apellido2}`);

// En las cadenas de plantilla 
// se respetan los espacios en blanco
let cantidad = 8;
let evento = "Feria del queso";
let precio = 25;
let agente = "Manuel Sánchez";
const email = `
Hola ${nombre},
Gracias por comprar ${cantidad} entradas para ${evento}.
Detalles del pedido:
${nombre} ${apellido1} ${apellido2}
${cantidad} x ${precio}€ = ${cantidad * precio}€ para ${evento}
Puede recoger sus entradas 30 minutos antes del evento
Gracias,
${agente}
`;
console.log(email);





