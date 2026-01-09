// 2.5 Objetos y Arrays
// 2.5.1 Desestructurando objetos

const bocadillo = {
  pan: "chapata integral",
  carne: "lomo",
  queso: "parmesano",
  ingredientes: ["lechuga", "tomate", "mostaza"]
};

// Extraer algunas propiedades
//const pan = bocadillo.pan;
//const carne = bocadillo.carne;

// Crear la constantes pan y carne
// con los valores de las propiedades
// del mismo nombre en el objeto bocadillo.
const {carne, pan} = bocadillo;
console.log(`El pan es ${pan} y la carne es ${carne}`);

// Se puede hacer lo mismo entre parámetros -> argumentos
// Podemos desestructurar un argumento que es un objeto
// en un conjunto de parámetros de una función.

let miCasa = {
  via: "Av",
  nombre: "Velázquez",
  numero: 8,
  cp: 28800,
  localidad: "Madrid"
};

const DireccionCompleta = ({via, nombre, numero, cp, localidad}) => 
  console.log(`La dirección es ${via} ${nombre}, ${numero} - ${cp} ${localidad}`);

const DireccionCompleta2 = (objetoCasa) => {
  const {via, nombre, numero, cp, localidad} = objetoCasa;
  console.log(`La dirección es ${via} ${nombre}, ${numero} - ${cp} ${localidad}`);
};

DireccionCompleta2(miCasa);
DireccionCompleta(miCasa)

// NO es obligatorio desestructurar el objeto completamente
const MiCalle = ({via, nombre}) => 
  console.log(`Mi calle es ${via} ${nombre}`);

MiCalle(miCasa);

// También se pueden desestructurar objetos anidados
miCasa = {
  via: "Av",
  nombre: "Velázquez",
  numero: 8,
  cp: 28800,
  localidad: "Madrid",
  propietario: {
    nombre: "Juan",
    apellidos: "Gómez García"
  }
}
  
const ElPropietario = ({propietario: {nombre, apellidos}}) =>
  console.log(`El propietario es ${nombre} ${apellidos}`);

ElPropietario(miCasa);

// 2.5.2 Desestructurar Arrays
const fruta = ["manzana", "pera", "naranja", "melón"];
const [primeraFruta] = fruta;
console.log(`La primera fruta es ${primeraFruta}`);

const [, , terceraFruta] = fruta;
console.log(`La tercera fruta es ${terceraFruta}`);

// Desestructurar el argumento (array) en varios parámetros
const MercaCordoba = ([primera, segunda, tercera]) =>
  console.log(`La mejor fruta de Córdoba es: ${primera}, ${segunda} y ${tercera}`);

MercaCordoba(fruta);

// 2.5.3 Mejoras en los literales de objeto
// Podemos utilizar variables globales para construir 
// un objeto
let ancho = 10;
let alto = 5;
let fondo = 7;
const volumen = function() { return this.ancho * this.alto * this.fondo };

let caja = { ancho, alto, fondo, volumen };
console.log(`El volumen de la caja es ${caja.volumen()}`);

// Podemos omitir la palabra clave function para definir un método
let persona = {
  nombre: "Juan",
  apellidos: "Gómez García",
  nombreCompleto: function() {
    const nc = `${this.nombre} ${this.apellidos}`;
    return nc;
  },
  profesion: function(profesion) {
    this.profesion = profesion;
  }
};

console.log(`Nombre completo: ${persona.nombreCompleto()}`);
persona.profesion("Fontanero");
console.log(`Su profesión es ${persona.profesion}`);

persona = { 
  nombre: "Manuel",
  apellidos: "García Gómez",
  nombreCompleto() {
    return `Nombre completo: ${this.nombre} ${this.apellidos}`;
  },
  profesion(profesion) {
    this.profesion = profesion;
  }
}

console.log(`Nombre completo: ${persona.nombreCompleto()}`);
persona.profesion("electricista");
console.log(`Su profesión es ${persona.profesion}`);

// 2.5.4 El operador ...

// Juntando 2 arrays
const ciudades = ["Barcelona", "Madrid", "Sevilla", "Córdoba"];
const pueblos = ["Badalona", "Fuenlabrada", "Carmona", "Alcolea"];
const ciudadesPueblos = [...ciudades, ...pueblos];
console.log(ciudadesPueblos);

// Extraer elementos concretos de un array
let [primero] = ciudades;
console.log(`La primera ciudad es: ${primero}`);

//let [ultimo] = ciudades.reverse();
//console.log(`La última ciudad: ${ultimo}`);
// El array ha mutado
//console.log(ciudades);

[ultimo] = [...ciudades].reverse();
console.log(`El último es ${ultimo}`);
console.log(ciudades);

// También podemos usar ... para obtener los restantes elementos del array
const pizzas = ["4 quesos", "margarita", "diavola", "barbacoa"];
const [primera, ...resto ] = pizzas;
console.log(`La primera pizza es ${primera}`);
console.log(resto);

// Recoger los parámetros de una función como un array
function direcciones(...localidades) {
  let [inicio, ...siguientes ] = localidades;
  let [final, ...enMedio] = siguientes.reverse();
  console.log(`Para ir de ${inicio} a ${final} hay que pasar por:`);
  console.log( enMedio.reverse().join(','));
}

const recorrido = ["Córdoba", "La Carlota", "Ecija", "la Luisiana", "Carmona", "Sevilla"];
direcciones("Córdoba", "La Carlota", "Ecija", "la Luisiana", "Carmona", "Sevilla");
direcciones(...recorrido);

// El operador ... aplicado a objetos
const primeraComida = {
  desayuno: "cereales",
  almuerzo: "yogurt"
};
const segundaComida = "Ensalada y agua";
const terceraComida = "Salmón a la plancha";

const dieta = {
  ...primeraComida,
  segundaComida,
  terceraComida
};
console.log(`Esta es mi dieta`);
console.log(dieta);