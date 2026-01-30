import IconoEliminado from './05eliminado.svg';
import IconoBorrador from './05borrador.svg';
import IconoPublicado from './05publicado.svg';

function Icono({estado, children}) {

  // Definimos un objeto que tendrá
  // como propiedades los iconos que hemos
  // descargado
  const iconosEstado = {
    eliminado: IconoEliminado,
    borrador: IconoBorrador,
    publicado: IconoPublicado
  };

  return (
    <p>
      <img src={iconosEstado[estado] || iconosEstado["eliminado"]} align="center"/>
      {children}
    </p>
  )
}

function IconoEliminadoSolo({children}) {
  return <p><img src={IconoEliminado} align="center"/>{children}</p>
}
export {IconoEliminadoSolo};

export default Icono;