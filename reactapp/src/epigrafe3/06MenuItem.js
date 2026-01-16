// 3.4 Componentes funcionales
import './06Menu.css';

function MenuItem(props) {
  return (
    <li class="menu-item">
      <a href={props.href}>{props.etiqueta}</a>
    </li>
  );
}

export default MenuItem;