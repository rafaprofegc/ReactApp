
function ListaTareas({ tareas, setTareas}) {

  return (
    <table>
      <thead>
        <th>Id</th>
        <th>Título</th>
        <th>Categoría</th>
        <th>Prioridad</th>
        <th>Remunerado</th>
        <th>Fecha</th>
        <th>Descripcion</th>
      </thead>
      <tbody>
        {
          tareas.map( (tarea) => {
            <tr key={tarea.id}>
              <td>{tarea.id}</td>
              <td>{tarea.titulo}</td>
              <td>{tarea.categoria}</td>
              <td>{tarea.prioridad}</td>
              <td>{tarea.remunerado ? "Si" : "Gratis"}</td>
              <td>{tarea.fecha}</td>
              <td>{tarea.descripcion}</td>
            </tr>
          })
      }
      </tbody>
    </table>
  );
}

export default ListaTareas;