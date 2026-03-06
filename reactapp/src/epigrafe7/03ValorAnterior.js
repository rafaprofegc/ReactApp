/*
  Epígrafe 7.2 Guardar el valor anterior de una variable de estado.

  Crear un componente que renderiza un texto de entrada para introducir
  el sueldo de un trabajador. 
  
  El sueldo inicial se pasa como propiedad

  Con un botón actualizamos al nuevo sueldo y guardamos el anterior en una referencia

  Mostramos la diferencia entre ambos sueldos (actual y el anterior)

*/

import {useRef, useState, useEffect} from "react";

function ValorAnterior({sueldoInicial}) {
  const [sueldo, setSueldo] = useState(sueldoInicial);

  const sueldoAnterior = useRef(null);
  const textoEntrada = useRef(null);

  useEffect( () => {
    sueldoAnterior.current = sueldo;
  }, [sueldo]);

  return (
    <>
    <p>Mi sueldo actual es {sueldo} €</p>
    {sueldoAnterior.current !== null && 
    <p>
      Mi sueldo anterior era {sueldoAnterior.current} €. 
      La diferencia es {sueldo - sueldoAnterior.current} €
    </p>
    }

    <div>
      <input ref={textoEntrada} type="text" size="10"/>&nbsp;
      <button type="button" onClick={() => setSueldo(textoEntrada.current.value)}>Actualizar el sueldo</button>
    </div>
    </>
  );
}

export default ValorAnterior;
