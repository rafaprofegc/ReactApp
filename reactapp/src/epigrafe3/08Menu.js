import './06Menu.css';
import MenuItem from './08MenuItem';

// Epígrafe 3.4.2 Parámetros por defecto

function Menu() {
  return (
    <nav className="barra">
      <h1 className="titulo">Menú de la empresa</h1>
      <ul className="menu">
        <MenuItem etiqueta="Inicio" href="/" destino="_blank"/>
        <MenuItem etiqueta="Acerca de" href="/about"/>
        <MenuItem etiqueta="Blog" href="/blog"/>
      </ul>
    </nav>
  )
}

export default Menu;