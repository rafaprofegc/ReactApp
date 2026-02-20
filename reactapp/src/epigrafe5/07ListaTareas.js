/*
Epígrafe 5.2.7 Valor de estado y renderizado

Si la variable de estado es array u objeto
para que cambiar hay que pasarle a la función
setter un nuevo array u objeto */

import {useState} from "react";

function ListaTareas({tareas}) {
  const [listaTareas, setListaTareas] = useState(tareas);

  return (
    <ul>
      {
        listaTareas.map( (tarea, indice) => 
          <li key={tarea}>
            <>
              {tarea}
              <button onClick={() => {
                const antes = listaTareas.slice(0, indice);
                const despues = listaTareas.slice(indice + 1);
                const quedan = [...antes, ...despues];
                setListaTareas(quedan);
              }}>Hecha</button>
            </>
          </li>
        )
      }
    </ul>
  )
}

export default ListaTareas;