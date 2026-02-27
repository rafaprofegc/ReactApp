function Tarea({indice, descripcion, hecha, listaTareas, setListaTareas}) {

  function CambiaTarea(tareas, indice) {
    return tareas.map( (tarea) => 
      tarea.indice === indice ? {...tarea, hecha: !tarea.hecha} : tarea);
  }

  const estiloHecha = {color:"red", textDecoration: "line-through"};
  const estiloPendiente = {color:"blue"};

  return (
    <li key={indice} style={hecha ? estiloHecha: estiloPendiente}>
      {descripcion}&nbsp;
      <button onClick={() => setListaTareas(CambiaTarea(listaTareas, indice))}>
        {hecha ? "Pendiente" : "Hecha"}
      </button>
    </li>
  )
}

export default Tarea;