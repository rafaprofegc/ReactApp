import logo from './logo.svg';
import './App.css';

// Epígrafe 5.2.8 Múltiples variables de estado


import ListaTareas from './epigrafe5/08ListaTareas';

function App() {
  
  const tareas = [
    {descripcion:"Lavar los platos", hecha: false, indice: 0},
    {descripcion:"Poner lavadora", hecha: false, indice:1},
    {descripcion:"Planchar los pantalones", hecha:false, indice:2}, 
    {descripcion:"Barrer y fregar el suelo", hecha:false, indice:3}
  ];

  return (
    <ListaTareas tareas={tareas} />
  );
}

export default App;
