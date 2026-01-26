import logo from './logo.svg';
import './App.css';

// Epígrafe 4.3 Condiciones en JSX
// 4.3.1 Devolver null para no renderizar nada

import CuentaAtras from './epigrafe4/02CuentaAtras';

function App() {
  return <CuentaAtras tiempo={70}/>
}

export default App;
