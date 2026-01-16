import logo from './logo.svg';
import './App.css';

// Epígrafe 3.3 Personalización de componentes
// 3.3.1 Propiedades
//
// Cada componente solo renderiza un elemento
// (HTML o componente React)
// return devuelve un solo elemento y dentro
// de este los que necesitemos.

// Formas de poner un árbol jerárquico en un
// componente:
// 1ª Utilizar <div>  El elemento <div> aparecerá en el resultado final.
// 2ª Utilizar Fragment, el componente React para agrupar elementos.

import Mensaje from './epigrafe3/02Mensaje';
import Enlace from './epigrafe3/01Enlace';

// import {Fragment} from "react";

function App() {
  
  return (
    /*
    <div>
      <Mensaje />
      <Enlace/>
    </div>
    */

    /* Uso de Fragment
    <Fragment>
      <Mensaje/>
      <Enlace/>
    </Fragment>
    */

    // Uso de Fragment abreviado
    <>
      <Mensaje />
      <Enlace />
    </>
  );
}

export default App;
