import logo from './logo.svg';
import './App.css';

// Epígrafe 4.3 Condiciones en JSX
// 4.3.4 Uso de objetos para opciones

import Icono from './epigrafe4/05Icono';
import { IconoEliminadoSolo } from './epigrafe4/05Icono';
function App() {
  return (
    <>
      <Icono estado="eliminado">Esto está eliminado</Icono>
      <Icono estado="publicado">Esta está publicado</Icono>
      <Icono estado="borrador">Esto está en estado borrador</Icono>
      <Icono>Esto no tiene estado</Icono>
      <IconoEliminadoSolo>Esto está eliminado</IconoEliminadoSolo>
    </>
  );  
}

export default App;
