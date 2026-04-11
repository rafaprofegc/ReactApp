import {useState, useEffect} from 'react';

function FormularioTarea({ tareas, setTareas }) {

  const [tarea, setTarea] = useState({});

  useEffect( () => {
    // Generar el ID automático
    const inicio = 0;
    let elMayor = 0;
    if( tareas.length > 0 )
      elMayor = tareas.reduce( (inicio, tarea) => tarea.id > inicio ? tarea.id : inicio)

    // Poner la fecha en el formato aceptado por el navegador
    const ahora = new Date();
    const offSet = ahora.getTimezoneOffset() * 60000
    const ahoraLocal = new Date( ahora - offSet);
    const fecha = ahoraLocal.toISOString().slice(0,16);

    // Establecer los valores por defecto de la tarea
    setTarea({id: elMayor + 1, 
              titulo: '', 
              categoria:'', 
              prioridad:'b', 
              remunerado: true,
              fecha: fecha,
              descripcion: '' });         
  }, [tareas]);


  function eventoOnChange( evt ) {
    const clave = evt.target.name;
    const valor = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;

    setTarea( {...tarea, [clave]:valor} );

  }

  function envioForm( evt ) {
    evt.preventDefault();

    // Controlo la tarea
    const encontrado = ['b','m','a','u'].find( (p) => p === tarea.prioridad);
    if( !encontrado )
      alert("La prioridad no es válida");
    
    // La tarea es correcta. Se añade al array de tareas
    setTareas( [...tareas, tarea]);

  }

  return (
    <form onSubmit={envioForm}>
      <h3>Agregar una nueva tarea</h3>
      <div>
        <label for='id'>Id</label>
        <span>{tarea.id}</span>
      </div>

      <div>
        <label for='titulo'>Título</label> 
        <input type='text' name='titulo' id='titulo' size='40'
          value={tarea.titulo} onChange={eventoOnChange}/>
      </div>

      <div>
        <label for='categoria'>Categoría</label>
        <select name='categoria' id='categoria' size='1' 
          value={tarea.categoria} onChange={eventoOnChange}>
          <option value=''>Despliega la lista y elige una</option>
          <option value='td'>Tareas domésticas</option>
          <option value='tc'>Tareas comunitarias</option>
          <option value='te'>Tareas de la escuela</option>
          <option value='oc'>Ocio</option>
          <option value='md'>Mantenimiento digital</option>
        </select>
      </div>

      <div>
        <label for='prioridad'>Prioridad</label>
        
          <input type='radio' name='prioridad' value='b' checked={tarea.prioridad === 'b'} 
            onChange={eventoOnChange}/>Baja&nbsp;
          <input type='radio' name='prioridad' value='m' checked={tarea.prioridad === 'm'}
            onChange={eventoOnChange}/>Media&nbsp;
          <input type='radio' name='prioridad' value='a' checked={tarea.prioridad === 'a'} 
            onChange={eventoOnChange}/>Alta&nbsp;
          <input type='radio' name='prioridad' value='u' checked={tarea.prioridad === 'u'}
            onChange={eventoOnChange}/>Urgente&nbsp;
        
      </div>

      <div>
        <label for='remunerado'>Remunerado</label>
        <input type='checkbox' name='remunerado' id='remunerado' checked={tarea.remunerado}
          onChange={eventoOnChange}/>
      </div>

      <div>
        <label for='fecha'>Fecha</label>
        <input type='datetime-local' name='fecha' id='fecha' value={tarea.fecha} 
          onChange={eventoOnChange}/>
      </div>

      <div>
        <label for='descripcion'>Descripción</label>
        <textarea rows='5' cols='30' name='descripcion' id='descripcion' 
          value={tarea.descripcion} onChange={eventoOnChange}></textarea>
      </div>
      <div>
        <label></label>
        <input type='submit' value='Crear tarea'/>
      </div>
      

    </form>
  );
}

export default FormularioTarea;
