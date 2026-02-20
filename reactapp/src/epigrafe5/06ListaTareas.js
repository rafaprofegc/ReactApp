/*
Epígrafe 5.2.7 Valor de estado y renderizado

PARA QUE UN COMPONENTE SE RENDERICE DE NUEVO ALGUNA VARIABLE
DE ESTADO TIENE QUE HABER CAMBIADO DE VALOR

SI LA VARIABLE DE ESTADO ES UN OBJETO O UN ARRAY, TIENE QUE
CAMBIAR A UN OBJETO Y ARRAY DIFERENTE, NO PUEDE SER EL MISMO
HABIENDO CAMBIADO ALGUNA PROPIEDAD DEL OBJETO O UN ELEMENTO
DEL ARRAY

Crear un componente que sea una lista de tareas a realizar. Cada una
tiene un botón para indicar si se ha hecho o no.
*/

import {useState} from "react";

function ListaTareas({tareas}) {
  const [listaTareas, setListaTareas] = useState(tareas);

  return (
    <ul>
      {
        listaTareas.map( (tarea, indice) =>
          <li key={tarea}>
            <>
              {tarea} &nbsp; 
              <button onClick={ () => {
                listaTareas.splice(indice, 1);
                setListaTareas(listaTareas);
                console.log(listaTareas);
                }}>Hecha</button>
            </>
          </li>
        )
      }
    </ul>
  )
}

export default ListaTareas;
