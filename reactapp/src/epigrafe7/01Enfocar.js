/*
  Epígrafe 7.1 Uso de referencias para obtener el foco de un campo de formulario

  Crear un componente que tiene un texto de entrada y un botón.

  Cuando se renderiza el componente el campo de entrada obtiene el foco
*/

import {useRef, useEffect} from "react";

function Enfocar() {
  const texto = useRef(null);

  useEffect( () => {
    texto.current.focus();
  }, []);
  
  return (
    <form>
      <input ref={texto} type="text" size="20"/> &nbsp;
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Enfocar;

