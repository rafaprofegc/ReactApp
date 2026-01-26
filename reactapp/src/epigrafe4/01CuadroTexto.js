function CuadroTexto({label, name, ...resto}) {
  // {label, name, title, placeholder, size, value}
  // 
  return (
    <>
    <label htmlFor={name}>{label}</label>
    <input name={name} id={name} {...resto}/>
    </>
  )
}

export default CuadroTexto;