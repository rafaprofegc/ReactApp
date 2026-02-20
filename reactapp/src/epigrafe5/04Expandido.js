/*
Epígrafe 5.2.5 Asignar un valor estático a la variable de estado

Variante del anterior usando un solo botón
y inicializando si la información confidencial se muestra
o no con una propiedad */

import {useState} from "react";

function Expandido({mostrar}) {
  const [estaVisible, setVisible] = useState(mostrar);

  return (
    <>
      <h2>Información confidencial</h2>
      <button onClick={() => setVisible(!estaVisible)}>{estaVisible ? "Ocultar" : "Mostrar"}</button>
      {estaVisible && <p>Login: pepe - Clave: abc123</p>}
    </>
  );
}

export default Expandido;