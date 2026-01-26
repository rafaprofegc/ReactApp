import logo from './logo.svg';
import './App.css';

// Epígrafe 4.3 Condiciones en JSX
// 4.3.2 Operador ternario ? 
//       Método map() de array

import Carrito from './epigrafe4/03Carrito';

function App() {
  const items = [
    {descripcion: "Magdalenas", cantidad: 2, pvp: 2.75},
    {descripcion: "Yogurt", cantidad: 8, pvp: 4.25}
  ];

  return <Carrito items={[]}/>
}

export default App;
