import logo from './logo.svg';
import './App.css';

// Epígrafe 6.2.3 Ejecutar un efecto en el montaje y algunos renderizados


import Combinacion from './epigrafe6/05Combinacion';

import {useState} from "react";

function App() {
  const prendas = ["pantalón", "falda", "jersey", "camisa"];
  const colores = ["rojo", "verde", "azul", "amarillo"];

  const [prenda, setPrenda] = useState(prendas[0]);
  const [color, setColor] = useState(colores[0]);

  return (
    <>
      <Combinacion prenda={prenda} color={color}/>
      <br/>
      <button onClick={() => setPrenda(prendas[0])}>Ponerse {prendas[0]}</button>&nbsp;
      <button onClick={() => setPrenda(prendas[1])}>Ponerse {prendas[1]}</button>&nbsp;
      <button onClick={() => setPrenda(prendas[2])}>Ponerse {prendas[2]}</button>&nbsp;
      <button onClick={() => setPrenda(prendas[3])}>Ponerse {prendas[3]}</button>&nbsp;
      <br/>
      <button onClick={() => setColor(colores[0])}>Cambiar a color {colores[0]}</button>&nbsp;
      <button onClick={() => setColor(colores[1])}>Cambiar a color {colores[1]}</button>&nbsp;
      <button onClick={() => setColor(colores[2])}>Cambiar a color {colores[2]}</button>&nbsp;
      <button onClick={() => setColor(colores[3])}>Cambiar a color {colores[3]}</button>&nbsp;
    </>
  );
}

export default App;
