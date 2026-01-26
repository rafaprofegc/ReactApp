import CuadroTexto from "./01CuadroTexto";

function JSX({usuario}) {

  // 4.2.3 Uso de variables JavaScript
  const ahora = new Date().toLocaleDateString();
  // Poner código JSX en una variable
  const saludo = <span>Hola {usuario}</span>;
  const fechaHoraCursiva = <em>{ahora}</em>;

  // 4.2.3 Uso de funciones JavaScript
  function ConvierteMayusculas(texto) {
    return texto.toUpperCase();
  }

  // 4.2.4 Propiedades en JSX
  const textoEntrada = {
    name: 'usuario',
    label:'login',
    title: 'Login del usuario',
    placerholder: 'Introduzca un login de usuario',
    size: 40,
    value: ConvierteMayusculas(usuario)
  };

  return (
    // Código JSX
    <main>
     <h1>Esto es JSX</h1> 
     <p>{saludo}, la fecha y la hora actual es {fechaHoraCursiva}</p>
     <p>El usuario del componentes es {ConvierteMayusculas(usuario)}</p>
     <CuadroTexto {...textoEntrada}/>
    </main>
  );
}

export default JSX;