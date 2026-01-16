import logo from './logo.svg';
import './App.css';

// Epígrafe 3.3 Personalización de componentes
// 3.3.2 Propiedad children

import Enlace from './epigrafe3/05Enlace';

function App() {
  
  return (
    <>
      <Enlace url="https://react.dev">Sitio web de <b>React</b></Enlace>
      <Enlace url="https://iesgrancapitan.org">Web del Gran Capitán</Enlace>
      <Enlace url="https://google.com">Búsquedas en Google</Enlace>
    </>
  );
}

export default App;
