/*
Epígrafe 5.2.9 Ámbito del estado

- Podemos definir el estado en un componente
  y si lo necesitamos en un componente hijo, lo 
  tenemos que pasar como propiedad.

- Si además, el componente hijo es el modifica 
  la variable de estado, la función setter se
  tiene que pasar como propiedad también.

- Lista de tareas domésticas con 3 componentes:
  - Lista de Tareas (use el flag y la lista de tareas)
  - Flag de ver solo los pendientes (usa y modifica el flag)
  - Tarea individual (modifica la lista de tareas)
*/

import {useState} from "react";
import Flag from "./09Flag.js";
import Tarea from "./09Tarea.js";

function ListaTareas({tareas}) {
  const [listaTareas, setListaTareas] = useState(tareas);
  const [verPendientes, setVerPendientes] = useState(false);

  const listaMostrar = listaTareas.filter( (tarea) => !tarea.hecha || !verPendientes);

  return (
    <>
      <h3>Lista de tareas domésticas {verPendientes ? "por hacer" : ""}</h3> 
      <Flag verPendientes={verPendientes} setVerPendientes={setVerPendientes}>
        Ver solo las tareas que estén pendientes
      </Flag>
      <ul>
      {
        listaMostrar.map( ({descripcion, hecha, indice}) => 
          <Tarea indice={indice} descripcion={descripcion} 
            hecha={hecha} listaTareas={listaTareas} setListaTareas={setListaTareas}/> )
      }
      </ul>
    </>
  )
}

export default ListaTareas;