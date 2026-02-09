import logo from './logo.svg';
import './App.css';

// Epígrafe 4.3 Lista de objetos en JSX (atributo key)

/* 
  Cuando en JSX tenemos que poner una lista (select, ul, ol, dl, ...) es
  aconsable utilizar el atributo key

  El atributo key es de React y lo utiliza para optimizar el renderizado.

  Ejemplo: Crear un componente con una lista desplegable (select)
  con varias opciones 

  */
import ListaOpciones from './epigrafe4/08Select';

function App() {
  const items = ["pijama", "gorro", "playstation", "libros"];

  return <ListaOpciones opciones={items}/>;
}

export default App;
