/*
  useEffect() es el hook para ejecutar efectos. Un efecto puede ejecutarse
  
    - Al montar el componente
    - Cada vez que se renderiza
    - Al desmontar el componente

  Sintaxis:
    useEffect( <funcion>, <arrayDependencias> )

    useEffect( () => {
      
      // Código del efecto principal

      // return <funcionLimpieza>
      }, [])

  Epígrafe 6.2.1: Efecto al montar el componente
  ¿Qué se hace cuando el componente se monta?
  - Cargar datos desde un servidor
  - Cualquier operación de inicialización


  Ejemplo: Al montar el componente se obtiene una lista de los personajes de Star Wars
  desde https://www.swapi.tech/people
*/
import {useState, useEffect} from "react";

function ListaStarWars() {
  const [lista, setLista] = useState([]);

  // Un efecto que se ejecuta en el montaje
  // Se pone solo el cuerpo del efecto sin 
  // la función de limpieza ( return <funcion>)
  // Además, el array de dependencias está vacío.
  
  useEffect( () => {
    fetch("https://swapi.tech/api/people").
      then((respuesta) => respuesta.json()).
      then((datosJson) => setLista(datosJson.results)).
      catch( (error) => console.log(error));

  }, []);

  return (
    <table width="100%" border="1">
      <thead>
        <tr><th>Uid</th><th>Nombre</th><th>URL</th></tr>
      </thead>
      <tbody>
        {
          lista.map( ({uid, name, url}) => <tr><td>{uid}</td><td>{name}</td><td>{url}</td></tr>)
        }
      </tbody>
    </table>
  )
}

export default ListaStarWars;