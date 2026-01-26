function Usuario({usuario, perfil}) {
  // Se puede renderizar así: 
  // { perfil === "admin" ? <span> - <b>Administrador</b></span> : ""}  

  // Operador && para evaluar un if sin else
  return (
    <p>
      Usuario: {usuario}
      { perfil === "admin" && <span> - <b>Administrador</b></span>} 
    </p>
  )
}

export default Usuario;