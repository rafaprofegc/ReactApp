import logo from './logo.svg';
import './App.css';

// Epígrafe 5.2.9 Ámbito del estado de un componente


import ListaTareas from './epigrafe5/09ListaTareas';

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
