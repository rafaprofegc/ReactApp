import Productos from './03Productos';

function Carrito({items}) {

  return (
    <main>
      <h2>Carrito dela compra</h2>
      {
        items.length === 0 ?
          <p>El carrito está vacío</p> :
          <Productos items={items}/>
      }
    </main>
  )
}

export default Carrito;