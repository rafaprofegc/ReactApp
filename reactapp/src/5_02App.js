import logo from './logo.svg';
import './App.css';

// Epígrafe 5.2.3 Valor inicial de la variable de estado
// Usamos una propiedad para inicializar la variable de estado


import Contador from './epigrafe5/02Contador';

function App() {
  
  return (
    <>
      <Contador inicio={0}/>
      <Contador inicio={10}/>
      <Contador inicio={-20}/>
    </>
  );
}

export default App;
