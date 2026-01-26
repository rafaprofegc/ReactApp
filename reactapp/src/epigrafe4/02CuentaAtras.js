function CuentaAtras({tiempo}) {
  /*
  const minutos = Math.floor(tiempo / 60);
  const segundos = tiempo % 60;
  const tiempoRestante = <p>Minutos: {minutos}. Segundos: {segundos}</p>

  if( minutos == 0 && segundos == 0 ) {
    return null;    // Devolver null implica no renderizar nada.
  }
  else {
    return tiempoRestante;
  }
  */
  if( tiempo === 0 ) return null;
  const minutos = Math.floor(tiempo/60);
  const segundos = tiempo % 60;
  return <p>Minutos:{minutos}. Segundos:{segundos}</p>
}

export default CuentaAtras;