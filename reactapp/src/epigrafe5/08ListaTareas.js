/*
Epígrafe 5.2.8 Múltiples variables de estado

En los componentes podemos utilizar varias variables de estado

Lista de tareas en las que marcamos/desmarcamos las que están hechas

Cada tarea es un objeto con descripción, si está hecha o no y un índice.

Utilizar un flag para indicar si se muestran las tareas pendientes o todas
*/

import {useState} from "react";

function ListaTareas({tareas}) {
  const [listaTareas, setListaTareas] =useState(tareas);
  const [verPendientes, setVerPendientes] = useState(false);

  const estiloHecha = {color: "red", textDecoration:"line-through"};
  const estiloPendiente = { color: "blue", textDecoration:"none"};

  function CambiarTarea(tareas, indice) {
    return tareas.map( (tarea) => 
      tarea.indice === indice ? {...tarea, hecha: !tarea.hecha} : tarea);
  
    // {...tarea,                                    hecha: !tarea.hecha}
    // { descripcion: ..., hecha: false, indice = 3, hecha: true }
    // { descripcion: ..., hecha: true, indice = 3 }
  }
  // Una copia de la lista con los elementos que se van a mostrar
  const listaMostrar = listaTareas.filter((e) => e.hecha === false || !verPendientes);

  return (
    <main>
      <input type="checkbox" onChange={() => setVerPendientes(!verPendientes)}/>Ver solo pendientes
      <ul>
        {
          listaMostrar.map( ({descripcion, hecha, indice}) => 
            <li key={indice} style={hecha ? estiloHecha : estiloPendiente}>
              {descripcion}&nbsp;
              <button onClick={() => setListaTareas( (actual) => CambiarTarea(actual, indice))}>{hecha ? "Pendiente" : "Hecha"}</button>
            </li>
          )
        }
      </ul>  
    </main>
  ) 
}
export default ListaTareas;