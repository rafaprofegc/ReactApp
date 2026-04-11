import './App.css';

/* Epígrafe 9 Formularios en React

  - Lista de tareas que se rellenan con un formulario
  - Se presenta la lista de tareas en formato tabla y debajo
    un formulario para rellenar una nueva tarea.
  - Cada tarea tiene:
    - Id -> Entero. Generado automáticamente. 1 más que el mayor en ese momento.
    - Título (input text)
    - Categoría (select)
    - Prioridad (radio button)
    - Remunerado (checkbox)
    - Fecha de realización (datetime-local)
    - Descripcion (textarea)

  - En la lista de tareas un botón para borrar la tarea

                         App

            ListaTareas       FormularioTarea  
            (tareas             (tareas
             setTareas )         setTareas)

*/


import { useState } from 'react';

import ListaTareas from './epigrafe9/01ListaTareas';
import FormularioTarea from './epigrafe9/01FormularioTarea';

import './epigrafe9/01estilos.css';

function App() {
  const [tareas, setTareas] = useState([]);

  return (
    <>
      <h1>Tareas para hacer</h1>
      <ListaTareas tareas={tareas} setTareas={setTareas} />
      <hr/>
      <FormularioTarea tareas={tareas} setTareas={setTareas}/>
    </>  
  );
}

export default App;