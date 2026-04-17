
function ListaTareas({ tareas, setTareas}) {
  const categorias = {
    td: 'Tareas domésticas',
    tc: 'Tareas comunitarias',
    te: 'Tareas de la escuela',
    oc: 'Ocio',
    md: 'Mantenimiento digital'
  };

  const prioridad = {
    b: 'Baja',
    m: 'Media',
    a: 'Alta',
    u: 'Urgente'
  };

  function EliminarTarea(id) {
    const pendientes = tareas.filter( (tarea) => tarea.id !== id );
    setTareas(pendientes);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Título</th>
          <th>Categoría</th>
          <th>Prioridad</th>
          <th>Remunerado</th>
          <th>Fecha</th>
          <th>Descripcion</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          tareas.map( (tarea) => 
            <tr key={tarea.id}>
              <td>{tarea.id}</td>
              <td>{tarea.titulo}</td>
              <td>{categorias[tarea.categoria]}</td>
              <td>{prioridad[tarea.prioridad]}</td>
              <td>{tarea.remunerado ? "Si" : "Gratis"}</td>
              <td>{tarea.fecha.toLocaleString()}</td>
              <td>{tarea.descripcion}</td>
              <td><button onClick={() => EliminarTarea(tarea.id)}>Eliminar</button></td>
            </tr>
          )
      }
      </tbody>
    </table>
  );
}

export default ListaTareas;