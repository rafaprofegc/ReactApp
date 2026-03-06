/*
Epígrafe 6.2.4 Ejecutar un efecto y la función de limpieza cada vez que se renderice

- Crear un componente CronoAtras
- Consiste en una cuenta atrás en segundos desde un valor inicial pasado como propiedad.
- Incluímos 2 botones: Pausar | Reanudar y Reiniciar
- Si pausamos, la cuenta atrás se para.
- Si reanudamos, la cuenta atrás de inicia de nuevo.
- Si el crono llega a 0, el botón reiniciar se deshabilita.
*/

import {useEffect, useState} from "react";

function CronoAtras({inicio}) {
  const [contador, setContador] = useState(inicio);
  const [activo, setActivo] = useState(true);

  useEffect( () => {
    if( !activo ) return;

    const intervalo = setInterval( () => setContador((actual) => {
      if( actual <= 1 ) {
        setActivo(false);
      }
      return actual - 1;
    }), 1000);

    return () => clearInterval(intervalo);
  }, [activo]);
  return (
    <p>
      Contador: {contador} &nbsp;
      <button onClick={() => setActivo(!activo)}>{activo ? "Pausar" : "Reanudar"}</button>&nbsp;
      <button disabled={contador === 0} onClick={() => setContador(inicio)}>Reiniciar</button>&nbsp;
    </p>
  );
}

export default CronoAtras;