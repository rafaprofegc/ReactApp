function Productos({items}) {
  
  return (
    <table border="1">
      <thead>
        <tr><th>Descripción</th><th>Cantidad</th><th>PVP</th><th>Importe</th></tr>
      </thead>
      <tbody>
        {
        items.map( (p) => <tr>
          <td>{p.descripcion}</td>
          <td>{p.cantidad}</td>
          <td>{p.pvp} €</td>
          <td>{p.cantidad * p.pvp} €</td>
        </tr>)
        }
      </tbody>
    </table>
  )
}

export default Productos;