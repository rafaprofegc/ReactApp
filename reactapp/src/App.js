import logo from './logo.svg';
import './App.css';

/* Epígrafe 6.2.4 Ejecutar un efecto y la función de limpieza cada vez que se renderice

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
