// Epígrafe 3.3.2 Propiedad children

function Enlace(props) {
  return (
    <p>
      <a href={props.url}>{props.children}</a>
    </p>
  )
}

export default Enlace;