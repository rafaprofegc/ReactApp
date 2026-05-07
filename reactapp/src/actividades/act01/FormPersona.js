import {useState, useEffect, useRef} from 'react';

function FormPersona({personas, setPersonas}) {
  const [persona, setPersona] = useState({nif:'', nombre:'', fecha:'', nivel:'bach', estado:'s', desempleado: true });
  const [insertando, setInsertando] = useState(false);

  const refNif = useRef(null);

  useEffect( () => {
    setInsertando(false);
    setPersona({nif:'', nombre:'', fecha:'', nivel:'bach', estado:'s', desempleado: true });
    

    refNif.current.focus();

  }, [personas]);

  function AgregarPersona(evt) {
    evt.preventDefault();
    setInsertando(true);

    if( persona.nif === '' || persona.nombre === '' ) {
      alert("Nif y nombre no pueden estar vacíos");
      return;
    }

    // Ponemos persona.fecha con un valor de tipo Date
    // Desde el formulario obtenemos un string
    // en formato ISO.

    // Creamos el objeto tipo Date
    const fechaInsertado = new Date(persona.fecha);

    /* ¿Cómo sabemos que la fecha es correcta?
       El constructor Date() no dispara una excepción ni hace nada
       Para verificar si la fecha es correcta podemos hacerlo de 2 formas:
       1ª fechaInsertado.toString() === 'Invalid Date'
       2ª isNaN(fechaInsertado.getTime()) 

       Podemos probarlo si dejamos la fecha en blanco
    */

    if( isNaN(fechaInsertado.getTime()) ) {
      alert('La fecha de nacimiento no es correcta');
      return;
    }

    // En este punto, la fecha es correcta... pero podría haber otros requisitos del dato fecha 
    // Otro requisito: la fecha tiene que ser del pasado (es una fecha nacimiento)
    const ahora = new Date();
    if( ahora < fechaInsertado ) {
      alert("La fecha tiene que ser del pasado");
      return;
    }

    // La fecha es correcta, tenemos que asignarla a persona.fecha, en lugar del string
    // setPersona( {...persona, fecha: fechaInsertado});

    // ¡Ojo! En la lista de personas hay que poner persona.fecha.toLocaleString() 
    // para que se muestre en formato español.
    

    setPersonas([...personas, {...persona, fecha: fechaInsertado}]);
    
  }

  function ManejarDatos(evt) {
    const clave = evt.target.name;
    const valor = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;

    setPersona( {...persona, [clave]:valor} );
  }

  const niveles = [
    { codigo: 'eso', titulo: 'ESO'},
    { codigo: 'bach', titulo: 'Bachillerato'},
    { codigo: 'cfgm', titulo: 'Ciclo Formativo Grado Medio'},
    { codigo: 'cfgs', titulo: 'Ciclo Formativo Grado Superior'},
    { codigo: 'um', titulo: 'Universitarios Medios'},
    { codigo: 'us', titulo: 'Universitarios Superiores'}
  ];

  return (  
    <>
      <h2>Añadir una nueva persona</h2>
      <form onSubmit={AgregarPersona}>
        <fieldset>
          <legend>Datos de la persona</legend>

          <div>
            <label htmlFor='nif'>Nif</label>
            <input ref={refNif} type='text' name='nif' id='nif' value={persona.nif} onChange={ManejarDatos} size='10'/>
            { insertando && persona.nif === '' && <span class='error'>El nif no puede estar vacío</span>}
          </div>

          <div>
            <label htmlFor='nombre'>Nombre completo</label>
            <input type='text' name='nombre' id='nombre' value={persona.nombre} onChange={ManejarDatos} size='40'/>
          </div>

          <div>
            <label htmlFor='fecha'>Fecha Nacimiento</label>
            <input type='date' name='fecha' id='fecha' value={persona.fecha} onChange={ManejarDatos}/>
          </div>

          <div>
            <label htmlFor='nivel'>Nivel de estudios</label>
            <select name='nivel' size='1' value={persona.nivel}>
              {
                niveles.map( ({codigo, titulo}) => 
                  <option value={codigo}>{titulo}</option>
                )
              }
            </select>            
          </div>

          <div>
            <label htmlFor='estado'>Estado</label>
            <div>
              <input type='radio' name='estado' value='s' checked={persona.estado === 's'}/>Soltero &nbsp;
              <input type='radio' name='estado' value='c' checked={persona.estado === 'c'}/>Casado &nbsp;
              <input type='radio' name='estado' value='d' checked={persona.estado === 'd'}/>Divorciado &nbsp;
              <input type='radio' name='estado' value='se' checked={persona.estado === 'se'}/>Separado &nbsp;
              <input type='radio' name='estado' value='v' checked={persona.estado === 'v'}/>Viudo &nbsp;
            </div>
          </div>

          <div>
            <label htmlFor='desempleado'>Desempleado</label>
            <div>
              <input type='checkbox' name='desempleado' checked={persona.desempleado}/>
            </div>
          </div>
        </fieldset>
        <input type='submit' value='Agregar persona'/>
      </form>
    </> 
  )
}

export default FormPersona;