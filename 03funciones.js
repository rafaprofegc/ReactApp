// 2.3 Funciones
// Declarando una función de forma tradicional
function mensajeLog(mensaje) {
  console.log(mensaje);
}

mensajeLog("Esto es una función tradicional");

// Una expresión de función
const mensajeLog1 = function(mensaje) {
  console.log(mensaje);
};

mensajeLog1("Esto es una expresión de función");


// Las declaración de función tradicional se elevan, mientras
// que las expresiones de función no se elevan

console.log(`El cuadrado de 4 es ${cuadradoNumero(4)}`);

function cuadradoNumero(numero) {
  return numero * numero;
}

// Esto no se ejecuta ya que todavía la variable
// cuadradoExpresion no está declarada
// console.log(`El cuadro de 3 es ${cuadradoExpresion(3)}`);

const cuadradoExpresion = function(numero) {
  return numero * numero;
}

// Parámetros por defecto
function actividadUsuario(usuario = "Admin", actividad = "Registro de usuarios") {
  console.log(`El usuario ${usuario} se dedica a ${actividad}`);
}

actividadUsuario("Invitado", "Navegar por Internet");
actividadUsuario();
actividadUsuario("Operador");

// Los argumentos por defecto pueden ser objetos
const usuarioPorDefecto = {
  datos: {
    login: "pepe",
    perfil: "Admin"
  },
  actividad: "Administrar el sitio web"
};

console.log(`Usuario: ${usuarioPorDefecto.datos.login}`);
function actividadUsuario2(usuario = usuarioPorDefecto) {
  console.log(`El usuario ${usuario.datos.login} con perfil ${usuario.datos.perfil}`);
  console.log(`Actividad principal: ${usuario.actividad}`);
}

actividadUsuario2();

// 2.4 Funciones flecha
// Formas de definir una función flecha
// 1ª Forma. Sin parámetros y con solo una expresión
//    () => expresión
const radio = 3;
const circunferencia = () => Math.PI * radio * 2;
console.log(`La circunferencia con radio 3 es: ${circunferencia()}`);

// 2ª forma. 1 parámetro y una sola expresión
const circulo = radio => Math.PI * radio * radio;
const circulo2 = (radio) => Math.PI * radio * radio;
console.log(`El área del círculo con radio 5: ${circulo(5)}`);
console.log(`El área del círculo con radio 7: ${circulo2(7)}`);

// 3ª forma. Con múltiples parámetros y solo una expresión
const potencia = (base, exponente) => base ** exponente;
console.log(`4 elevado a 3 es ${potencia(4,3)}`);

// 4ª forma. Múltiples sentencias (cuerpo en el bloque)
// Require llaves para definir el bloque de la función y
// además una sentencia return para devolver un valor
const potencia2 = (base, exponente) => {
  acumulador = base; // 4
  contador = 1;
  while( contador < exponente ) {
    acumulador *= base;
    contador++;
  }
  return acumulador;
}
console.log(`4 elevado a 3 es ${potencia2(4,3)}`);

// 5ª forma. Sin parámetros y con múltiples sentencias
const nombreCompleto = () => {
  nombre = "Pepe";
  apellidos = "García Gómez";
  return `${nombre} ${apellidos}`;
}
console.log(nombreCompleto());

// La función flecha devuelve un objeto y solo
// tiene una expresión
const usuario = () => ({ login: "pepe", perfil: "Admin", nivel: 0 });
const objetoUsuario = usuario();
console.log(objetoUsuario);





