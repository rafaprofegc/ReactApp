// Importar definiciones de un módulo
// 1ª forma: Importo algunas definiciones
// desde un archivo js. 
// IMPORTANTE: Si no es una biblioteca que he instalado con npm
//             Tengo que indicar el path completo o relativo
//             comenzando por . Puedo omitir la extensión js
import {suma, resta} from './modulos/operaciones.js';

// 2ª forma: Importar una definición por defecto
import area from './modulos/operaciones.js';

const sumaNumeros = suma(1,2,3,4,5,6,7);
console.log(`La suma de los 7 primeros números es ${sumaNumeros}`);

const restaNumeros = resta(sumaNumeros, 8);
console.log(`La resta es ${restaNumeros}`);

const areaCirculo = area(4);
console.log(`El área del círculo con radio 4 es ${areaCirculo}`);
