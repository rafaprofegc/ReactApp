import logo from './logo.svg';
import './App.css';

// Epígrafe 3.3 Personalización de componentes
// 3.3.1 Propiedades

import Enlace from './epigrafe3/04Enlace';

function App() {
  
  return (
    <>
      <Enlace url="https://react.dev" texto="Sitio web de React"/>
      <Enlace url="https://iesgrancapitan.org" texto="Web del Gran Capitán"/>
      <Enlace url="https://google.com" texto="Búsquedas de Google"/>
    </>

  );
}

export default App;
