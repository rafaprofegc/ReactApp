
function ListaPersonas({personas, setPersonas}) {

  function EliminarPersona() {

  }

  return (
    <table>
      <thead>
        <tr>
          <th>Nif</th>
          <th>Nombre completo</th>
          <th>Fecha nacimiento</th>
          <th>Nivel de estudios</th>
          <th>Estado</th>
          <th>Desempleado</th>
          <th>Eliminar?</th>
        </tr>
      </thead>
      <tbody>
        {
          personas.map( ({nif, nombre, fecha, nivel, estado, desempleado}) => 
            <tr key={nif}>
              <td>{nif}</td>
              <td>{nombre}</td>
              <td>{fecha.toLocaleDateString()}</td>
              <td>{nivel}</td>
              <td>{estado}</td>
              <td>{desempleado ? 'En paro' : 'En activo'}</td>
              <td><button onClick={EliminarPersona}>Elimina persona</button></td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default ListaPersonas;