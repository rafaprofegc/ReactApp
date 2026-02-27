/* Epígrafe 6.2.3 Ejecución del efecto en montaje y algunos renderizados

  - Un componente Combinación que es un prenda de ropa y un color
  - Queremos que si la prenda de ropa cambia, se muestre en la pestaña del navegador.
  - En App tenemos las variables de estado: prenda y color.
  - En App usamos botones para cambiar la prenda y el color
  - Al renderizar App las variables de estado se pasan como propiedad a Combinación
    y esto provoca que Combinación se renderice de nuevo.
*/

import {useEffect} from "react";

function Combinacion({prenda, color}) {

  const estilo = {border: "1px solid black", padding: "0.5em"};
  
  useEffect( () => {
    document.title = `${prenda} ${color}`;
  }, [prenda]);

  return (
    <section style={estilo}>
      <h3>Me pongo {prenda} de color {color}</h3>
    </section>
  );
}

export default Combinacion;