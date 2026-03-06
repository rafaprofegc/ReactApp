/*
  Epígrafe 8.1 Gestión de eventos en React

  Eventos de ratón

  Crear un componente que renderiza un título h1 que al mover el ratón sobre él
  muestra un mensaje de que se está moviendo.

  Renderizar un título h1 que muestra las coordenadas del ratón cuando se hace clic
  sobre él.

  Renderizar un título h1 que muestra cuando el ratón se ha introducido dentro

*/


import {useState, useEffect} from "react";

function EventosRaton() {
  const [estaMoviendose, setMoviendose] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect( () => {
    if( !estaMoviendose ) return;

    const intervalo = setInterval( () => setMoviendose(false), 500);

    return () => clearInterval(intervalo);
  }, [estaMoviendose]);

  function CambiarCoordenadas(evt) {
    setX( evt.clientX );
    setY( evt.clientY );
  }

  return (
    <section>
      <h1 style={{border: "1px solid black"}} onMouseMove={ () => setMoviendose(true)}>
        Mueve el ratón por este título
      </h1>
      <p>¿Se mueve el ratón? {estaMoviendose ? "El ratón se mueve" : "Quieto!!"}</p>

      <h1 onClick={ (evt) => CambiarCoordenadas(evt)  }>Haz clic sobre esté título {x !== 0 && y !== 0 && `Coordenadas: ${x},${y}`}</h1>

      <h1 onMouseEnter={} onMouseLeave={}>¿Está el ratón aquí? {dentro ? "Si" : "No"}</h1>
    </section>
  );
}

export default EventosRaton;