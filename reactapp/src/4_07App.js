import logo from './logo.svg';
import './App.css';

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
import CarritoCompra from './epigrafe4/07CarritoCompra';

function App() {
  const usuario = {
    login: "pepe",
    tarjetaCredito: "1234",
    direccion: "c/ Mayor, 5"
  };

  const articulos = [
    { referencia: "ACIN0001", descripcion: "Cable USB C", existencias: 3, pvp: 10.5 },
    { referencia: "ALCO0010", descripcion: "Ginebra del garrafón", existencias: 1, pvp: 7.5 },
    { referencia: "CHUC0001", descripcion: "Bolsa de gominolas", existencias: 4, pvp: 3.25 },
    { referencia: "HOGA0001", descripcion: "Rollos papel higiénico", existencias: 2, pvp: 5.5 }
  ];

  return <CarritoCompra usuario={usuario} articulos={articulos}/>;
}

export default App;
