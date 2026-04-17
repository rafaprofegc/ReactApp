import {useState, useEffect, useRef} from 'react';

function FormularioTarea({ tareas, setTareas }) {

  const [tarea, setTarea] = useState({});
  const [creandoTarea, setCreandoTarea] = useState(false);

  const focoTitulo = useRef(null);

  useEffect( () => {
    // Generar el ID automático
    let elMayor = 0;
    if( tareas.length > 0 )
      elMayor = tareas.reduce( (mayor, tarea) => tarea.id > mayor ? tarea.id : mayor, 0);

    // Poner la fecha en el formato aceptado por el navegador
    const ahora = new Date();
    const offSet = ahora.getTimezoneOffset() * 60000
    const ahoraLocal = new Date( ahora - offSet);
    const fecha = ahoraLocal.toISOString().slice(0,16);

    // Todavía no ha pulsado en Crear Tarea
    setCreandoTarea(false);

    // Establecer los valores por defecto de la tarea
    setTarea({id: elMayor + 1, 
              titulo: '', 
              categoria:'', 
              prioridad:'', 
              remunerado: true,
              fecha: fecha,
              descripcion: '' }); 
              
    focoTitulo.current.focus();
      
  }, [tareas]);


  function eventoOnChange( evt ) {
    const clave = evt.target.name;
    let valor = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;

    setTarea( {...tarea, [clave]:valor} );

  }

  function envioForm( evt ) {
    evt.preventDefault();

    setCreandoTarea(true);
    // Campos obligatorios: título, categoría, prioridad, fecha
    if( tarea.titulo.trim() === '' || tarea.categoria.trim() === '' || tarea.prioridad.trim() === '' || tarea.fecha.trim() === '' ) {
      alert('Revise el formulario. Hay campos obligatorios sin rellenar');
      return;
    } 

    // Controlo la tarea
    const encontrado = ['b','m','a','u'].find( (p) => p === tarea.prioridad);
    if( !encontrado ) {
      alert("La prioridad no es válida");
      return;
    }
    
    // La tarea es correcta. Se añade al array de tareas
    const tareaNueva = { ...tarea, fecha: new Date(tarea.fecha) }
    setTareas( [...tareas, tareaNueva]);

  }

  return (
    <form onSubmit={envioForm}>
      <h3>Agregar una nueva tarea</h3>
      <div>
        <label htmlFor='id'>Id</label>
        <span>{tarea.id}</span>
      </div>

      <div>
        <label htmlFor='titulo'>Título *</label> 
        <input ref={focoTitulo} type='text' name='titulo' id='titulo' size='40'
          value={tarea.titulo} onChange={eventoOnChange} 
          className={creandoTarea && tarea.titulo.trim() === '' ? 'input_error' : 'input_ok'}/> &nbsp;
        {creandoTarea && tarea.titulo.trim() === '' && <span className='error'>El título es obligatorio</span>}
      </div>

      <div>
        <label htmlFor='categoria'>Categoría *</label>
        <select name='categoria' id='categoria' size='1' 
          value={tarea.categoria} onChange={eventoOnChange}>
          <option value=''>Despliega la lista y elige una</option>
          <option value='td'>Tareas domésticas</option>
          <option value='tc'>Tareas comunitarias</option>
          <option value='te'>Tareas de la escuela</option>
          <option value='oc'>Ocio</option>
          <option value='md'>Mantenimiento digital</option>
        </select> &nbsp;
        {creandoTarea && tarea.categoria.trim() === '' && <span className='error'>Tiene que elegir una categoría</span>}
      </div>

      <div>
        <label htmlFor='prioridad'>Prioridad *</label>        
        <input type='radio' name='prioridad' value='b' checked={tarea.prioridad === 'b'} 
          onChange={eventoOnChange}/>Baja&nbsp;
        <input type='radio' name='prioridad' value='m' checked={tarea.prioridad === 'm'}
          onChange={eventoOnChange}/>Media&nbsp;
        <input type='radio' name='prioridad' value='a' checked={tarea.prioridad === 'a'} 
          onChange={eventoOnChange}/>Alta&nbsp;
        <input type='radio' name='prioridad' value='u' checked={tarea.prioridad === 'u'}
          onChange={eventoOnChange}/>Urgente&nbsp;
        {creandoTarea && tarea.prioridad.trim() === '' && <span className='error'>Hay que elegir una prioridad</span> }
      </div>

      <div>
        <label htmlFor='remunerado'>Remunerado</label>
        <input type='checkbox' name='remunerado' id='remunerado' checked={tarea.remunerado}
          onChange={eventoOnChange}/>
      </div>

      <div>
        <label htmlFor='fecha'>Fecha *</label>
        <input type='datetime-local' name='fecha' id='fecha' value={tarea.fecha} 
          onChange={eventoOnChange}/> &nbsp;
        { creandoTarea && tarea.fecha.trim() === '' && <span className='error'>La fecha y hora es obligatorio</span>}
      </div>

      <div>
        <label htmlFor='descripcion'>Descripción</label>
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
