/*
Epígrafe 6.2.2
  Ejecutar un efecto en el montaje y en el desmontaje y cuando se renderiza el efecto

  - Componente Reloj que muestra la fecha y hora actual
  - Necesitamos una función de limpieza
*/

import {useState, useEffect} from "react";

function Reloj() {
  const [hora, setHora] = useState( new Date() );

  useEffect( () => {
    const intervalo = setInterval( () => setHora( new Date()), 1000)

    return () => clearInterval(intervalo);
    
  }, [])

  return (
    <>
      <h1>Fecha y hora: {hora.toLocaleString()}</h1>
      <h1>Fecha: {hora.toLocaleDateString()}</h1>
      <h1>Hora: {hora.toLocaleTimeString()}</h1>
    </>
  )
}

export default Reloj;