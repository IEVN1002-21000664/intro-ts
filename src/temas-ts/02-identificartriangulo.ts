import {Punto} from './01-distanciadospuntos'
class Triangulo extends Punto {
  punto2: Punto;
  punto3: Punto;

  constructor(punto1: Punto, punto2: Punto, punto3: Punto) {
    super(punto1.x, punto1.y);
    this.punto2 = punto2;
    this.punto3 = punto3;
  }

  calcularDistancias(): { d1: number, d2: number, d3: number } {
    const d1 = this.calcularDistancia(this.punto2); // Distancia de punto1 a punto2
    const d2 = this.punto2.calcularDistancia(this.punto3); // Distancia de punto2 a punto3
    const d3 = this.punto3.calcularDistancia(this); // Distancia de punto3 a punto1 (this es el punto1)
    
    return { d1, d2, d3 };
  }

  esTriangulo(): boolean {
    const { d1, d2, d3 } = this.calcularDistancias();

    return (d1 + d2 > d3) && (d2 + d3 > d1) && (d3 + d1 > d2);
  }
}

const punto1 = new Punto(0, 0);
const punto2 = new Punto(3, 0);
const punto3 = new Punto(0, 4);

const triangulo = new Triangulo(punto1, punto2, punto3);

console.log("Distancia entre punto1 y punto2:", triangulo.calcularDistancia(punto2));
console.log("Distancia entre punto2 y punto3:", punto2.calcularDistancia(punto3));
console.log("Distancia entre punto3 y punto1:", punto3.calcularDistancia(punto1));

if (triangulo.esTriangulo()) {
  console.log("Los puntos forman un triángulo.");
} else {
  console.log("Los puntos NO forman un triángulo.");
}
