import logo from './logo.svg';
import './App.css';

// Epígrafe 4.4 Peculiaridades JSX

/* 
  - Comentarios en JSX
  - Atributos for y class
  - Fragmentos abreviados. <></>
  - Etiquetas de cierre en los nodos sin contenido con estilo XML.
  - Caracteres especiales (copyright, emoticono, símbolos, ...)
  - Atributo style es un objeto
  - Atributos booleanos (require, checked, selected, ... require="true" require="false")
  - Espacios en blanco
  - Atributos data- <img alt="" data-estilo="acuarela" ... id="im1"/>
                    imagen = document.getElementById("im1");
                    imagen.dataset.estilo = "Oleo sobre lienzo"

  */
import ListaDefiniciones from './epigrafe4/09ListaDefiniciones';

function App() {
  // En la parte JavaScript, los comentarios de JavaScript
  /*
    Comentario JavaScript multilínea
  */
  const terminos = [
    {id: "pijama", descripcion:"Prenda de vestir para dormir"},
    {id: "olla", descripcion:"Recipiente metálico o de barro para hacer guisos"},
    {id: "mochila", descripcion:"Bolsa de lona u otro material que se cuelga en la espalda para llevar cosas"}
  ];

  const estilo = {
    backgroundColor: "blue",
    color: "white",
    fontFamily: "sans-serif",
    fontSize: "14pt"
  };

  return (
    // Parte JSX.
    /* Comentario multilínea */
    <div>
      <h3>Comentarios en JSX</h3>
      { // Comentario de una línea, pero el cierre de llave en la siguiente 
      }
      { /* Este comentario puede ocupar varias líneas */ }

      { /* No pueden usarse los atributos HTML for y class, ya que son palabras
           reservadas del lenguaje 
           - for se reemplaza por htmlFor
           - class se reeemplaza por className
      */ }
      <label className="etiqueta" htmlFor="texto1">Introduce un texto</label>
      <input // Comentario dentro de una etiqueta
        name="texto1" id="texto1" size="50"
        /* Comentario multiĺinea dentro
        de una etiqueta */
        placeholder="Introduce un texto"/> 
      
      <br/> { /* Estilo de cierre XML para elementos vacíos: input anterior y br */ }

      { /* Uso de Fragment para asignar key a cada elemento de una lista */ }
      <h3>Mi lista de definiciones</h3>
      <ListaDefiniciones terminos={terminos}/>
      { /* Atributo style como objeto. Las propiedades CSS se nombran con estilo camelCase */ }
      <p style={estilo}>Este párrafo aparece con estilo. Letra blanca y fondo azul</p>

      { /* Si asigno como estilo un literal de objeto, uso la doble llave */ }
      <p style={{border: "1px solid red", fontSize: "16pt", color:"green"}}>Otro texto, con otro estilo y con borde</p>

      { /* Entidades HTML */ }
      <p>&copy; Rafa Lozano</p>

      { /* Caracteres especiales. Mejor usar \u y el codepoint */ }
      <p>El monito {'\u{1F648}'}</p>

      {/* Atributos booleanos: disabled, required, marked, autoFocus y readOnly 
          Usamos {true} o {false} de Javascript, nunca como cadena
          Para true podemos indica el atributo sin valor
          Para false, omitir el atributo
      */ }
      <label htmlFor="sololectura" className="etiqueta">Texto 2</label>
      <input readOnly={true} disabled={false} value="Solo lectura"/>
      
    </div>
  );
}

export default App;
