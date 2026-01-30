// Epígrafe 4.3 Condiciones en JSX
// 4.3.5 Condiciones complejas en JSX

/* Crear un componente que es un CarritoCompra. Recibe 2 propiedades:
  - Objeto usuario (login, tarjetaCredito, direccion)
  - Un array de objetos articulos (referencia, descripcion, existencias, pvp)

  Al principio muestra los artículos del carrito
  - Si el usuario ha iniciado sesión, el botón Pagar
  - Si el usuario no ha iniciado sesión, un botón Iniciar sesión y otro
    Pagar como invitado
  - Si algún artículo no tiene existencias o si el carrito está vacío, se deshabilitan
    los botones Pagar o Pagar como invitado.
  - Si el usuario ha abierto sesión, pero no tiene tarjeta de crédito, no se pone
    el botón Pagar y se pone el botón Añadir tarjeta de crédito
  - Si el usuario ha abierto sesión, tiene tarjeta de crédito y tiene dirección
    se muestra el botón Comprar con 1 clic junto al botón Pagar. Este se deshabilita
    siguiente la misma lógica que el botón Pagar.

  */

function Boton({etiqueta, disabled}) {
  return <button disabled={disabled}>{etiqueta}</button>;
}

function CarritoCompra({usuario, articulos}) {
  // Condiciones solamente con  operador ?, &&, ||
  const haySesion = usuario != null;
  const hayTarjeta = haySesion && usuario.tarjetaCredito != null;
  const hayDireccion = haySesion && usuario.direccion != null;
  const carritoVacio = articulos.length == 0;
  const conExistencias = articulos.every( (art) => art.existencias > 0 );

  return ( 
    <>
    <table border='1' width='100%'><thead><tr><th>Referencia</th><th>Descripción</th><th>Existencias</th><th>PVP</th></tr></thead><tbody>
    {
      articulos.map( (art) =>  
        (<tr>
          <td>{art.referencia}</td>
          <td>{art.descripcion}</td>
          <td>{art.existencias}</td>
          <td>{art.pvp}</td>
        </tr>)
      )
    }  
      </tbody>
    </table>
    <br/>
    {
      haySesion ? 
        hayTarjeta ?
          <>
          <Boton etiqueta="Pagar" disabled={carritoVacio || !conExistencias}/>
          { hayDireccion && <Boton etiqueta="Comprar 1 clic" disabled={carritoVacio || !conExistencias}/>}
          </>
        :
          <Boton etiqueta="Añadir tarjeta de crédito" disabled={false}/>
      :
      <>
        <Boton etiqueta="Iniciar sesión" disabled={false}/>
        <Boton etiqueta="Pagar como invitado" disabled={carritoVacio || !conExistencias}/>
      </>
    }    
    </>
  );
}

export default CarritoCompra;