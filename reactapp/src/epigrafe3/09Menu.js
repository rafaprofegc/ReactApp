import './06Menu.css';

import MenuItem from './09MenuItem';
function Menu() {

  return (
    <nav className="barra">
      <h1 className="titulo">Menú de la aplicación</h1>
      <ul className="menu">
        <MenuItem etiqueta="Inicio" href="/" destino="_blank" id="inicio" title="Ir al incio"/>
        <MenuItem etiqueta="Acerca de ..." href="/about" title="Ir a los créditos de la aplicación" id="acerca" />
        <MenuItem etiqueta="Blog" href="/blog" id="blog"/>
      </ul>
    </nav>
  );
}

export default Menu;
