import {useState} from 'react';

function Contador({inicio}) {
  /* Puede pasar como valor de inicio:
    - Valor null
    - Valor 0
    - Valor de una propiedad del componente
    - Cadena ""
    - Resumiendo: cualquier valor

    Cuidado con pasar un valor que devuelve una función, ya que la función
    siempre se va a ejecutar, pero solo se usa el valor de la primera
  */

  const [contador, setContador] = useState( inicio );

}