import './06Menu.css';

function MenuItem({etiqueta, href, destino='_self'}) {
  return (
    <li class="menu-item">
      <a href={href} target={destino}>{etiqueta}</a>
    </li>
  )
}

export default MenuItem;