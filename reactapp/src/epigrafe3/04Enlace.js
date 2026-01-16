// 3.3.1 Propiedades
function Enlace(props) {
  return (
    <p>
      <a href={props.url}>{props.texto}</a>
    </p>
  )
}

export default Enlace;