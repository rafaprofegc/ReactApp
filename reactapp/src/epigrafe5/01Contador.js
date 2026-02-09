// Importar la función useState de la librería React
// Se emplea para definir variables de estado y su
// función setter

// useState() es un hook. Función especial de React
// que "engancha" con el ciclo de vida del componente
// Los hook de React comienzan todos con use (useState, useRef, useEffect, ...)

import {useState} from 'react';

function Contador() {
  // Definición de una variable de estado
  // Se invoca useState() y se le pasa el valor inicial 
  // de la variable de estado

  // Devuelve un array con la variable de estado y la función setter
  // El array habitualmente se desestructura
  const [contador, setContador] = useState(0); 

  const funcionOnclic = () => setContador( (actual) => actual + 1);
  return (
    <main>
      Contador: {contador} &nbsp;
      { /* La función setter recibe uno de dos argumentos: 
       - El nuevo valor
       - Una función que recibe el valor actual y devuelve el nuevo valor */}
       
      <button onClick={() => setContador( (actual) => contador + 1)}>Incrementar</button>
    </main>
  );
}

export default Contador;