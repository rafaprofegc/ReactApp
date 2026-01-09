const PI = 3.14;

function suma(...numeros) {
  let sumaTotal = 0;

  //numeros.foreach( (n) => sumaTotal += n);
  for( const n of numeros ) {
    sumaTotal += n;
  }
  return sumaTotal;
}

function resta( minuendo, sustraendo) {
  return minuendo - sustraendo;
}

function circulo(radio) {
  const area = PI * radio * radio;
  return area;
}

export {PI, suma, resta};  // En lugar de export en cada definición
export default circulo;