function ListaOpciones({opciones}) {
  return (
    <>
      <span>Elija un objeto para tu kit de supervivencia&nbsp;</span>
      <select>
        {opciones.map( (opcion) => <option key={opcion} value={opcion}>{opcion}</option>)}
      </select>
    </>
  );
}

export default ListaOpciones;