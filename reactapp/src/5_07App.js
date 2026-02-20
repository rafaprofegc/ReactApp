import logo from './logo.svg';
import './App.css';

// Epígrafe 5.2.7 Valor de estado y renderizado


import ListaTareas from './epigrafe5/07ListaTareas';

function App() {
  
  const tareas = ["Lavar los platos", 
                  "Poner lavadora", 
                  "Planchar los pantalones", 
                  "Barrer y fregar el suelo"];
  return (
    <ListaTareas tareas={tareas} />
  );
}

export default App;
