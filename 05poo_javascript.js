// Forma tradicional de definir prototipos
// en JavaScript
function Vacaciones(destino, duracion) {
  this.destino = destino;
  this.duracion = duracion;
}

Vacaciones.prototype.imprimir = function() {
  console.log(`${this.destino} ${this.duracion} dias`);
}

const v1 = new Vacaciones('Caribe', 15);
v1.imprimir();

class CVacaciones {
  constructor(destino, duracion) {
    this.destino = destino;
    this.duracion = duracion;
  }

  imprimir() {
    console.log(`${this.destino} ${this.duracion} dias`);
  }
}

const v2 = new CVacaciones('Noruega', 10);
v2.imprimir();

class PremioTv extends CVacaciones {
  constructor(destino, duracion, cantidad) {
    super(destino, duracion);
    this.cantidad = cantidad;
  }

  imprimir() {
    super.imprimir();
    console.log(`Cantidad en metálico: ${this.cantidad}€`);
  }
}

const ptv = new PremioTv('Escocia', 8, 2000);
ptv.imprimir();