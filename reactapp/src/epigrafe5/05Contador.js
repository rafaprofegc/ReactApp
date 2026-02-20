/*
Epígrafe 5.2.7 Cambio de estado y renderizado

- Si la variable de estado cambia de valor, el componente se renderiza
- Si la variable de estado no cambiar de calor, el componente no se renderiza

- Usamos las dos formas de invocación de la función setter: con valor estático y con función

Crear un componente contador que tiene dos botones:
  - Incrementa el valor del contador en 1
  - Resetea el valor del contador a 0.
*/

import {useState} from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <main>
      Contador: {contador} &nbsp;
      <button onClick={() => setContador( (actual) => actual + 1)}>Incrementar</button>&nbsp;
      <button onClick={() => setContador(0)}>Resetear</button>
    </main>
  );
}

export default Contador;
