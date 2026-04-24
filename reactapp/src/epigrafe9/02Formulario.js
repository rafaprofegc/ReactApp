
/*
  Epígrafe 8.4 Fases y propagación de efectos

  Formulario que define eventos onFocus y onBlur en un fieldset
  en lugar de los campos individuales para resaltar la sección en la
  que se encuentra
*/

import { useState, useRef, useEffect } from 'react';

function Formulario() {
  const SIN_FOCO = 0;
  const FOCO_USUARIO = 1;
  const FOCO_PETICION = 2;

  const [foco, setFoco] = useState(SIN_FOCO);

  const refNombre = useRef(null);

  const onFocoUsuario = () => setFoco(FOCO_USUARIO);
  const onFocoPeticion = () => setFoco(FOCO_PETICION);
  const onDesenfoque = () => setFoco(SIN_FOCO); 

  useEffect( () => {
    refNombre.current.focus();
  }, []);

  function getEstilo(focoActual) {
    const estilo = {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5em',
      width: '50vw'
    }


    if( foco === focoActual ) {
      return {...estilo, backgroundColor: '#FFDD88'};
    }
    else {
      return { ...estilo, backgroundColor: '#FFFFFF'};
    }
  }

  return (
    <form onBlur={onDesenfoque}>
      <fieldset style={getEstilo(FOCO_USUARIO) } onFocus={onFocoUsuario} onBlur={onDesenfoque}>
        <legend>Datos de usuario</legend>
        
          <label htmlFor='nombre'>Nombre</label>
          <input ref={refNombre} type='text' name='nombre' size='30'/>
        

        
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' size='30'/>  
        
        
      </fieldset>

      <fieldset style={getEstilo(FOCO_PETICION)} onFocus={onFocoPeticion} onBlur={onDesenfoque}>
        
          <label htmlFor='asunto'>Asunto</label>
          <input type='text' name='asunto' size='40'/>
        
        
        
          <label htmlFor='texto'>Texto</label>
          <textarea name='texto' rows='5' cols='40'></textarea>
        
      </fieldset>
      <input type='submit' value='Enviar'/>
    </form>
  );
}

export default Formulario;