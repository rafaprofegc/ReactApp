/*
Epígrafe 6.2.2 Ejecutar un efecto en el montaje y el desmontaje o antes de renderizar

- Lista de personajes de Star Wars
- Se cargan con fetch desde un servidor externo.
- ¿Qué ocurre si antes de que llegue la respuesta del servidor, el componente se desmonta?
  La respuesta de la petición fetch() llega en algún momento y se desperdicia
- Para evitarlo, si el componente se desmonta (función de limpieza en el efecto) se aborta
  la petición.
*/

import {useEffect, useState} from "react";

function ListaPersonas() {
  const [listaPersonas, setListaPersonas] = useState([]);

  useEffect( () => {
    const abortar = new AbortController();
    // El 2º argumento es un objeto opciones. La clave signal es un objeto AbortSignal
    fetch("https://swapi.tech/api/people", {signal: abortar.signal}).
      then( (respuesta) => respuesta.json() ).
      then( (datosJson) => datosJson.results).
      then( (datos) => setListaPersonas(datos));

    return () => abortar.abort();
  }, []);

  return (
    <table border="1" width="100%">
      <thead>
        <tr><th>UID</th><th>Nombre</th><th>URL</th></tr>
      </thead>
      <tbody>
        {
          listaPersonas.map( ({uid, name, url}) => 
          <tr key={uid}>
            <td>{uid}</td>
            <td>{name}</td>
            <td>{url}</td>
          </tr>)
        }
      </tbody>
    </table>
  );
}

export default ListaPersonas;