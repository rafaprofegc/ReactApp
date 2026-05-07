import './App.css';

/* Ejercicio 1
   Relación de formularios en React

   Crear una aplicación React que crea una lista de personas:
    a) Cada persona se crea mediante un formulario al que se añaden los siguientes campos:
      • Nif (poner el foco por defecto).
      • Nombre completo.
      • Fecha nacimiento.
      • Nivel de estudios: ESO, Bachillerato, CFGM, CFGS, Universitarios medios,
        universitarios superiores (lista de selección única).
      • Estado: Casado, Soltero, Divorciado, Separado, Viudo (grupo de botones de
        radio).
      • Desempleado (checkbox).

    b) Definir qué componentes son necesarios y decidir en cuál de ellos residirán los
       datos de la aplicación como estado.
    c) Visualizar la lista de personas (formato tabla o lista) y el formulario para añadir
       nuevas personas.
    d) Incluir un icono de papelera (búscalo en Google Icons) para cada persona de la
       lista. Al hacer clic, la persona se borra.
*/

import ListaPersonas from './actividades/act01/ListaPersonas';
import FormPersona from './actividades/act01/FormPersona';

import {useState} from 'react';

function App() {
  const [personas, setPersonas] = useState([]);

  return (
    <>
      <h1>Registro de desempleados</h1>
      <ListaPersonas personas={personas} setPersonas={setPersonas}/>
      <FormPersona personas={personas} setPersonas={setPersonas}/>
    </>  
  );
}

export default App;