
function CarritoCompra({usuario, articulos}) {
  const haySesion = usuario != null;
  const hayTarjeta = haySesion && usuario.tarjetaCredito != null;
  const hayDireccion = haySesion && usuario.direccion != null;
  const carritoVacio = articulos.length == 0;
  const conExistencias = articulos.every( (art) => art.existencias > 0);

  return (
    <>
      <ListaArticulos articulos={articulos}/>
      <br/>
      {
        haySesion ?
          <BotonesUsuario hayTarjeta={hayTarjeta} hayDireccion={hayDireccion}
            noPuedeComprar={carritoVacio || !conExistencias}/>
        :
          <BotonesInvitado noPuedeComprar={carritoVacio || !conExistencias}/>
      }
    </>
  )
}

function BotonesUsuario({hayTarjeta, hayDireccion, noPuedeComprar}) {
  return (
    <>
    {
      hayTarjeta ?
      <>
        <Boton etiqueta="Pagar" disabled={noPuedeComprar}/>
        { hayDireccion && <Boton etiqueta="Comprar 1 clic" disabled={noPuedeComprar}/>}
      </>
      :
      <Boton etiqueta="Añadir tarjeta crédito" disabled={false}/>
    }
    </>
  )
}

function BotonesInvitado({noPuedeComprar}) {
  return (
    <>
      <Boton etiqueta="Iniciar sesión" disabled={false}/>
      <Boton etiqueta="Pagar como invitado" disabled={noPuedeComprar}/>
    </>
  )
}

function ListaArticulos({articulos}) {

  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Referencia</th>
          <th>Descripción</th>
          <th>Existencias</th>
          <th>PVP</th>
        </tr>
      </thead>
      <tbody>
        {
          articulos.map( (art) => (
            <tr>
              <td>{art.referencia}</td>
              <td>{art.descripcion}</td>
              <td>{art.existencias}</td>
              <td>{art.pvp}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

function Boton({etiqueta, disabled}) {
  return <button disabled={disabled}>{etiqueta}</button>
}

export default CarritoCompra;