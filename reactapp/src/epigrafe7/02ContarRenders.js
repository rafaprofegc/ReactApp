/*
  Epígrafe 7.3 Uso de referencias para guardar un "estado pasivo"

  Estado pasivo es una variable del componente que al cambiar de valor
  no provoca un nuevo renderizado.

  Crear un componente que muestra un contador que se incrementa en 1 cuando se
  hace clic en un botón y visualiza también cuantas veces se ha renderizado 
  el componente.
*/

import {useRef, useState, useEffect} from "react";

function ContarRenders() {
  const [contador, setContador] = useState(0);

  const numRenders = useRef(1);

  useEffect( () => {
    numRenders.current += 1;
  }, [contador]);

  const setter = (actual) => actual + 1;
  
  return (
    <p>
      Contador: {contador}&nbsp; 
      <button onClick={() => setContador( setter )}>Incrementar</button>
      <br/>
      Número de renders: {numRenders.current}
    </p>
  );
}

export default ContarRenders;