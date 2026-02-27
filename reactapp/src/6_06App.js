import logo from './logo.svg';
import './App.css';

/* Epígrafe 6.2.3 Ejecutar un efecto en el montaje y algunos renderizados
    Caso de uso muy común: actualizar una variable de estado basandonos
    en el valor de una propiedad.

    Si inicializamos una variable de estado en useState() con el valor de una propiedad
    , solo se establece cuando el componente se renderiza la 1ª vez al montaje.
    Si el componente vuelve a renderizarse posteriormente con un nuevo valor de propiedad
    el estado no se actualiza automáticamente a ese valor, por que useState utiliza
    el valor de inicio la primera vez y luego lo ignora.

    Para solucionarlo, usamos un efecto que depende del valor de la propiedad y
    actualiza el valor de estado en función de la propiedad
  */


import DireccionEmail from './epigrafe6/06DireccionEmail';

import {useState} from "react";

function App() {
  const direccionesEmail = ["pepe@loquesea.com", "maria@gemail.com", "javier@jotmail.com"];
  const [email, setEmail] = useState(direccionesEmail[0]);

  return (
    <>
      <DireccionEmail email={email}/>
      <br/>
      <button onClick={() => setEmail(direccionesEmail[0])}>Poner email 0</button>&nbsp;
      <button onClick={() => setEmail(direccionesEmail[1])}>Poner email 1</button>&nbsp;
      <button onClick={() => setEmail(direccionesEmail[2])}>Poner email 2</button>&nbsp;
    </>
  )

}

export default App;
