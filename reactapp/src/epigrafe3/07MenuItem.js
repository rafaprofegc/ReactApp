import './06Menu.css';

function MenuItem({etiqueta, href}) {
  // La desestructuración de los argumentos equivale a:
  //const { href, etiqueta} = props;
  return (
    <li class="menu-item">
      <a href={href}>{etiqueta}</a>
    </li>
  )
}

export default MenuItem;