/* Epígrafe 5.2.5
  Actualizar la variable de estado con un valor estático
  Cuando no se necesita saber el valor actual de la variable
  de estado, para calcular el nuevo

  Componente que muestra u oculta una información
*/
import {useState} from "react";

function Expandido() {
  const [estaVisible, setVisible] = useState(false);
  
  return (
    <>
      <h2>Información confidencial</h2>
      <button onClick={() => setVisible(true)}>Mostrar</button>
      <button onClick={() => setVisible(false)}>Ocultar</button> 
      {estaVisible && <p>Login: pepe - Clave: abc123</p>}
    </>
  )
}

export default Expandido;