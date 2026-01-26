import './06Menu.css';

function MenuItem({href, destino="_self", etiqueta, ...resto }) {

  return (
    <li className="menu-item">
      <a href={href} target={destino} {...resto}>{etiqueta}</a>
    </li>
  );
}

export default MenuItem;