// Epígrafe 3.4 Componentes funcionales

// El 06MenuItem tiene las propiedades agrupadas en el objeto props
//import MenuItem from './06MenuItem';

// Epígrafe 3.4.1 Desestructurar propiedades
// El 07MenuItem tiene las propiedades desestructuradas
import MenuItem from './07MenuItem';
import './06Menu.css';

function Menu() {
  return (
    <nav class="barra">
      <h1 class="titulo">Menú de la empresa</h1>
      <ul class="menu">
        <MenuItem etiqueta="Inicio" href="/"/>
        <MenuItem etiqueta="Acerca de..." href="/about"/>
        <MenuItem etiqueta="Blog" href="/blog"/>
      </ul>
    </nav>
  );
}

export default Menu;