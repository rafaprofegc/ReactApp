/*
Epígrafe 6.2.2 Ejecutar un efecto al montaje, desmontaje y antes de volver a renderizar

- Lista de personajes de Star Wars
- Variante del anterior, pero usando un interruptor para abortar la petición
  en caso de desmontaje

*/

import {useState, useEffect} from "react";

function ListaPersonas() {
  const [listaPersonas, setListaPersonas] = useState([]);

  useEffect( () => {
    let montado = true;

    fetch("https://swapi.tech/api/people").
      then( (respuesta) => respuesta.json() ).
      then( (datosJson) => datosJson.results).
      then( (datos) => {
        if( montado ) setListaPersonas(datos);
      });

      return () => montado = false;


  }, []);

  return (
    <ol>
      {
        listaPersonas.map( ({uid, name, url}) => 
          <li key={uid}><a href={url}>{name}</a></li>
        )
      }
    </ol>
  );
}

export default ListaPersonas;